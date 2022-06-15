<template>
  <v-card max-width="90vw" class="mx-auto px-10">
    <v-card-title primary-title>
      <div>
        <v-icon>mdi-cart</v-icon>
        <span class="headline"> Carrinho</span>
      </div>
    </v-card-title>

    <v-list three-line>
        <v-list-item v-for="(item, index) in this.$store.getters.getCartItens" :key="index">
          <v-img max-width="200" class="ma-5" max-height="100" :src="item.image"></v-img>
          <v-list-item-content>
            <v-list-item-title v-html="item.name"></v-list-item-title>
            <v-list-item-subtitle v-html="item.description"></v-list-item-subtitle>
            <v-list-item-action-text v-html="item.price"></v-list-item-action-text>
            <hr>
          </v-list-item-content>
     
          <v-list-item-action>
            <v-btn icon>
              <v-icon @click="remove(item)">mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        <hr>
    </v-list>
  </v-card>
  
</template>
<script>
export default {
    methods: {
        remove (item){
        this.$store.dispatch('removeCartItem', item);
        }
    }
}
</script>


