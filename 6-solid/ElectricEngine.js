class ElectricEngine extends EngineInterface {
  constructor(speedController) {
    super();
    this._speedController = speedController;
  }

  move() {
    this._speedController.control();
  }
}

class SpeedController {
  constructor(bms, motor) {
    this._bms = bms;
    this._motor = motor;
  }

  control() {
    const battery = this._bms.getBattery();
    this._motor.rotate(battery);
  }
}

class BatteryManagementSystem {
  getBattery() {
    return new Battery(new Electrons());
  }
}

class ElectricMotor {
  rotate(batter) {
    // Rotate the rotor using electric power from battery
  }
}

class Electrons {}

class Battery extends StorageInterface {
  constructor(electrons) {
    super();
    this._electrons = electrons;
  }

  fill(source) {
    this._electrons = source;
  }

  getSource() {
    return this._electrons;
  }
}

// Electric car
const electrons = new Electrons();
const battery = new Battery();
const speedController = new SpeedController(new BatteryManagementSystem(), new ElectricMotor());
const electricEngine = new ElectricEngine(speedController);
const electricCar = new Car(electricEngine, battery);
electricCar.refill(electrons);
electricCar.accelerate();
electricCar.brake();