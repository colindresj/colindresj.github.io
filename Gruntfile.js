module.exports = function (grunt) {
  'use strict';

  var config = {
    dist: './dist',
    src: './src',
    tmp: './.tmp'
  };

  require('load-grunt-tasks')(grunt, { pattern: ['grunt-*', 'assemble'] });
  require('time-grunt')(grunt);

  grunt.initConfig({
    config: config,

    assemble: {
      options: {
        flatten: true,
        assets: '<%= config.tmp %>/assets',
        partials: '<%= config.src %>/includes/{,*/}*.hbs',
        layoutdir: '<%= config.src %>/layouts',
        layout: 'default.hbs',
        data: ['<%= config.src %>/data/*.{json,yml}', 'package.json']
      },
      pages: {
        options: { layout: 'page.hbs' },
        src: ['<%= config.src %>/pages/*.hbs'],
        dest: '<%= config.tmp %>/'
      },
      stories: {
        options: {
          ext: '.html',
          engine: 'handlebars',
          layout: 'story.hbs'
        },
        files: {
          '<%= config.tmp %>/stories/': ['<%= config.src %>/content/stories/*.md']
        }
      }
    },

    sass: {
      options: {
        sourceMap: true,
        includePaths: ['bower_components']
      },
      dev: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>/assets/stylesheets',
          src: ['*.scss'],
          dest: '<%= config.tmp %>/assets',
          ext: '.css'
        }]
      }
    },

    autoprefixer: {
      options: {
        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.tmp %>/assets/',
          src: '{,*/}*.css',
          dest: '<%= config.tmp %>/assets/'
        }]
      }
    },

    coffee: {
      dev: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>/assets/javascripts',
          src: '{,*/}*.{coffee,litcoffee,coffee.md}',
          dest: '<%= config.tmp %>/assets',
          ext: '.js'
        }]
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>/assets/images',
          src: '{,*/}*.{gif,jpeg,jpg,png}',
          dest: '<%= config.dist %>/assets/images'
        }]
      }
    },

    useminPrepare: {
      html: '<%= config.tmp %>/index.html',
      options: {
        dest: '<%= config.dist %>'
      }
    },

    usemin: {
      options: {
        assetsDirs: ['<%= config.dist %>/assets']
      },
      html: ['<%= config.dist %>/{,*/}*.html'],
      css: ['<%= config.dist %>/assets/{,*/}*.css']
    },

    connect: {
      dev: {
        options: {
          port: 9000,
          open: true,
          livereload: 35729,
          hostname: 'localhost',
          base: '<%= config.tmp %>',
          middleware: function (connect) {
            return [
              connect().use(
                '/bower_components', connect.static('./bower_components')
              ),
              connect.static(config.tmp)
            ];
          }
        }
      },
      dist: {
        options: {
          base: '<%= config.dist %>',
          livereload: false
        }
      }
    },

    wiredep: {
      scripts: {
        src: ['<%= config.tmp %>/index.html']
      }
    },

    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.src %>',
          dest: '<%= config.dist %>',
          src: [
            '*.{ico,png,txt}',
            'assets/fonts/{,*/}*.*'
          ]
        }]
      },
      html: {
        files: [{
          expand: true,
          cwd: '<%= config.tmp %>',
          dest: '<%= config.dist %>',
          src: ['{,*/}*.html']
        }]
      }
    },

    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      coffee: {
        files: ['<%= config.src %>/assets/javascripts/{,*/}*.{coffee,litcoffee,coffee.md}'],
        tasks: ['coffee']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      sass: {
        files: ['<%= config.src %>/assets/stylesheets/{,*/}*.scss'],
        tasks: ['sass', 'autoprefixer']
      },
      assemble: {
        files: ['<%= config.src %>/{,*/}*.hbs'],
        tasks: ['assemble']
      },
      livereload: {
        options: {
          livereload: '<%= connect.dev.options.livereload %>'
        },
        files: [
          '<%= config.tmp %>/{,*/}*.html',
          '<%= config.tmp %>/assets/{,*/}*.css',
          '<%= config.tmp %>/assets/{,*/}*.js'
        ]
      }
    },

    clean: {
      dev: '<%= config.tmp %>',
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= config.dist %>',
            '!<%= config.dist %>/.git*'
          ]
        }]
      }
    }
  });

  grunt.registerTask('serve', function (target) {
    if (grunt.option('allow-remote')) {
      grunt.config.set('connect.dist.options.hostname', '0.0.0.0');
    }

    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:dev',
      'assemble',
      'wiredep',
      'coffee',
      'sass',
      'autoprefixer',
      'connect:dev',
      'watch'
    ]);
  });

  grunt.registerTask('build', [
    'clean',
    'assemble',
    'wiredep',
    'useminPrepare',
    'coffee',
    'sass',
    'autoprefixer',
    'concat',
    'cssmin',
    'uglify',
    'newer:imagemin',
    'copy',
    'usemin'
  ]);

  grunt.registerTask('default', ['serve']);
};
