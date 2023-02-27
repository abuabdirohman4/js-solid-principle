class Product {
  constructor() {
    if (this.constructor.name === "Product") {
      throw new Error(`${this.constructor.name} is abstract class!`);
    }
  }

  getName() {
    throw new Error("Method not implemented!");
  }

  getExpiredDate() {
    throw new Error("Method not implemented!");
  }

  /**
   * Function to get all of information about product
   */
  getProductInfo() {
    // some magic code
  }
}

class Vegetable extends Product {
  getName() {
    return "Broccoli";
  }

  getExpiredDate() {
    return new Date();
  }
}

// Add New Product
class Smartphone extends Product {
  getName() {
    return "Samsung S10+ Special Edition";
  }

  getExpiredDate() {
    return new Date(); // ?????
  }
}