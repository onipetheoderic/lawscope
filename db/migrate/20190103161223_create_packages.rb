class CreatePackages < ActiveRecord::Migration[5.2]
  def change
    create_table :packages do |t|
      t.string :name
      t.integer :duration
      t.text :description
      t.float :amount

      t.timestamps
    end
    add_index :packages, :name, unique: true
  end
end
