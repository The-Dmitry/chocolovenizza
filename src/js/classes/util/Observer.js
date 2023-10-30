export default class Observer {
  static instanceEventEmitter = new Observer();

  listeners = new Map();

  static getInstance() {
    return this.instanceEventEmitter;
  }

  subscribe(eventName, callback) {
    const list = this.listeners.get(eventName) || new Set();
    list.add(callback);
    this.listeners.set(eventName, list);
  }

  unsubscribe(eventName, callback) {
    const list = this.listeners.get(eventName);
    if (list) {
      list.delete(callback);
    }
  }

  dispatch(eventName, parameter = null) {
    const list = this.listeners.get(eventName);
    if (list && list.size) {
      list.forEach((func) => func(parameter));
    }
  }
}
