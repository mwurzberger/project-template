'use strict';
module.exports = {
    options : {
        jshintrc : '<%= jshint_config %>',
        reporter : require('jshint-stylish')
    },
    all: {
        files: [{
            expand: true,
            cwd: 'src/js/',
            src: ['**/*.js', '!imports/*']
        }]
    }
}