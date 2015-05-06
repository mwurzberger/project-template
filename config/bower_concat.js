'use strict';
module.exports = {
    // Only packages up the lib files, leaves styling and templates
    // to be direct compiled with overrides
    libs: {
        dest: 'assets/js/vendor/libs.js',
        cssDest: 'assets/css/vendor/libs.css',
        exclude: ['bootstrap', 'foundation']
    }
}