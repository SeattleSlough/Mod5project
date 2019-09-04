class CreatePlayerStats < ActiveRecord::Migration[5.2]
  def change
    create_table :player_stats do |t|
      t.string :display_name
      t.integer :player_id
      t.string :position
      t.string :image
      t.string :team
      t.integer :rush_att
      t.integer :rush_yards
      t.integer :rush_td
      t.integer :fumbles
      t.integer :rec
      t.integer :rec_yards
      t.integer :rec_td
      t.integer :fantasy_points
      t.integer :completions
      t.integer :attempts
      t.integer :passing_yards
      t.integer :passing_td
      t.integer :passing_int
      t.integer :xp
      t.integer :fg
    end
  end
end
