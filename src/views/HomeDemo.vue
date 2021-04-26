<template>
  <v-container>
    <v-row>

        <v-col cols="12" :style="'background-color:' + backgroundColor.hexa">
            <h2>Vuetify misc components</h2>
        </v-col>


        <v-col cols="1">
            <v-progress-circular
                indeterminate
                :color="backgroundColor.hexa"
            ></v-progress-circular>
        </v-col>

        <v-col cols="1">
            <v-btn
                elevation="2"
            >🚀</v-btn>
        </v-col>

        <v-col sm="6" md="2" lg="1" class="col">
            <v-img
                :src="require('../assets/logo.svg')"
                class="my-3"
                contain
                height="200"
            />
        </v-col>

        <v-col sm="6" md="4" lg="3" class="col">
            <v-rating
                :value="3"
                :color="backgroundColor.hexa"
                large
            ></v-rating>
        </v-col>

        <v-col sm="12" md="4" lg="3" class="col">
            <v-color-picker
                dot-size="25"
                swatches-max-height="200"
                v-model="backgroundColor"
                value="#eeeeee"
            ></v-color-picker>
        </v-col>


        <v-col sm="12" md="5" lg="4" class="col">
            <v-date-picker
                :color="backgroundColor.hexa"
            >
            </v-date-picker>
        </v-col>

        <v-col sm="12" md="5" lg="4" class="col">
            <FakeCard />
        </v-col>

    </v-row>


    <v-row class="row">
        <v-col cols="12" class="col">
            <h2>Vuetify calendar</h2>
        </v-col>
        <v-col cols="12" class="col">
            <Calendar/>
        </v-col>
    </v-row>


  </v-container>
</template>

<script>



  import Calendar from "../components/demo/Calendar";
  import FakeCard from "../components/demo/FakeCard";

  export default {
    name: 'HelloWorld',

    components: {
      Calendar,
      FakeCard,
    },

    data: () => ({

        backgroundColor: {
              types: ['hex', 'hexa'],
            hex:'#eeeeee',
            hexa: '#eeeeee1'
        },
    }),
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
