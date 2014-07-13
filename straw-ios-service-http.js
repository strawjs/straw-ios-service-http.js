// straw-ios-service-http.js

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
     * @param {String} url The url to get.
     * @param {Object} opts The options. "timeout": timeout period in milliseconds, "charset": character sets, for example "utf8", "shift_jis" or "euc-jp".
     * @return {Promise} The promise object.
     */
    exports.get = function (url, opts) {

        var promise = new Promise(function (resolve, reject) {

            core.serviceCall('http', 'get', {url: url, timeout: opts.timeout, charset: opts.charset}, resolve, reject);

        });

        return promise;
    };

    /**
     * @method
     * Perform `GET` method.
     *
     * @param {String} url
     */
    exports.post = function (url, data, opts) {

        throw Error('Sorry, not implemented yet');

    };

    return exports;

}(window.straw));
