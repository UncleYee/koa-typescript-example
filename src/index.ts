import config from './config'

async function run() {
  const app = require('./web/server').default
  const server = app.listen(config.get('port'))
  console.log(`app is listen at port ${config.get('port')}`)
  ; ['SIGINT', 'SIGTERM'].forEach((sig: 'SIGINT' | 'SIGTERM') => process.on(sig, () => {
    console.log(sig)
    server.close(() => process.exit())
  }))
}

run()
