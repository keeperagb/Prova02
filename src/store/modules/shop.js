export default{
    state:{
        title: 'Loja Virtual',
    },
    getters:{
        getShopTitle(state){
            return state.title
        },
    }
}