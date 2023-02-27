class EngineInterface {
  start() {
    throw new Error("Method not implemented!");
  }
}

class Car {
  constructor(engine) {
    if (!(engine instanceof EngineInterface)) {
      throw new Error("Engine is not EngineInterface");
    }

    this._engine = engine;
  }

  start() {
    this._engine.start();
  }
}

class PetrolEngine extends EngineInterface {
  start() {
    // implementation
  }
}

class HybridEngine extends EngineInterface {
  start() {
    // implementation
  }
}

class DieselEngine extends EngineInterface {
  start() {
    // implementation
  }
}

const main = () => {
  const petrolEngine = new PetrolEngine();
  const petrolCar = new Car(petrolEngine);

  const dieselEngine = new DieselEngine();
  const dieselCar = new Car(dieselEngine);

  const hybridEngine = new HybridEngine();
  const hybridCar = new Car(hybridEngine);

  // Booom boom
  petrolCar.start();
  dieselCar.start();
  hybridCar.start();
};

main();