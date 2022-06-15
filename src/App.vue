 <template>
  <v-app id="inspire">
    <topbar></topbar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <bottombar></bottombar>
  </v-app>
</template>

<script>
  import topbar from "./components/topbar.vue";
  import bottombar from "./components/bottombar.vue";
  export default {
    components: {topbar, bottombar},
   };
</script>
