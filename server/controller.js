const Sequelize = require('sequelize')
require('dotenv').config()
const {CONNECTION_STRING} = process.env //now we have access to the URI on the connection string in .env
const sequelize = new Sequelize(CONNECTION_STRING, { //invoke sequlzi method and it connects to the first argument passed in
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

let globaId = 5

module.exports = {
    getConcerts: async (req, res) => {
        sequelize.query(`Select * from concerts`)
        .then(dbRes => res.status(200).send(dbRes[0])) //make button for this?
    },

    searchConcerts: async (req, res) => {
        const {term} = req.body
        sequelize.query(`SELECT * FROM concerts WHERE 
        (band_name = '${term}'
        OR location = '${term}'
        OR date = '${term}')
        `)
        .then(dbRes=> res.status(200).send(dbRes[0]))
    },
    
   
    addConcerts: async (req, res) => {
    console.log('hit add concerts')
    const {term} = req.body
    sequelize.query(`
    INSERT INTO concerts
    (band_name, location, date)
    VALUES ('${term.band_name}', '${term.location}', '${term.date}')
    ;`)
    .then(dbRes=> res.status(200).send(dbRes[0]))
   
},

    getAddedConcerts: (req, res) => {
        const {term} = req.body
        sequelize.query(`SELECT * FROM concerts WHERE 
        (band_name = '${term}'
        OR location = '${term}'
        OR date = '${term}')
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    }
    
 
} 


// addConcerts: async (req, res) => {
//     console.log('hit add concerts')
//     const {band_name, location, date} = req.body
//     sequelize.query(`
//     INSERT INTO concerts (band_name, location, date)
//     VALUES ('${term.band_name}', '${term.location}', '${term.date}')
//     ;`)
//     .then(dbRes=> res.status(200).send(dbRes[0]))
//     .catch(err => console.log(err))
// },

// const {band_name, location, date} = req.body
//         sequelize.query(`
//         INSERT INTO concerts (concert_id, band_name, location, date)
//         VALUES ('${band_name}', '${location}', '${date}', '${concert_Id}')
//         ;`)
//         .then(dbRes=> res.status(200).send(dbRes[0]))

//update sequel qyery, can update it 

//in concerts, .map over this arrray and return html values to .map
//npm i sequelize pg pg-hstore dotenv express cors axios
//.ENV IS Just storing the address. Now we pull it out of there to connect with seuqilize

//Create a table in pg web
//One of two ways we can make a PG web or a seed file

//add table 