<template>
        <v-container>
        <v-row>
          <v-col v-for="(product, index) in $store.getters.getProducts " :key="index" cols="4">
            <v-card>
              <v-img height="300" :src="product.image"></v-img>
              <v-card-title>{{product.name}}</v-card-title>
              <v-card-subtitle class="text--primary">R$ {{product.price}}</v-card-subtitle>
              <v-card-text class="text--primary"> {{ product.description }} </v-card-text>
              <v-card-actions>
                <v-btn  color="orange" text @click="addCart(product)"> Adicionar </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
export default {
    methods: {
        addCart(product) {
        this.$store.dispatch('addToCart', product);
        }
    }
}
</script>

<style>

</style>