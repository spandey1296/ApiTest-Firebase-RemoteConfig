let chai = require("chai");
let chaiHttp = require("chai-http");
const Student = require("../models/student");
var expect= chai.expect;
var should= chai.should();
var assert= chai.assert;
//Assertion Style
chai.should();

chai.use(chaiHttp);

let server= 'http://localhost:8080';

describe('Student API Test', () => {

    
    // 1. Test the GET route
    
    describe("GET /api/students", () => {
        it("It should GET all the student list", (done) => {
            chai.request(server)
                .get("/api/students")
                .end((err, response) => {
                    console.log('length',response.body.length);
                    response.should.have.status(200);
                   response.body.should.be.a('array');
                    response.body.length.should.be.eq(9);
                    expect(response.body).to.be.a('array');
                    done();
                });
        });

    });


 // Test the GET (by id) route
    
  describe("GET /api/students/:id", () => {
    it("It should GET a student by ID", (done) => {
        const studId = "ENZnXkucd4qyDkECCYqT";
        chai.request(server)                
            .get("/api/student/" + studId)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                done();
            });
    });

});

 
     // Test the POST route
     
  describe("POST /api/student", () => {
    it("It should POST a new student", (done) => {
        const task = {
       
            "firstName": "IIT",
            "lastName": "Delhi",
            "age": "11",
            "phoneNumber": "073672736383",
            "subject": "engineering",
            "year": 2008,
            "semester": 12,
            "status": "approved"
        };

        chai.request(server)                
        .post("/api/student")
        .send(task)
        .end((err, response) => {
        response.should.have.status(200);
        done();
    });
        
});

});


});














