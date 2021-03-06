module.exports = function (grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    config: grunt.file.readJSON('config.json'),
    jshint: {
      assets: [
        'Gruntfile.js',
        'assets/js/**/*.js'
      ]
    },
    concat: {
      css: {
        files: {
          'dist/css/bundle.css': [
            'assets/css/*.css'
          ]
        }
      },
      vendor: {
        files: {
          'dist/js/vendor.js': [
            'assets/vendor/*.js'
          ]
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/js/vendor.min.js': ['dist/js/vendor.js'],
          'dist/js/bundle.min.js': ['dist/js/bundle.js']
        }
      }
    },
    copy: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'assets/html/',
            src: ['*.html'],
            dest: 'dist/',
            filter: 'isFile'
          }
        ]
      },
      deploy: {
        files: [
          {
            expand: true,
            cwd: 'dist/',
            src: ['*', '**/*'],
            dest: 'couchapp/_attachments/' 
          }
        ]
      }
    },
    browserify: {
      dist: {
        files: {
          'dist/js/bundle.js': ['assets/js/app.js']
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 5000,
          base: 'dist'
        }
      }
    },
    watch: {
      options: {
        livereload: 5000
      },
      scripts: {
        files: ['assets/js/**/*.js'],
        tasks: ['jshint', 'browserify'],
      },
      vendor: {
        files: ['assets/vendor/*.js'],
        tasks: ['concat']
      },
      css: {
        files: ['assets/css/*.css'],
        tasks: ['concat:css']
      },
      html: {
        files: ['assets/html/*.html'],
        tasks: ['copy']
      }
    },
    'couch-compile': {
      dist: {
        files: {
          'app.json': 'couchapp'
        }
      }
    },
    'couch-push': {
      options: '<%= config.auth %>',
      dist: {
        files: {
          '<%= config.database_url %>': 'app.json'
        } 
      }
    },
  });

  grunt.registerTask('build', [
    'jshint',
    'concat',
    'uglify',
    'copy',
    'browserify'
  ]);

  grunt.registerTask('deploy', [
    'build',
    'couch'
  ]);

  grunt.registerTask('server', [
    'build',
    'connect',
    'watch'
  ]);

  grunt.registerTask('travis', [
    'jshint'
  ]);
};