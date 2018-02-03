module.exports= function(grunt){

    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
<<<<<<< HEAD
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
=======
        connect:{
            server:{
                options:{
                    port:8000,
>>>>>>> 9f306c30d557301ccbd4f3ef2ab7d4043f364910
                    host:'localhost',
                    base:'',
                    keepalive:true
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-connect');
<<<<<<< HEAD
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    var connect = require('connect');
        grunt.registerTask('server', function() {
            grunt.task.run('jshint','concat','connect:server');
            grunt.log.writeln('Starting static web server in "/app" on port 8000.');
        });
}

//https://github.com/gruntjs
=======

    //grunt.registerTask('server','connect:server');

 // After running "npm install connect serve-static --save-dev" to add connect as a dev
        // dependency of your project, you can require it in your gruntfile with:
        var connect = require('connect');
      //  var serveStatic = require('serve-static');
      //  connect(serveStatic('/app')).listen(8000);
    // Now you can define a "connect" task that starts a webserver, using the
        // connect lib, with whatever options and configuration you need:
        grunt.registerTask('server', function() {
            grunt.task.run('connect:server');
            grunt.log.writeln('Starting static web server in "/app" on port 8000.');
           // connect(serveStatic('/app')).listen(8000);
        });
}
>>>>>>> 9f306c30d557301ccbd4f3ef2ab7d4043f364910
