require "rainbow"

namespace :coffee do

  desc "This compiles coffeescript into javascript"
  task :compile do
    system "coffee --output 'assets/js' --compile 'assets/coffee/main.coffee'"
    puts "Coffeescript compiled".color :green
  end

  desc "This watches for changes and compiles coffeescript into javascript"
  task :compile do
    system "coffee --output 'assets/js' --compile 'assets/coffee/main.coffee' --watch"
    puts "Coffeescript compiled".color :green
  end

end

namespace :scss do

  desc "This compiles scss into css"
  task :compile_watch do
    system "sass 'assets/scss/main.scss':'assets/css/main.css'"
  end

  desc "This watches for changes and compiles scss into css"
  task :compile_watch do
    system "sass 'assets/scss/main.scss':'assets/css/main.css' --watch"
  end

end

namespace :js do

  desc "This minifies the main javascript file"
  task :uglify do
    system "uglifyjs 'assets/js/main.js' --output 'assets/js/main.min.js' --lint"
    puts "main scripts minified with UglifyJS".color :green
  end

end

namespace :bower do

  desc "This minifies and copies fastclick into js assets"
  task :fastclick do
    system "uglifyjs 'bower_components/fastclick/lib/fastclick.js' --output 'assets/js/fastclick.min.js'"
    puts "a minified version of fastclick was moved to assets".color :green
  end

  desc "This minifies and copies fastclick sources into js and css assets"
  task :fastclick do
    system "cp bower_components/swipebox/source/swipebox.css assets/css/swipebox.css"
    system "uglifyjs 'bower_components/swipebox/source/jquery.swipebox.js' --output 'assets/js/jquery.swipebox.min.js'"
    puts "a minified version of swipebox was moved to assets".color :green
  end

end


# task :default => 'sinatra:create'
