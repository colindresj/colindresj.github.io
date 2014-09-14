module.exports = function (grunt) {
  'use strict';

  var config = {
    dist: './dist',
    src: './src'
  };

  require('load-grunt-tasks')(grunt, { pattern: ['grunt-*', 'assemble'] });
  require('time-grunt')(grunt);

  grunt.initConfig({
    config: config,

    assemble: {
      options: {
        flatten: true,
        assets: '<%= config.dist %>/assets',
        partials: '<%= config.src %>/includes/{,*/}*.hbs',
        layoutdir: '<%= config.src %>/layouts',
        layout: 'default.hbs',
        data: ['<%= config.src %>/data/*.{json,yml}', 'package.json'],
        stories: '<%= config.src %>/content/stories'
      },
      pages: {
        options: { layout: 'page.hbs' },
        src: ['<%= config.src %>/pages/*.hbs'],
        dest: '<%= config.dist %>'
      },
      stories: {
        options: {
          ext: '.html',
          engine: 'handlebars',
          layout: 'story.hbs'
        },
        files: {
          '<%= config.dist %>/stories/': ['<%= config.src %>/content/stories/*.md']
        }
      }
    },

    sass: {
      options: {
        sourceMap: true,
        includePaths: ['bower_components']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>/assets/scss',
          src: ['*.scss'],
          dest: '<%= config.dist %>/assets',
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
          cwd: '<%= config.dist %>/assets/',
          src: '{,*/}*.css',
          dest: '<%= config.dist %>/assets/'
        }]
      }
    },

    coffee: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>/assets/coffee',
          src: '{,*/}*.{coffee,litcoffee,coffee.md}',
          dest: '<%= config.dist %>/assets',
          ext: '.js'
        }]
      }
    },

    connect: {
      dist: {
        options: {
          port: 9000,
          open: true,
          livereload: 35729,
          hostname: 'localhost',
          base: '<%= config.dist %>',
          middleware: function (connect) {
            return [
              connect().use(
                '/bower_components', connect.static('./bower_components')
              ),
              connect.static(config.dist)
            ];
          }
        }
      }
    },

    wiredep: {
      scripts: {
        src: ['<%= config.dist %>/index.html']
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
      }
    },

    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      coffee: {
        files: ['<%= config.src %>/assets/coffee/{,*/}*.{coffee,litcoffee,coffee.md}'],
        tasks: ['coffee:dist']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      sass: {
        files: ['<%= config.src %>/assets/scss/{,*/}*.scss'],
        tasks: ['sass', 'autoprefixer']
      },
      assemble: {
        files: ['<%= config.src %>/{,*/}*.hbs'],
        tasks: ['assemble']
      },
      livereload: {
        options: {
          livereload: '<%= connect.dist.options.livereload %>'
        },
        files: [
          '<%= config.dist %>/{,*/}*.html',
          '<%= config.dist %>/assets/{,*/}*.css',
          '<%= config.dist %>/assets/{,*/}*.js'
        ]
      }
    },

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= config.dist %>/*',
            '!<%= config.dist %>/.git*'
          ]
        }]
      }
    }
  });

  grunt.registerTask('serve', function () {
    if (grunt.option('allow-remote')) {
      grunt.config.set('connect.dist.options.hostname', '0.0.0.0');
    }

    grunt.task.run([
      'build',
      'connect',
      'watch'
    ]);
  });

  grunt.registerTask('build', [
    'clean:dist',
    'assemble',
    'wiredep',
    'coffee',
    'sass',
    'autoprefixer',
    'copy:dist'
  ]);

  grunt.registerTask('default', ['serve']);
};
