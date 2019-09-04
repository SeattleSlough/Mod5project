class CreateJoinTableFantasyLeaguesUsers < ActiveRecord::Migration[5.2]
  def change
    create_join_table :fantasy_leagues, :users do |t|
      # t.index [:fantasy_league_id, :user_id]
      # t.index [:user_id, :fantasy_league_id]
    end
  end
end
