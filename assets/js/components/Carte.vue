<template>
    <div id="map"></div>
</template>

<script>
    export default {
        data: function () {
            return {
                mapName: this.name + "-map",
                markerCoordinates: [{
                    latitude: 42.501527,
                    longitude: -0.1921837
                }, {
                    latitude: 43.505874,
                    longitude: -0.1838486
                }, {
                    latitude: 45.4998973,
                    longitude: -0.202432
                }]
            }
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
                this.markerCoordinates.forEach((coord) => {
                    const position = new google.maps.LatLng(coord.latitude, coord.longitude);
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