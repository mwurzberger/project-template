'use strict';
module.exports = {
    // Reload the watcher if the configuration changes
    configFiles: {
        files: [ 'Gruntfile.js', 'config/*.js' ],
        options: {
            reload: true
        }
    },

    // On an update of bower.json re-install
    bower: {
        files: [ 'bower.json' ],
        tasks: [ 'exec:bower_install' ]
    },

    // On any changes to the JS hint them and then move to assets
    scripts: {
        files: [
            'src/js/**/*.js'
        ],
        tasks: ['jshint:all', 'uglify:all']
    },

    // Any change to a less file causes a recompile to assets
    less: {
        files: [
            'src/less/**/*.less'
        ],
        tasks: ['less:all']
    }
}