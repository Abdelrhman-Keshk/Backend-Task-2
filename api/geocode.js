const request = require('request')

const geocode = (address, callback) => {
    const url = `https://us1.locationiq.com/v1/search?key=pk.0935a5924aedf56a8489f2ee53c99536&q=${address}&format=json&limit=1`
    request({url, json : true}, (error, res) => {
        if (error) {
            callback("unable to connect geocoding api", undefined)
        }else if(res.body.error){
            callback(res.body.error, undefined)
        }else{
            callback(undefined, {
                lat: res.body[0].lat,
                lon : res.body[0].lon
            })
        }
    })
}

module.exports = geocode