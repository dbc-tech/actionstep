import Bottleneck from 'bottleneck'
import httpProxy from 'http-proxy'
import * as http from 'http'

const config = {
  maxConcurrent: +process.env.MAX_CONCURRENCY! || 3,
  minTime: +process.env.RATE_LIMITER_INTERVAL! || 1000,
  baseUrl: process.env.ACTIONSTEP_API_URL!,
  port: +process.env.PORT! || 3000,
}
console.log(`Starting ActionStep proxy with ${JSON.stringify(config)}`)

const { baseUrl, maxConcurrent, minTime } = config
const limiter = new Bottleneck({
  maxConcurrent,
  minTime,
})
const target = new URL(baseUrl)

const proxy = httpProxy.createProxyServer()
http
  .createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {
    const client = req.headers['x-client-id'] || 'unknown'
    console.log(
      `[${client}] ${JSON.stringify(limiter.counts())} Proxying ${req.method} ${req.url} to ${target.protocol}//${target.host}`,
    )
    await limiter.schedule(async () => {
      proxy.web(req, res, {
        target: {
          protocol: target.protocol,
          host: target.host,
          port: target.port,
        },
        changeOrigin: true,
      })
    })
  })
  .listen(config.port)

proxy.on('error', (err) => {
  console.error(err)
})
