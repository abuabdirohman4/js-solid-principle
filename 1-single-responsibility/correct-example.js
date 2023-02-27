class Item {}

class Order {
  calculateTotalSum() {}

  getItems() {}

  getItemCount() {}

  addItem(item) {}

  deleteItem(item) {}
}

class OrderHistory {
  getDailyHistory() {}

  getMonthlyHistory() {}
}

class OrderPreview {
  printOrder(order) {}

  showOrder(order) {}
}

const main = () => {
  const item = new Item();
  const order = new Order();
  order.addItem(item);
  const history = new OrderHistory();
  history.getDailyHistory();
  const viewer = new OrderPreview();
  viewer.printOrder(order);
};

const main2 = () => {
  const order = new Order();
  order.calculateTotalSum();
};
 
main();