class CreatePlayerValues < ActiveRecord::Migration[5.2]
  def change
    create_table :player_values do |t|
      t.string :display_name
      t.integer :player_id
      t.string :image
      t.string :team
      t.integer :min_price
      t.integer :max_price
      t.integer :avg_price
      t.string :position
    end
  end
end
