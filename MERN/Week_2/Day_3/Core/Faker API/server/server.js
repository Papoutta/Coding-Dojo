import express from "express"
import { faker } from '@faker-js/faker';
const app = express()
const port = 8000


const createUser=()=>{
    const user = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber : faker.number.int(),
        lastName : faker.person.lastName(),
        firstName : faker.person.firstName(),
        _id : faker.string.uuid()
        };
    return user;
} 

const createCompany = () => {
    const company = {
        _id : faker.string.uuid(),
        name: faker.commerce.productName(),
        address : {
        street : faker.location.street(),
        city : faker.location.city(),
        state : faker.location.state(),
        zipCode : faker.location.zipCode(),
        country : faker.location.country()
        }

        };
    return company;
};

app.get('/api/users/new', (req, res) => {
    console.log(req.body);
    res.json(createUser())
})

app.get('/api/companies/new' , (req , res) => {
    req.body = createCompany()
    res.json(createCompany())
})

app.get('/api/user/company' , (req , res) => {
    res.json([createUser(),createCompany()])
})



app.get("/hello", (req,res) => {
    res.send("Hello world!");
})


app.listen(port, ()=>{
    console.log("Listening on ports : " + port)
})