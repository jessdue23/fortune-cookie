const fortunes= require('./fortune.json')



const returnFortune = () => {
    //return console.log(fortunes[0])

    //get random fortune
    return fortunes[Math.floor(Math.random() * fortunes.length)]
    
}

module.exports = returnFortune