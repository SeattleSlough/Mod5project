class CorePlayersController < ActionController::API
    def index
        @players = CorePlayer.all
        render json: @players 
    end
    
    
    
    end