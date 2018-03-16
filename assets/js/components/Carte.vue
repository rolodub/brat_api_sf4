<template>
    <div id="map"></div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "carte",
        data: function () {
            return {
                posts
            }
        },
        created() {
            axios.get(`http://127.0.0.1:8000/api/posts`)
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.posts = response.data['hydra:member']
                    echo(this.posts);

                })
                .catch(e => {
                    this.errors.push(e)
                })

        },
        mounted: function() {

            this.initMap();
        },
        methods: {
            initMap: function() {
                this.map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: 48.862725, lng: 2.287592  },
                    scrollwheel: false,
                    zoom: 12
                });
                this.posts.forEach((post) => {
                    const position = new google.maps.LatLng(post.latitude, post.longitude);
                    const marker = new google.maps.Marker({
                        position,
                        map: this.map
                    });
                    this.markers.push(marker);
                    this.map.fitBounds(this.bounds.extend(position))
                });
            }
        }
    }
</script>
<style scoped>
    #map {height:300px;width:500px;}
</style>