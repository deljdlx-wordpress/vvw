<template>
    <v-row>
        <v-col cols="12">
            <h2>Get posts from wordpress</h2>
        </v-col>

        <v-col cols="12">
            <v-data-table
                :headers="headers"
                :items="posts"
                :items-per-page="5"
                class="elevation-1"
            ></v-data-table>
        </v-col>
    </v-row>

</template>

<script>
export default {
    created() {

        this.$wordpressApiClient.getPosts().then(posts => {
            this.posts = posts;
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
                    text : 'Date',
                    value: 'date'
                },
                {
                    text : 'URL',
                    value: 'link'
                },
                {
                    text : 'Title',
                    value: 'title.rendered'
                },
                {
                    text : 'Author',
                    value: '_embedded.author[0].name'
                },
            ],
            posts: [],
        }
    }
}

</script>