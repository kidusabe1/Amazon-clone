export let cart_Products = [
    {
        productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity:2
    },
    {
        productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 3
    }
];

export function addToCart(productId){
    let matchingItem;
        cart_Products.forEach((cartItem)=>{
            if(productId===cartItem.productId){
                matchingItem = cartItem;
            }
        });

        if(matchingItem){
            matchingItem.quantity++;
        }
        else{
            cart_Products.push({
            productId:productId,
            quantity:1,
            });
        }
        //console.log(cart_Products);
}

export function removeFromCart(productId){
    const newCart = [];
    cart_Products.forEach((product)=>{
        if(productId!==product.productId){
            newCart.push(product);
        }
    });
    cart_Products = newCart;
    console.log(cart_Products);
}