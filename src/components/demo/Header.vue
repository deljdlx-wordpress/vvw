<template>
    <v-app-bar app color="primary" dark>
        <div class="d-flex align-center">

            <h1>Custom wp vuejs front</h1>
        </div>

        <v-spacer></v-spacer>


        <v-btn
            color="primary"
            dark
            :to="{
                name: 'home'
            }"
        >
            Home
        </v-btn>


        <v-btn
            color="primary"
            dark
            :to="{
                name: 'wordpress'
            }"
        >
            Wordpress tests
        </v-btn>



        <v-menu offset-y>
            <template v-slot:activator="{ on}">
                <v-btn
                color="primary"
                dark
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

    </v-app-bar>
</template>

<script>

export default {
    data: function() {
        return  {
            test: "toto",
            items: [
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me 2' },
            ],
        }
    }
}

</script>

