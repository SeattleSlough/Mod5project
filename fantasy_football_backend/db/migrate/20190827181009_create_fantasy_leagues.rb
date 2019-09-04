class CreateFantasyLeagues < ActiveRecord::Migration[5.2]
  def change
    create_table :fantasy_leagues do |t|
      t.string :league_name
      t.integer :players, :default => 0
    end
  end
end
