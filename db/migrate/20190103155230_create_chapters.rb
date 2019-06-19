class CreateChapters < ActiveRecord::Migration[5.2]
  def change
    create_table :chapters do |t|
      t.belongs_to :book, foreign_key: true
      t.string :title
      t.integer :chapter_number
      t.integer :display_order

      t.timestamps
    end
  end
end
