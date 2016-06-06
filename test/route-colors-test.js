const request = require('superagent');
const expect = require('chai').expect;
const server = require( __dirname + '/../server.js');

let serverURI = 'localhost:3000/api/colors';

describe('COLOR SETTINGS ROUTE' , () => {
  //start the server
  before( (done) => {
    done();
  })

  //end the server
  after( (done) => {

    done();
  })

  describe('Post Requests' , () => {
    expect('should post a new color' , () => {
      request.post(serverURI)
        .send({name:'Test Color' , colorObj: {}, {}})
    });
  }); //End Post
  describe('Get Requests to /api/colors' , () => {
    expect('should fetch 10 color settings' , (done) => {
      request.get(serverURI)
        .end( (err, res) => {
          if (err) throw err;
          expect(res.status).to.equal(200);
          expect(res.body.colorsArray.length).to.equal.(10); //Use colorsArray as vehicle to xfer settings
          done();
        });
    });
    expect('should fetch a specific color combination with a given ID' , (done) => {
      var testID = '/12345';
      request.get(serverURI + testID)
        .end( (err , res) => {
          if (err) throw err;
          expect(res.status).to.equal(200);
          expect(res.body.colorsArray[0].id).to.equal('12345');
          done();
        })
    });
    expect('ERROR: should throw an error if the color does not exist' , (done) => {
      request.get(serverURI + '/badRoutePathName')
        .end( (err, res) => {
          if (err) throw err;
          expect(res.status).to.equal(404);
          expect(res.body).to.equal.('Not Found');
          done();
        });
    });
  }); //End GET
  describe('Put Requests' , () => {

  }); //End PUT
  describe('Delete Requests' , () => {

  });//End DEL
});
