const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = "http://localhost:8080";

chai.use(chaiHttp);

describe('tennent', () => {
  describe('/GET tennentName', () => {
      it('it should return a 404', (done) => {
        chai.request(server)
            .get('/tennentName')
            .end((err, res) => {
                  res.should.have.status(404);
              done();
            });
      });
  });
});

describe('tennent/user', () => {
  describe('/GET tennentName/userName', () => {
      it('it should return a 404', (done) => {
        chai.request(server)
            .get('/tennentName/userName')
            .end((err, res) => {
                  res.should.have.status(404);
              done();
            });
      });
  });
});

describe('tennent/user/job', () => {
  describe('/GET tennentName/userName/job', () => {
      it('it should return an Array', (done) => {
        chai.request(server)
            .get('/club/sam/job')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a("array");
              done();
            });
      });
  });
  describe('/POST tennentName/userName/job', () => {
      it('it should return an Array', (done) => {
        chai.request(server)
            .post('/club/sam/job')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a("array");
              done();
            });
      });
  });
});