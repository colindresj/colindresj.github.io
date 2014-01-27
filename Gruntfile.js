module.exports = function(grunt) {

  grunt.initConfig({
    coffee: {
      compile: {
        files: {
          'assets/js/main.js': 'assets/coffee/main.coffee'
        }
      }
    },
    uglify: {
      options: {
        report: 'gzip'
      },
      dist: {
        files: {
          'assets/js/main.min.js': ['bower_components/fastclick/lib/fastclick.js', 'bower_components/swipebox/source/jquery.swipebox.js', 'assets/js/main.js']
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
        report: 'gzip'
      },
      combine: {
        files: {
          'assets/css/main.min.css': ['assets/css/main.css', 'assets/css/swipebox.css']
        }
      }
    },
    imagemin: {
      static: {
        options: {
          progressive: true
        },
        files: {
          'assets/img/compressed/knowtify': 'assets/img/knowtify/*.jpg',
          'assets/img/compressed/orchid': 'assets/img/orchid/*.jpg',
          'assets/img/compressed/taller-moure': 'assets/img/taller-moure/*.jpg',
          'assets/img/compressed/sapce': 'assets/img/sapce/*.jpg'
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

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', [ 'coffee', 'uglify', 'sass', 'copy', 'cssmin', 'imagemin', 'exec:build' ]);
  grunt.registerTask('serve', ['exec:serve']);

};

