<template>
  <v-app-bar app class="blue darken-1 white--text">
    <v-btn to="/">{{ $store.getters.getShopTitle }}</v-btn>
    <v-spacer></v-spacer>
    <v-btn to="/cart">
      <span>Meu Carrinho </span>
      <v-icon>mdi-cart</v-icon>
      <span> ( {{ this.$store.getters.getCartTotalItems }} itens) </span>
    </v-btn>
  </v-app-bar>
</template>