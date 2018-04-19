module.exports= function(grunt){

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    //print grunt log trace
    require('logfile-grunt')(grunt);

    // Show grunt task time
    require('time-grunt')(grunt);
    
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
        uglify:{
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
                    hostname:'192.168.2.217',
                    base:'',
                    keepalive:false,
                    livereload: true,
                    open:true
                }
            }
        },
        watch:{
            scripts:{
                files:['Gruntfile.js', 'app/**/*.js', 'app/**/*.html','app/**/*.css','index.html'],
             // event: ['added', 'deleted'],
                tasks: ['watch'],
                options:{
                    nospawn: true,
                    interrupt: false,
                    debounceDelay: 250,
                    reload: true,
                    livereload:{
                        options: { livereload: true },
                        host: '192.168.2.217',
                        port:35729,
                        open:true
                    }
                }
            }   
        }
        // ,less:{
        //     options:{
        //         compress:true,
        //         yuicompress:true,
        //         optimization:2
        //     },
        //     files:{
        //         ""
        //     }
        // }
    });
    
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-less');
    var connect = require('connect');
        grunt.registerTask('server', function() {
            grunt.log.writeln('Starting static web server in "/app" on port 9000.');
            grunt.task.run('concat','uglify','connect:server','watch');
        });
}

//https://github.com/gruntjs       for  reference

//For git pull origin sprint1    --allow-unrelated-histories

//https://bootsnipp.com/tags/sidebar  --menue bar reference....
