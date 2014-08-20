module.exports = function(grunt) {

    grunt.initConfig({
        'connect': {
            demo: {
                options: {
                    open: true,
                    keepalive: true
                }
            }
        },
        'gh-pages': {
            options: {
                clone: 'bower_components/color-picker'
            },
            src: [
                'bower_components/**/*',
                '!bower_components/color-picker/**/*',
                'demo/*', 'src/*', 'index.html'
            ]
        },
        'replace': {
            example: {
                src: ['src/*'],
                dest: 'dist/',
                replacements: [{
                    from: 'bower_components',
                    to: '..'
                }]
            }
        },
				'karma': {
					unit: {
						configFile: 'test/karma.conf.js'
					}
				}
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-text-replace');
		grunt.loadNpmTasks('grunt-karma');

		grunt.registerTask('test', ['karma'])
    grunt.registerTask('build',  ['replace']);
    grunt.registerTask('deploy', ['gh-pages']);
    grunt.registerTask('server', ['connect']);

};
