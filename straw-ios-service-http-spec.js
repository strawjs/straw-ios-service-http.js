/* global straw, describe, it, chai */

var expect = chai.expect;

describe('straw.service.http', function () {
    'use strict';

    it('is a object', function () {
        expect(straw.service.http).to.be.a('object');
    });


    describe('get', function () {

        it('is a function', function () {
            expect(straw.service.http.get).to.be.a('function');
        });

    });

});
