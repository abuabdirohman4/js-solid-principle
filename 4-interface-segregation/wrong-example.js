class VehicleInterface {
  drive() {
    throw new Error("Method not implemented!");
  }

  stop() {
    throw new Error("Method not implemented!");
  }

  refuel() {
    throw new Error("Method not implemented!");
  }

  openDoors() {
    throw new Error("Method not Implemented!");
  }
}

class Motorcycle extends VehicleInterface {
  drive() {
    // implementation
  }

  stop() {
    // implementation
  }

  refuel() {
    // implementation
  }

  // pain point
  // Can not be implemented
  openDoors() {}
}
