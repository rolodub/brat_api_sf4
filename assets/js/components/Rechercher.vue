<template>
    <ul v-if="posts && posts.length">
        <li v-for="post of posts">
            <p>{{post.pict_url}}</p>
            <p><strong>{{post.nom}}</strong></p>
            <p>{{post.description}}</p>
            <p>{{post.latitude}}</p>
            <p>{{post.longitude}}</p>
        </li>
    </ul>

    <ul v-else-if="errors && errors.length">
        <li v-for="error of errors">
            {{error.message}}
        </li>
    </ul>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "rechercher",
        data() {
            return {
                posts: [],
                errors: []
            }
        },

        // Fetches posts when the component is created.
        created() {
            axios.get(`http://127.0.0.1:8000/api/posts`)
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.posts = response.data['hydra:member']
                })
                .catch(e => {
                    this.errors.push(e)
                })

            // async / await version (created() becomes async created())
            //
            // try {
            //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
            //   this.posts = response.data
            // } catch (e) {
            //   this.errors.push(e)
            // }
        }
    }
</script>