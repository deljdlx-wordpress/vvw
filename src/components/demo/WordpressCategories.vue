<template>
    <v-row>
        <v-col cols="12">
            <h2>Get categories from wordpress</h2>
        </v-col>

        <v-col cols="12">
            <v-data-table
                :headers="headers"
                :items="categories"
                :items-per-page="5"
                class="elevation-1"
            ></v-data-table>
        </v-col>
    </v-row>

</template>

<script>
export default {
    created() {

        this.$wordpressApiClient.getCategories().then(categories => {
            this.categories = categories;
        });
    },

    data() {
        return {
            client: null,
            headers: [
                {
                    text : 'ID',
                    value: 'id'
                },
                {
                    text : 'Slug',
                    value: 'slug'
                },
                {
                    text : 'Link',
                    value: 'link'
                },
                {
                    text : 'Name',
                    value: 'name'
                },
            ],
            categories: [],
        }
    }
}

</script>