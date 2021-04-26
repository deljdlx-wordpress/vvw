<template>
  <v-container>

    <WordpressPosts />


    <WordpressCategories />


    <v-row>
        <v-col cols="12">
            <h2>Wordpress authentification</h2>
        </v-col>
        <v-col cols="12">
            <WordpressLogin />
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

import WordpressLogin from "../components/demo/WordpressLogin";
import WordpressPosts from "../components/demo/WordpressPosts";
import WordpressCategories from "../components/demo/WordpressCategories";

export default {
    name: 'WordpressDemo',

    components:  {
        WordpressLogin,
        WordpressPosts,
        WordpressCategories
    },


}
</script>

<style scoped lang="scss">
.row {
    border: solid 1px #aaa;

    margin-bottom: 1rem;

    .col {
        border: solid 1px #aaa;
        padding: 0.5rem;
    }
}
</style>
