export default{
    state:{
        products: [
            {
                name: 'Teclado Xkeyboards',
                image: 'https://http2.mlstatic.com/D_NQ_NP_720690-MLB46078689476_052021-O.webp',
                price: 89.00,
                description: 'Teclado Gamer 3.0'
            },
            {
                name: 'Monitor Yousee',
                image: 'https://m.media-amazon.com/images/I/612wOq29kKL._AC_SX569_.jpg',
                price: 874.50,
                description: 'Monitor Gamer Ultrawide'
            },
            {
                name:'SSD 4 TB',
                image: 'https://m.media-amazon.com/images/I/91RL+MhTWbL._AC_SX425_.jpg',
                price: '454.44',
                description: 'SSD com capacidade de 4 TB'
            },
            {
                name:'Fone de Ouvido',
                image: 'https://m.media-amazon.com/images/I/71jDncRmZWL._AC_SL1500_.jpg',
                price: '79.99',
                description: 'SSD com capacidade de 4 TB'
            },
            {
                name:'Relogio',
                image: 'https://m.media-amazon.com/images/I/71NXA-yL7NL._AC_SY741._SX._UX._SY._UY_.jpg',
                price: '200.00',
                description: 'SSD com capacidade de 4 TB'
            },
            {
                name:'Capacete',
                image: 'https://m.media-amazon.com/images/I/618dzsdZ6TL._AC_SL1000_.jpg',
                price: '500.00',
                description: 'SSD com capacidade de 4 TB'
            }
        ]
    },
    getters:{
        getProducts(state){
            return state.products
        }
    }
}