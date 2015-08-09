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
        helpers: '<%= config.src %>/helpers/{,*/}*.js',
        partials: '<%= config.src %>/includes/{,*/}*.hbs',
        layoutdir: '<%= config.src %>/layouts',
        layout: 'default.hbs',
        data: ['<%= config.src %>/data/*.{json,yml}', 'package.json'],
        production: true
      },
      pages: {
        options: { layout: 'page.hbs' },
        src: ['<%= config.src %>/pages/*.hbs'],
        dest: '<%= config.tmp %>/'
      },
      writing: {
        options: {
          ext: '.html',
          engine: 'handlebars',
          layout: 'writing.hbs'
        },
        files: {
          '<%= config.tmp %>/writing/': ['<%= config.src %>/content/writing/*.md']
        }
      }
    },

    sass: {
      options: {
        sourceMap: true,
        includePaths: ['node_modules']
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

    browserify: {
      dist: {
        files: {
          '<%= config.tmp %>/assets/main.js': '<%= config.src %>/assets/javascripts/{,*/}*.next.js'
        },
        options: {
          transform: ['6to5-browserify', 'browserify-shim']
        }
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

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          removeCommentsFromCDATA: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          removeEmptyAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          removeOptionalTags: true,
          removeIgnored: true,
          caseSensitive: true
        },
        files: [{
          expand: true,
          cwd: '<%= config.dist %>',
          src: '{,*/}*.html',
          dest: '<%= config.dist %>'
        }]
      }
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
                '/node_modules', connect.static('./node_modules')
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

    replace: {
      example: {
        src: '<%= config.dist %>/assets/vendor.min.css',
        dest: '<%= config.dist %>/assets/vendor.min.css',
        replacements: [{
          from: '../img/',
          to: 'images/vendor/'
        }]
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
            '{,*/}*.{ico,png,txt}',
            'assets/fonts/{,*/}*.*',
            'CNAME'
          ]
        }]
      },
      dev: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>/assets',
          dest: '<%= config.tmp %>/assets',
          src: [
            '{,*/}*.*',
            '!{,*/}*.js',
            '!{,*/}*.scss',
            'images/{,*/}*.{gif,jpeg,jpg,png}'
          ]
        }]
      },
      vendor: {
        files: [{
          expand: true,
          cwd: './node_modules/jquery/dist/',
          dest: '<%= config.dist %>/assets',
          src: 'jquery.min.js'
        },
        {
          expand: true,
          cwd: './bower_components/swipebox/src/img/',
          dest: '<%= config.dist %>/assets/images/vendor',
          src: '*.{gif,jpeg,jpg,png,svg}'
        }]
      },
      html: {
        files: [{
          expand: true,
          cwd: '<%= config.tmp %>',
          dest: '<%= config.dist %>',
          src: ['{,*/}*.html']
        }]
      },
      analytics: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>/assets/javascripts/',
          dest: '<%= config.dist %>/assets',
          src: ['analytics.js']
        }]
      }
    },

    watch: {
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

    'gh-pages': {
      options: {
        base: '<%= config.dist %>',
        message: 'Update personal site'
      },
      src: '**/*'
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

    grunt.config.set('assemble.options.production', false);
    grunt.config.set('browserify.options.watch', true);
    grunt.config.set('browserify.options.browserifyOptions.debug', true);

    grunt.task.run([
      'clean:dev',
      'assemble',
      'browserify',
      'sass',
      'autoprefixer',
      'copy:dev',
      'connect:dev',
      'watch',
      'clean:dev'
    ]);
  });

  grunt.registerTask('build', [
    'clean',
    'assemble',
    'useminPrepare',
    'browserify',
    'sass',
    'autoprefixer',
    'concat',
    'cssmin',
    'uglify',
    'newer:imagemin',
    'copy:dist',
    'copy:html',
    'copy:analytics',
    'copy:vendor',
    'replace',
    'usemin',
    'htmlmin',
    'clean:dev'
  ]);

  grunt.registerTask('default', ['serve']);
};
