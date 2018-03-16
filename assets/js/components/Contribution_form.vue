<template>
    <div class="hello">
        <h1>Contribuer</h1>
        Nom de la contribution:
        <br />
        <input type="text" v-model="input.nom" placeholder="Nom" />
        <br />
        Description:
        <br />
        <textarea v-model="input.description" placeholder="Description"></textarea>
        <br />
        Latitude:
        <br />
        <input type="text" v-model="input.latitude" placeholder="Latitude" />
        <br />
        Longitude:
        <br />
        <input type="text" v-model="input.longitude" placeholder="Longitude" />
        <br />
        Image d'illustration:
        <br />
        <input type="text" v-model="input.  pict_url" placeholder="Illustration" />
        <br />
        <br />
        <br />
        <button v-on:click="sendData()">Send</button>
        <span>{{response}}</span>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'Contribution_form',
        data () {
            return {
                input: {
                    nom: "",
                    description: "",
                    latitude: "",
                    longitude: "",
                    pict_url: "",
                },
                response: ""
            }
        },
        // mounted() {
        //     axios({ method: "GET", "url": "https://httpbin.org/ip" }).then(result => {
        //         this.ip = result.data.origin;
        //     }, error => {
        //         console.error(error);
        //     });
        // },
        methods: {
            sendData() {
                axios({ method: "POST", "url": "http://127.0.0.1:8000/api/posts", "data": this.input, "headers": { "content-type": "application/json" } }).then(result => {
                    this.response = result.data;
                }, error => {
                    console.error(error);
                });
            }
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    textarea {
        width: 600px;
        height: 200px;
    }
</style>