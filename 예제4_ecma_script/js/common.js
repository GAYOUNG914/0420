function Product(name, price){
  this.name = name;
  this.price = price;
  return this.name+','+this.price
}

let productInfo = new Product('노트북','250만원');

console.log(productInfo.name+','+productInfo.price)
