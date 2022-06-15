export default {

    state: {
        itens: []
    },
    getters:{
        getCartTotalItems(state){
            return state.itens.length
        },
        getCartItens(state){
            return state.itens
        },
        
    },
    actions:{
        addToCart(context, payload){
            context.state.itens.push(payload)
            console.log(payload);
        },
        removeCartItem(context, payload){
            context.state.itens = context.state.itens.filter(element => {
                return element != payload
            })
        },
    }
}