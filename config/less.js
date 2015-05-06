'use strict';
module.exports = {
    options: {
        // Pass paths to bower version of bootstrap so that compiles will be using the latest
        // versions of the less files on each build
        paths: ['src/less/', '<%= dir.bootstrap %>/less']
    },
    all: {
        files: [{
            expand: true,
            cwd: 'src/less/',
            src: ['**/*.less', '!imports/*'],
            dest: 'assets/css/',
            ext: '.css',
            extDot: 'last'
        }]
    }
}