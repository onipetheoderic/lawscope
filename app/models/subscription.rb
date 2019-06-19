# == Schema Information
#
# Table name: subscriptions
#
#  id             :bigint(8)        not null, primary key
#  end_date       :date
#  expired        :boolean
#  name           :string(255)
#  start_date     :date
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  transaction_id :bigint(8)
#  user_id        :integer
#
# Indexes
#
#  index_subscriptions_on_transaction_id  (transaction_id)
#
# Foreign Keys
#
#  fk_rails_...  (transaction_id => transactions.id)
#

class Subscription < ApplicationRecord
	validates_presence_of :start_date, :end_date, :user_id
  belongs_to :payment, foreign_key: 'transaction_id', class_name: 'Transaction'
# this is a method for the whenever gem
  	def self.check_updated_at
  		@day_date = Date.today
  		where("end_date = ?", @day_date).update(expired: true, balance: 0.00)
	end
end
