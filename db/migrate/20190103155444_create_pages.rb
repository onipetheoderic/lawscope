class CreatePages < ActiveRecord::Migration[5.2]
  def change
    create_table :pages do |t|
      t.belongs_to :chapter, foreign_key: true
      t.text :content
      t.integer :page_number
      t.integer :views

      t.timestamps
    end
  end
end
