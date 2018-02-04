module.exports= function(grunt){

    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        jshint:{
            files:['app/**/*.js'],
             options:{
                globals:{
                    jQuery:true,
                    console:true,
                    module:true
                }
            }
        },
        concat:{
            options:{
                separator:';'
            },
            dist:{
                src:['app/**/*.js'],
                dest:'bower_components/dist/js/<%= pkg.name %>.js'
            }
        },
        connect:{
            server:{
                options:{
                    port:9000,
                    host:'localhost',
                    base:'',
                    keepalive:true
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    var connect = require('connect');
        grunt.registerTask('server', function() {
            grunt.task.run('concat','connect:server');
            grunt.log.writeln('Starting static web server in "/app" on port 9000.');
        });
}

//https://github.com/gruntjs of reference
