class Vehicle {
  accelerate() {
    throw new Error("method not implemented");
  }

  brake() {
    throw new Error("method not implemented");
  }

  refill(source) {
    throw new Error("method not implemented");
  }
}

class Car extends Vehicle {
  constructor(engine, storage) {
    super();
    this._engine = engine;
    this._storage = storage;
  }

  accelerate() {
    this._engine.move();
  }

  refill(source) {
    this._storage.fill(source);
  }

  brake() {}
}

class EngineInterface {
  move() {
    throw new Error("method not implemented");
  }
}

class StorageInterface {
  fill(source) {
    throw new Error("method not implemented");
  }

  getSource() {
    throw new Error("method not implemented");
  }
}