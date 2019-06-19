class CreateAuthors < ActiveRecord::Migration[5.2]
  def change
    create_table :authors do |t|
      t.string :fullname
      t.string :email

      t.timestamps
    end
    add_index :authors, :fullname, unique: true
    add_index :authors, :email, unique: true
  end
end
