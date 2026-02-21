class Cart {
  constructor() {
    this.item = [];
  }

  addProduct(product) {
    if (!product.id || !product.price) {
      throw new Error("Invalid product");
    }

    this.item.push(product);
  }

  removeProduct(productId) {
    this.item = this.item.filter((it) => it.id !== productId);
  }

  calculateTotalPrice() {
    const total = this.item.reduce(
      (total, products) => (total += products.price),
      0,
    );
    return total;
  }
}

const cart = new Cart();

cart.addProduct({ id: 1, productName: "Nike", price: 450 });
cart.addProduct({ id: 2, productName: "Adidas", price: 750 });

console.log(cart.calculateTotalPrice());

cart.removeProduct(2);

console.log(cart.calculateTotalPrice());
