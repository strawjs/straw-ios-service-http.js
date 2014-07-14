// straw-ios-service-http.js

/* global straw */

// This library depends on es6 Promise.

/**
 * @class
 * @singleton
 */
straw.service.http = (function (straw) {
    'use strict';

    var exports = {};

    var core = straw.core;

    var Promise = window.Promise;

    /**
     * @method
     * Perform `GET` method.
     *
     * The promise object resolves when you get the HTTP response and otherwise be rejected.
     *
     * ### When resolved, it has:
     * - {String} `responseText` The response text.
     * - {Number} `statusCode` The status code (ex. 200, 404, 500, 503)
     *
     * ### When rejected, it has:
     * - {Number} `code` The error code.
     * - {String} `message` The error message
     *
     * @param {String} url The url to get.
     * @param {Object} opts The options. "timeout": timeout period in milliseconds, "charset": character sets, for example "utf8", "shift_jis" or "euc-jp".
     * @return {Promise} The promise object.
     */
    exports.get = function (url, opts) {

        var promise = new Promise(function (resolve, reject) {

            core.serviceCall('http', 'get', {url: url, timeout: opts.timeout / 1000, charset: opts.charset}, resolve, reject);

        });

        return promise;
    };

    /**
     * @method
     * Perform `POST` method.
     *
     * @param {String} url
     */
    exports.post = function (/*url, data, opts*/) {

        throw Error('Sorry, not implemented yet');

    };

    return exports;

}(window.straw));
