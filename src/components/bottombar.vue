<template>
  <v-card>
    <v-footer padless>
      <v-card flat tile width="100%" class="blue lighten-1 text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text"> {{ new Date().getFullYear() }} — <strong>Vuetify</strong> </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      icons: ["mdi-home", "mdi-account", "mdi-email", "mdi-cart", "mdi-help-circle"],
      items: ["default", "absolute", "fixed"],
    }),
  };
</script>
