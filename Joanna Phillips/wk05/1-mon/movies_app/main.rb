     
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
  erb :index
end


get '/result' do
  erb :result
end 



