const request = require('request');

const forecast = (latitude, longtitude, callback) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=0adda74650664b42a03120641240711&q=${latitude},${longtitude}`
    request({url, json: true}, (error, res) => {
        if (error) {
            callback("unable to connect weather api service" , undefined)
        }else if(res.body.error){
            callback(res.body.error.message, undefined)
        }else{
            callback(undefined, {
                location: res.body.location.name,
                temp: res.body.current.temp_c,
                state: res.body.current.condition.text
            })
        }
    })
}

module.exports = forecast