class Product {
    constructor(name , price) {
        this.name = name
        this.id = document.getElementById(this.name);
        this.price = price
    }
}

const albums = [
    new Product('post-1' , 10.99),
    new Product('post-2' , 9.99),
    new Product('post-3' , 11.99),
    new Product('post-4' , 10.00),
    new Product('post-5' , 10.00),
    new Product('post-6' , 10.00),
    new Product('post-7' , 11.00),
    new Product('post-8' , 15.00),
    new Product('post-9' , 15.00),
    new Product('post-10' , 7.99),
    new Product('post-11' , 10.00),
    new Product('post-12' , 9.99)
]

console.log(albums);
let products;

products = albums.sort((a,b) =>{
    return a.name.charCodeAt() - b.name.charCodeAt()
})
for(let i = 0; i < albums.length; i++){
    let product = albums[i];
    product.id.style.order = i+1;
}