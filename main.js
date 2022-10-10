let latitude=28.647335186074912, longitude=77.12351727135022

//initializing mapbox
mapboxgl.accessToken="pk.eyJ1IjoibmF2MTI2IiwiYSI6ImNsOGlzZmc2bjFhdDYzdXF4MjY0YXY3YmoifQ.1i1nExgBi1iD72zCXiuuPA"
var map=new mapboxgl.Map({
    container:"map",
    style:"mapbox://styles/mapbox/streets-v11",
    center:[longitude, latitude],
    zoom:10
})

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOption:{
            enableHighAccuracy:true
        },
        trackUserLocation:true
    })
)

map.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken
    }),
    "top-left"
)