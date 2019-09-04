class PlayerStatsController < ActionController::API
def index
    @players = PlayerStat.all
    render json: @players 
end



end