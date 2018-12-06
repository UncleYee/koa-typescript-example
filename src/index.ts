import config from './config'

async function run() {
  const app = require('./web/server').default
  app.listen(config.get('port'))
  console.log(`app is listen at port ${config.get('port')}`)
}

run()
