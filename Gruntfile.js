'use strict';

module.exports = function(grunt) {
    
    // Auto-load grunt NPM tasks (patterned 'grunt-*')
    require('load-grunt-tasks')(grunt);

    // Load other NPM tasks
    grunt.loadNpmTasks('assemble');

    // Anything in options object is directly accessible within tasks
    var options = {
        // Custom directory paths
        dir: {
            bower: 'bower_components',
            bootstrap: 'bower_components/bootstrap'
        },
        jshint_config: '.jshintrc',
        pkg: grunt.file.readJSON('package.json')
    }


    // Auto-load configurations 
    var configs = require('load-grunt-configs')(grunt, options);
    grunt.initConfig(configs);


    grunt.registerTask('default', []);
    grunt.registerTask('build', [
        'clean:all', 
        'bower_concat:libs', 
        'newer:less:all', 
        'newer:uglify:all', 
        'newer:uglify:bootstrap', 
        'newer:copy:all'
    ]);
};