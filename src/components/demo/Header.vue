<template>
    <v-app-bar app color="primary" dark>
        <div class="d-flex align-center">

            <h1>Custom wp vuejs front</h1>
        </div>

        <v-spacer></v-spacer>



        <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
            >
            Dropdown
            </v-btn>
        </template>
        <v-list>
            <v-list-item
                v-for="(item, index) in items"
                :key="index"
            >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
        </v-menu>






        <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
            <span class="mr-2">Vuetify</span>
            <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>

export default {
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
}

