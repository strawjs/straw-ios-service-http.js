/* global straw, describe, it, chai, sinon */

var expect = chai.expect;

describe('straw.service.http', function () {
    'use strict';

    it('is a object', function () {
        expect(straw.service.http).to.be.a('object');
    });


    describe('.get', function () {

        it('is a function', function () {
            expect(straw.service.http.get).to.be.a('function');
        });

        it('calls straw.core.serviceCall', function () {

            var mock = sinon.mock(straw.core);
            mock.expects('serviceCall').once();

            straw.service.http.get('http://www.example.com/', {charset: 'utf8', timeout: 3000});

            mock.verify();
            mock.restore();

        });

    });

});
