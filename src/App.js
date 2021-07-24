import { Notifyer } from './Notifyer.js'
import { Timer } from './Timer.js'

const App = {
  async start() {
    try {
      Timer.init(time);
      // await Notifyer.init()
      // Notifyer.notify({
      //   title: "title",
      //   body: "body"
      // })

    } catch (err) {
      console.log(err.message)
    }

  }
}

export { App }