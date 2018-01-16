'use strict'
module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt) // npm install --save-dev load-grunt-tasks

    grunt.initConfig({
        eslint: {
            options: {
                configFile: '.eslintrc'
            },
            target: ['src/*.js']
        }
    })

    grunt.registerTask('default', ['eslint'])
}
