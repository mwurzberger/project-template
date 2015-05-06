'use strict';
module.exports = {
    options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
    all: {
        options: {
            compress: true,
            sourceMap: true,
            sourceMapIncludeSources: true
        },
        files: [{
            expand: true,     
            cwd: 'src/js/',      
            src: ['**/*.js'], 
            dest: 'assets/js/',
            ext: '.min.js',
            extDot: 'last'
        }]
    },
    bootstrap: {
        options: {
            compress: true,
            sourceMap: true,
            sourceMapIncludeSources: true
        },
        files: { 'assets/js/vendor/bootstrap.min.js': ['<%= dir.bootstrap %>/dist/js/bootstrap.js'] }
    }
}