import fetch from 'node-fetch'

async function fetchHtml() {
    const response = await fetch('https://9anime.to')
    const html = await response.text()
    return html
  }

exports.handler = async function(event, context, callback){
    callback(null, {
        statusCode: 200,
        body: await fetchHtml()
    })
}