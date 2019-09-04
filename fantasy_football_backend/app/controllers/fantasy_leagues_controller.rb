class FantasyLeaguesController < ActionController::API
    # validates :league_name, presence: true
    # validates :league_name, uniqueness: true

    
    def index
        @leagues = FantasyLeague.all
        render json: @leagues 
    end

    def create
        @league = FantasyLeague.new(league_name: params[:league_name])
    end

    
    
    
    end