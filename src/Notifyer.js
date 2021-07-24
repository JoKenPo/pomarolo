const Notifyer = {
  async init() {
    const permission = await Notification.requestPermission();
    if(permission !== "granted") {
      throw new Error('Permissão negada')
    }

    // Notifyer.notify()
  },
  notify({ title, body, icon }) {
    new Notification(title, {
      body,
      icon
    })
  }
}

export { Notifyer }