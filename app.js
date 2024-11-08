const forecast = require('./api/forecast.js')
const geocode = require('./api/geocode.js')

const address = process.argv[2]

if (!address) {
    console.log("please enter the address")
} else {
    geocode(address, (error, data) => {
        if(error){
            console.log(error)
        }else{
            forecast(data.lat, data.lon, (error2, data2) => {
                if (error2) {
                    console.log(error2)
                }else{
                    console.log(`It's currently ${data2.temp} degrees in ${data2.location} (${data.lat}, ${data.lon}) and the weather is ${data2.state}.`)
                }
            })
        }
    })
}




