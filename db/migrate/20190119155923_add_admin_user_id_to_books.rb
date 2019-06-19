class AddAdminUserIdToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :admin_user_id, :integer
  end
end
