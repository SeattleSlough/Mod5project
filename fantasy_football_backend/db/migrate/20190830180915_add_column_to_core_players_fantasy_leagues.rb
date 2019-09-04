class AddColumnToCorePlayersFantasyLeagues < ActiveRecord::Migration[5.2]
  def change
    add_column :core_players_fantasy_leagues, :owner, :string
  end
end
