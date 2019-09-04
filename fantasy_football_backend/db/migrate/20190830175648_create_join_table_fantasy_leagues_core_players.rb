class CreateJoinTableFantasyLeaguesCorePlayers < ActiveRecord::Migration[5.2]
  def change
    create_join_table :fantasy_leagues, :core_players do |t|
      # t.index [:fantasy_league_id, :core_player_id]
      # t.index [:core_player_id, :fantasy_league_id]
    end
  end
end
