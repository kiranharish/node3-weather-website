const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/386784e6c14cfcf0968a4daa28267e1b/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature +' degress out.' +
            '  The HIGHEST TEMPERATURE:' +body.daily.data[0].temperatureHigh+' and LOWEST TEMPERATURE:' +body.daily.data[0].temperatureLow+ ' .  There is a '+
            body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast