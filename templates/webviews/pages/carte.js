
        Vue.component('carte', {
            render: var lat = 48.852969;
            var lon = 2.349903;
            var map = null;
            function initMap() {
                map = new google.maps.Map(document.getElementById("map"), {
                    center: new google.maps.LatLng(lat, lon),
                    zoom: 15,
                    streetViewControl: false,
                });
    
                var villes = {
                    "Paris": { "lat": 48.852969, "lon": 2.349903 },
                    "P2": { "lat": 48.852969, "lon": 2.45 },
                    "Brest": { "lat": 48.383, "lon": -4.500 },
                    "Quimper": { "lat": 48.000, "lon": -4.100 },
                    "Bayonne": { "lat": 43.500, "lon": -1.467 }
                }
    
                var contentString1 = '<div id="content">' + '<div id="siteNotice">' + '</div>' + '<h1 id="firstHeading" class="firstHeading">test</h1>' + '<div id="bodyContent">' + '<p><b>test</b>.</p>' + '<p>Attribution: Google, <a href="https://www.google.fr">' + 'https://www.google.fr</a> ' + '(last visited June 22, 2009).</p>' + '</div>' + '</div>';
                var infowindow = new google.maps.InfoWindow({ content: contentString1, map: map , maxWidth:200});
                var image = {
                             path: "M27.648-41.399q0-3.816-2.7-6.516t-6.516-2.7-6.516 2.7-2.7 6.516 2.7 6.516 6.516 2.7 6.516-2.7 2.7-6.516zm9.216 0q0 3.924-1.188 6.444l-13.104 27.864q-.576 1.188-1.71 1.872t-2.43.684-2.43-.684-1.674-1.872l-13.14-27.864q-1.188-2.52-1.188-6.444 0-7.632 5.4-13.032t13.032-5.4 13.032 5.4 5.4 13.032z",
                             fillColor: '#2699FB',
                             fillOpacity: 1,
                             strokeWeight: 0,
                             scale: 0.65 }};
                
                var tableau = [];
    
                for (ville in villes) {
    
                    var marker = new google.maps.Marker({
                        position: { lat: villes[ville].lat, lng: villes[ville].lon },
                        title: 'Cliquer pour en savoir plus',
                        map: map,
                        content: contentString1,
                        icon: image, 
                        draggable : false,
                    });
    
                    tableau.push(marker);
    
                    /*tableau[i].onclick = function(){infowindow.open(map, tableau[i]);}
    
    
                   /* tableau[i].addEventListener('click', function () {
                        infowindow.open(map, tableau[i]);
                    });*/
    
    
                }
    
                /*tableau[0].click(function(){
                    alert('caca');
                });*/
    
    
    
                /*tableau[1].onclick = function(){infowindow.open(map, tableau[1]);};*/
                /*for (var j=0;j<tableau.length;j++){
                    tableau[j].addListener('click', function () {
                        infowindow.open(map, tableau[j]);
                    });
                }*/
    
                /*
                tableau[0].addListener('click', function () {
                        infowindow.open(map, tableau[0]);
                    });
    
                tableau[1].addListener('click', function () {
                    infowindow.open(map, tableau[1]);
                    });
    
                tableau[2].addListener('click', function () {
                    infowindow.open(map, tableau[2]);
                    });
    
                tableau[3].addListener('click', function () {
                    infowindow.open(map, tableau[3]);
                    });
            
                tableau[4].addListener('click', function () {
                    infowindow.open(map, tableau[4]);
                    });*/
    
                tableau.forEach(element => {
                    element.addListener('click', function () {
                        infowindow.open(map, element);
                    });
                });
                map.addListener('click', function (e) {
                    placeMarkerAndPanTo(e.latLng, map);
                });
                // Try HTML5 geolocation.
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        var pos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
    
                        infoWindow.setPosition(pos);
                        infoWindow.setContent('On vous a trouvé!');
                        map.setCenter(pos);
                    }, function () {
                        handleLocationError(true, infoWindow, map.getCenter());
                    });
                } else {
                    // Browser doesn't support Geolocation
                    handleLocationError(false, infoWindow, map.getCenter());
                }
            }
    
            function handleLocationError(browserHasGeolocation, infoWindow, pos) {
                infoWindow.setPosition(pos);
                infoWindow.setContent(browserHasGeolocation ?
                    'Error: The Geolocation service failed.' :
                    'Error: Your browser doesn\'t support geolocation.');
    
            }
    
    
    
            window.onload = function () {
                // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
                initMap();
            },
            props: {
              level: {
                type: Number,
                required: true
              }
            }
          })
        