Rails.application.routes.draw do
  root 'application#new'

  resources :users

  get '/signup', to: 'users#new'
end
