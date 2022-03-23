const { response } = require('express')
const express = require('express')

const app = express()

app.use(express.json())

let persons = [
    {
        id: 1,
        name: 'Arto Hellas',
        number: '040-123456'
    },
    {
        id: 2,
        name: 'Ada Lovelace',
        number: '39-44-5323523'
    },
    {
        id: 3,
        name: 'Dan Abramov',
        number: '12-43-234345'
    },
    {
        id: 4,
        name: 'Mary Poppendick',
        number: '39-23-6423122'
    }
]

// app.get('/', (request, response)=> {
//     response.send('Root level')
// })

app.get('/info', (request, response) => {
    const date = new Date()
    response.send(`<p>Phonebook has info for ${persons.length} people</p><p>${date}</p>`)
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
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

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)

    persons = persons.filter(person => person.id !== id)

    response.status(204).end()    
})

const generateId = (max) => {
    return Math.floor(Math.random() * max)
}

app.post('/api/persons', (request, response) => {
    // const person = request.body
    const body = request.body

    const person = {
        id: generateId(100000),
        name: body.name,
        number: body.number
    }
    
    
    console.log(person)
    persons = persons.concat(person)

    response.json(person)
})

const PORT = 3001
app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})