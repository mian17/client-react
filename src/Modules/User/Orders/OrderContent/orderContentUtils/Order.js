export default class Order {
  constructor(orderId, status, totalAmount, createdAt, products) {
    this.orderId = orderId;
    this.status = status;
    this.totalAmount = totalAmount;
    this.createdAt = createdAt;
    this.products = products;
  }
}
