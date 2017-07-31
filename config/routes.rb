Rails.application.routes.draw do
  get 'sessions/new'

  root 'application#new'

  resources :users

  get '/signup', to: 'users#new'
  post '/signup', to: 'users#create'
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end
