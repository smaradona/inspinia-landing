'use strict';


module.exports = function jshint(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Options
    return {
        production: {
            files: {
                'public/js/app.min.js': [
                    'public/components/jquery/dist/jquery.min.js',
                    'public/js/app.js',
                    'public/js/pace.min.js',
                    'public/js/bootstrap.min.js',
                    'public/js/classie.js',
                    'public/js/cbpAnimatedHeader.js',
                    'public/js/wow.min.js',
                    'public/js/inspinia.js'
                ],
                report: 'gzip'
            }
        }

    };
};
