class CreateOwners < ActiveRecord::Migration[5.2]
  def change
    create_table :owners do |t|
      t.integer :player_id
      t.integer :user_id
    end
  end
end
