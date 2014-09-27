# map "/" do
#   run Rack::File.new("./index.html")
# end
use Rack::Reloader, 0
map "/" do
  run Rack::Directory.new(Dir.pwd)
end
