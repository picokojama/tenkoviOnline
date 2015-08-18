module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            build: {
                files: {
                    'app/lib/app.bundle.js': ['assets/js/main.js']
                }
            }
        },
        copy: {
            scripts: {
                src: [
                    'bower_components/easeljs/lib/easeljs-0.7.1.min.js',
                    'bower_components/jquery/dist/jquery.min.js',
                    'assets/js/services/collisionService.js',
                    'bower_components/bootstrap/dist/js/bootstrap.min.js'
                ],
                dest: 'app/lib/dependencies/',
                expand: true,
                flatten: true
            },
            css: {
                src: [
                    'bower_components/bootstrap/dist/css/bootstrap.min.css',
                    'assets/css/main.css'
                ],
                dest: 'app/css/',
                expand: true,
                flatten: true
            },
            images: {
                expand: true,
                dest: 'app/img/',
                cwd: 'assets/img/',
                src: '**/*.*'
            }
        },
        watch: {
            scripts: {
                files: ['assets/**/*.*'],
                tasks: ['build']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('build', ['browserify', 'copy']);
    grunt.registerTask('default', ['build', 'watch']);

};
