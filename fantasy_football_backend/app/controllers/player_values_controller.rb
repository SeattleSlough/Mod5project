class PlayerValuesController < ActionController::API
    def index
        @players = PlayerValue.all
        render json: @players 
    end
    
    
    
    end