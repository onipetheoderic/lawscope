class AddUserIdToSubscription < ActiveRecord::Migration[5.2]
  def change
    add_column :subscriptions, :user_id, :integer
  end
end
