class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.belongs_to :author, foreign_key: true
      t.string :title
      t.string :publisher
      t.integer :chapters
      t.integer :num_of_pages
      t.boolean :is_published

      t.timestamps
    end
  end
end
