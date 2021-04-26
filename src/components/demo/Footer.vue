<template>
  <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Woof</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default ({
    data() {
        return {
            links: [
                'fake0',
                'fake1',
                'fake2',
                'fake3',
                'fake4',
                'fake5',
            ],
        };
    },
})
</script>
