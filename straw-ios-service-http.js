// straw-ios-service-http.js

/**
 * @class
 * @singleton
 */
straw.service.http = (function () {
    'use strict';

    var exports = {};

    /**
     * @method
     * Perform `GET` method.
     *
     * @param {String} url The url to get.
     * @param {Object} opts The options. "timeout": timeout period in milliseconds, "charset": character sets, for example "utf8", "shift_jis" or "euc-jp".
     */
    exports.get = function (url, opts) {
    };

    /**
     * @method
     * Perform `GET` method.
     *
     * @param {String} url
     */
    exports.post = function (url, data, opts) {
    };

    return exports;

}());
