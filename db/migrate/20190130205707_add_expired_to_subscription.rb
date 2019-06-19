class AddExpiredToSubscription < ActiveRecord::Migration[5.2]
  def change
    add_column :subscriptions, :expired, :boolean
  end
end
