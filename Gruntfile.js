module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    clean: {
      styles: ['assets/css/**/'],
      scripts: ['assets/js/main.js', 'assets/js/main.min.js', 'assets/js/jquery.min.js']
    },
    coffee: {
      compile: {
        files: {
          'assets/js/main.js': 'assets/coffee/main.coffee'
        }
      }
    },
    uglify: {
      options: {
        report: 'min'
      },
      dist: {
        files: {
          'assets/js/main.min.js': [
            'bower_components/fastclick/lib/fastclick.js',
            'bower_components/swipebox/source/jquery.swipebox.js',
            'assets/js/main.js'
          ]
        }
      },
      jquery: {
        files: {
          'assets/js/jquery.min.js': [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/jquery-ui/ui/jquery.ui.effect.js'
          ]
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'assets/css/main.css': 'assets/scss/main.scss'
        }
      }
    },
    copy: {
      swipebox: {
        files: [
          {
            src: 'bower_components/swipebox/source/swipebox.css',
            dest: 'assets/css/swipebox.css'
          },
          {
            expand: true,
            cwd: 'bower_components/swipebox/source/img/',
            src: ['**'],
            dest: 'assets/css/img/'
          }
        ]
      }
    },
    cssmin: {
      options: {
        report: 'min'
      },
      combine: {
        files: {
          'assets/css/main.min.css': ['assets/css/main-un.css', 'assets/css/swipebox.css']
        }
      }
    },
    uncss: {
      dist: {
        src: ['index.html', '_layouts/**.html'],
        dest: 'assets/css/main-un.css',
        options: {
          stylesheets: ['assets/css/main.css'],
          report: 'min'
        }
      }
    },
    exec: {
      build: {
        cmd: 'jekyll build'
      },
      serve: {
        cmd: 'jekyll serve --watch'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', [ 'clean', 'coffee', 'uglify', 'sass', 'copy', 'uncss', 'cssmin', 'exec:build' ]);
  grunt.registerTask('scripts', [ 'clean:scripts', 'coffee', 'uglify' ]);
  grunt.registerTask('styles', [ 'clean:styles', 'sass', 'copy', 'uncss', 'cssmin' ]);
  grunt.registerTask('serve', ['exec:serve']);
    grunt.registerTask('s', ['serve']);

};

