class PetrolEngine extends EngineInterface {
  constructor(oilPipe, piston) {
    super();
    this._oilPipe = oilPipe;
    this._piston = piston;
  }

  move() {
    const oil = this._oilPipe.suckOil();
    const energy = oil.burn();
    energy.push(this._piston);
  }
}

class Piston {
  move() {}
}

class OilPipe {
  suckOil() {
    return new Oil();
  }
}

class Oil {
  burn() {
    return new Energy();
  }
}

class Energy {
  push(piston) {
    piston.move();
  }
}

class Tank extends StorageInterface {
  constructor() {
    super();
    this._oil = null;
  }

  fill(source) {
    this._oil = source;
  }

  getSource() {
    return this._oil;
  }
}

// Petrol car
const tank = new Tank();
const oilPipe = new OilPipe();
const piston = new Piston();
const petrolEngine = new PetrolEngine(oilPipe, piston);
const petrolCar = new Car(petrolEngine, tank);
const oil = new Oil();
petrolCar.refill(oil);
petrolCar.accelerate();
petrolCar.brake();