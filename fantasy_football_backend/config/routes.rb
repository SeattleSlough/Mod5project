Rails.application.routes.draw do
    
  resources :owners
  resources :player_stats
  resources :player_values
  resources :core_players
  resources :fantasy_leagues
  namespace :api do
      namespace :v1 do
        resources :users
        post '/login', to: 'auth#create'
        get '/profile', to: 'users#profile'
      end
    end
end
