import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import products from "./modules/products"
import cart from "./modules/cart"
import shop from "./modules/shop"

export default new Vuex.Store({
  modules: { products, cart, shop  }
})
