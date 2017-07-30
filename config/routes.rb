Rails.application.routes.draw do
  root 'application#new'
  resources :users, only: [:show]
end
