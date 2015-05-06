'use strict';
module.exports = {
    all: {
        files: [{
            // Drop html into root directory so paths are correct
            expand: true,
            cwd: 'src/html/',
            src: '**/*.html',
            dest: 'assets/' 
        },{
            expand: true,
            cwd: 'src/img/',
            src: '**/*',
            dest: 'assets/img/'
        }]
    }
}