const request = require('superagent');
const expect = require('chai').expect;
const server = require( __dirname + '/../server.js');

let serverURI = 'localhost:3000/api/colors'



describe('SETTING ROUTE' , () => {

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
    expect('should fetch a specific color combination with a given ID')

    expect('ERROR: should throw an error if the color does not exist' , (done) => {
      request.get(serverURI + '/badRoutePathName')
        .end( (err, res) => {
          if (err) throw err;
          expect(res.status).to.equal(404);
          expect(res.body).to.equal.('Not Found');
          done();
        });
    });


  });
  describe('Post Requests' , () => {

  });
  describe('Put Requests' , () => {

  });
  describe('Delete Requests' , () => {

  });
});
