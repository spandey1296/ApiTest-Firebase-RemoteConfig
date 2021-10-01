'use strict';
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinonChai = require('sinon-chai');
chai.should();
chai.use(chaiHttp);
chai.use(sinonChai);

const expect = chai.expect;
const should=chai.should();


let server= 'https://devgateway.adda52pro.com';

describe('API Test', () => {

    
    // 1. Test the GET route
    
    describe("GET /api/v1/user-doc/cron/updateUsername", () => {
        it("It will check updateUserName Status", (done) => {
            chai.request(server)
        .get('/api/v1/user-doc/cron/updateUsername')
        .end((err,response)=>{
           
            expect(response.status).to.be.equal(200)
            expect(response.body).to.be.a('object');
            expect(response.body).to.have.property("message");
            expect(response.body).to.have.all.keys('message','code',"data")
            expect(response.body).should.not.be.eq(0);

            done();

            });
        });

    });


 // 2nd API Test
 describe("GET /api/v1/communication/sendVconnectSms", () => {
    it("It will check ConnectionSMS Status", (done) => {
        chai.request(server)
    .get('/api/v1/communication/sendVconnectSms')
    .end((err,response)=>{
       
        expect(response.status).to.be.equal(404)
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property("message");
        expect(response.body).to.have.all.keys('message','error','statusCode')
        expect(response.body).should.not.be.eq(0);

        done();

        });
    });

});














});









