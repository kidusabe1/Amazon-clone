export const cart_Products = [];

export function addToCart(productId){
    let matchingItem;
        cart_Products.forEach((cartItem)=>{
            if(productId===cartItem.id){
                matchingItem = cartItem;
            }
        });

        if(matchingItem){
            matchingItem.quantity++;
        }
        else{
            cart_Products.push({
            id:productId,
            quantity:1,
            });
        }
}