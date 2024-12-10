function saveCart(cart){
    console.log("saved: " + JSON.stringify(cart))
    localStorage.setItem("cart",JSON.stringify(cart));
}

export const readCartFromStorage = () => {
    let cart = []

    try{
        const storedCart = JSON.parse(localStorage.getItem("cart"))

        if(storedCart instanceof Array){
            cart = storedCart
        }
    } catch (e) {
        console.log(e)
    }

    console.log("read: " + JSON.stringify(cart))

    return cart
}

export function addToCart(productId){
    let cart_Products = readCartFromStorage()

    let matchingItem;

    cart_Products.forEach((cartItem)=>{
        if(productId===cartItem.productId){
            matchingItem = cartItem;
        }
    });

    if(matchingItem){
        matchingItem.quantity++;
    } else {
        cart_Products.push({
            productId:productId,
            quantity:1,
        });
    }

    saveCart(cart_Products);        //console.log(cart_Products);
}

export function removeFromCart(productId){
     const cart_Products = readCartFromStorage()

    const filteredCart = cart_Products.filter((product)=> productId !== product.productId);

    saveCart(filteredCart);
}