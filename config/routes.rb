Rails.application.routes.draw do
  root 'application#new'

  resources :users

  get '/signup', to: 'users#new'
  post '/signup', to: 'users#create'
end
