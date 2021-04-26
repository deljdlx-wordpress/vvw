<template>
    <div>
        <form @submit="signin">
            <v-row>
                <v-col cols="5">
                    <v-text-field label="User" v-model="login"></v-text-field>
                </v-col>
                <v-col cols="5">
                    <v-text-field label="Password" type="password" v-model="password"></v-text-field>
                </v-col>
                <v-col cols="2">
                    <v-btn type="submit">Login</v-btn>
                </v-col>
            </v-row>
        </form>

        <v-row>
            <v-col cols="12">
                <v-textarea
                label="Server reponse"
                v-model="response"
                ></v-textarea>
            </v-col>
        </v-row>
    </div>

</template>

<script>


export default {

    data() {
        return {
            login: '',
            password: '',
            response: '',
        };
    },
    methods: {
        signin(event) {
            event.preventDefault();
            this.$wordpressApiClient.login(this.login, this.password)
            .then(userData => {
                this.response = JSON.stringify(userData);
            });
        }
    }

}
</script>
