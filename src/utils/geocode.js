const request = require('request')

//http://api.weatherstack.com/current?access_key=5b4a3c413983289211386a99a45913fc&query=thane
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoic3dhcG5pbGJoYWk5MCIsImEiOiJjazlhdW1mdzcwMDRlM2twZzJhd2NvaHRtIn0.TGLOiFT7NxxNyXXslokJcg'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features === '') {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode