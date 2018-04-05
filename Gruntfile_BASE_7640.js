module.exports= function(grunt){

    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        connect:{
            server:{
                options:{
                    port:8000,
                    host:'localhost',
                    base:'',
                    keepalive:true
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-connect');

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
