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
        uglify: {
            options:{
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */',
            },
            build: {
                files: {
                    'bower_components/dist/js/<%= pkg.name %>.min.js':['bower_components/dist/js/<%= pkg.name %>.js']
                }
            }
        },
        connect:{
            server:{
                options:{
                    port:9000,
                    base:'',
                    keepalive:true
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    var connect = require('connect');
        grunt.registerTask('server', function() {
            grunt.task.run('concat','uglify','connect:server');
            grunt.log.writeln('Starting static web server in "/app" on port 9000.');
        });
}

//https://github.com/gruntjs of reference
