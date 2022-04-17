require('dotenv').config()
const { response } = require('express')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

// const Person = mongoose.model('Person', personSchema)

const app = express()
app.use(express.static('build'))
app.use(express.json())
app.use(cors())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :request '))
morgan.token('request', function (req, res) { return JSON.stringify(req.body) })



// let persons = [
//     {
//         id: 1,
//         name: 'Arto Hellas',
//         number: '040-123456'
//     },
//     {
//         id: 2,
//         name: 'Ada Lovelace',
//         number: '39-44-5323523'
//     },
//     {
//         id: 3,
//         name: 'Dan Abramov',
//         number: '12-43-234345'
//     },
//     {
//         id: 4,
//         name: 'Mary Poppendick',
//         number: '39-23-6423122'
//     }
// ]

// app.get('/', (request, response)=> {
//     response.send('Root level')
// })

app.get('/info', (request, response) => {
    const date = new Date()
    response.send(`<p>Phonebook has info for ${persons.length} people</p><p>${date}</p>`)
})

app.get('/api/persons', (request, response) => {
    // response.json(persons)
    Person.find({}).then(persons => {
        response.json(persons)
    })
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)

    person = persons.find(person => person.id === id)

    if (person) {
     response.json(person)
    } else {
     response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response, next) => {
    // const id = Number(request.params.id)

    // persons = persons.filter(person => person.id !== id)

    // response.status(204).end()    

    Person.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
})

const generateId = (max) => {
    return Math.floor(Math.random() * max)
}

app.post('/api/persons', (request, response) => {
    
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'name or number missing'
        })
    }

    // if (persons.find(p => p.name === body.name)) {
    //     return response.status(400).json({
    //         error: 'name already exists'
    //     })
    // }

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person.save().then(savedPerson => {
        response.json(savedNote)
    })
})

const PORT = process.env.PORT
app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})