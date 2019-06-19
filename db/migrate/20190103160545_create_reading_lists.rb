class CreateReadingLists < ActiveRecord::Migration[5.2]
  def change
    create_table :reading_lists do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :book, foreign_key: true
      t.string :name

      t.timestamps
    end
  end
end
