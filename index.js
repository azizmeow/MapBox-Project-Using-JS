function updateData() {
    params = {
        headers: {
        'Content-Type': 'application/json'
        },
    }
    fetch('./data.json', params).then(response => response.json())
    .then(rsp => {
        // console.log(rsp.data)
        rsp.data.forEach(element => {
            latitude = element.latitude
            longitude = element.longitude
            infected = element.infected

            color = `rgb(${infected}, 0, 0)`

            new mapboxgl.Marker({
                color: color
            })
                .setLngLat([longitude, latitude])
                .addTo(map);
        });
    });
}
updateData();

