class CreateCorePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :core_players do |t|
      t.string :display_name
      t.string :fname
      t.string :lname
      t.integer :player_id
      t.string :image
      t.string :position
      t.string :team
      t.integer :bye_week
      t.integer :stand_dev
      t.integer :nerd_rank
      t.integer :position_rank
      t.integer :overall_rank
    end
  end
end
