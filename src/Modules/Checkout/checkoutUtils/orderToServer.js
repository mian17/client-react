export default class OrderToServer {
  constructor(
    receiver_name,
    receiver_email,
    receiver_phone_number,
    receiver_address,
    total,
    payment_method_id,
    cart,
    discount_code,
    discount_percent
  ) {
    this.receiver_name = receiver_name;
    this.receiver_email = receiver_email;
    this.receiver_phone_number = receiver_phone_number;
    this.receiver_address = receiver_address;
    this.total = total;
    this.payment_method_id = payment_method_id;
    this.cart = cart;
    this.discount_code = discount_code;
    this.discount_percent = discount_percent;
  }
}
