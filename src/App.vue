<template>
  <v-app>

    <Header />

    <v-main>
      <router-view/>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>

import Header from "./components/demo/Header";
import Footer from "./components/demo/Footer";

export default {
  name: 'App',

  created() {
    console.log(this.$wordpressApiClient);
  },

  components: {
    Header,
    Footer
  }

};
</script>
