class AddBookCategoryIdToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :book_category_id, :integer
  end
end
