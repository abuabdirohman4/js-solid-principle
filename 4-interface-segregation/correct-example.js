class VehicleInterface {
  drive() {
    throw new Error('Method not implemented!');
  }
 
  stop() {
    throw new Error('Method not implemented!');
  }
 
  refuel() {
    throw new Error('Method not implemented!');
  }
}
 
const doorMixins = (BaseClass) => class extends BaseClass {
  openDoors() {
    throw new Error('Method not Implemented!');
  }
};

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
}

class Car extends doorMixins(VehicleInterface) {
  openDoors() {
    // implementation
  }

  drive() {
    // implementation
  }

  stop() {
    // implementation
  }

  refuel() {
    // implementation
  }
}