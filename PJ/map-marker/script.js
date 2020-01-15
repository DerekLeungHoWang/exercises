var map, infoWindow;

//Getting a basic map based on lat and lng
function createMap(){
    var options = {
        center:{lat:43.654, lng: -79.383},
        zoom:15,
        // disableDefaultUI: false, //true = remove standard controls
        // draggable: true,
        // mapTypeId: google.maps.MapTypeId.HYBRID
    }
    map = new google.maps.Map(document.getElementById('map'), options)
    infoWindow = new google.maps.InfoWindow;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(p){
            console.log('yay');
            
            var position = {
                lat:p.coords.latitude,
                lng:p.coords.longitude
            };
            infoWindow.setPosition(position);
            infoWindow.setContent('Your location!');
            infoWindow.open(map);
        }, function(){
            handleLocationError('Geolocation service failed', map.center())
        })
    }else{
        handleLocationError('no geolocation available', map.center())
    }
}

function handleLocationError(content, position){
    infoWindow.setPosition(position);
    infoWindow.setContent(content);
    infoWindow.open(map)
}
