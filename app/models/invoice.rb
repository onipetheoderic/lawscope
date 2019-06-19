# == Schema Information
#
# Table name: invoices
#
#  id         :bigint(8)        not null, primary key
#  amount     :float(24)
#  is_paid    :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  package_id :bigint(8)
#  user_id    :bigint(8)
#
# Indexes
#
#  index_invoices_on_package_id  (package_id)
#  index_invoices_on_user_id     (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (package_id => packages.id)
#  fk_rails_...  (user_id => users.id)
#

class Invoice < ApplicationRecord
	validates_presence_of :user_id, :package_id, :amount
  belongs_to :user
  belongs_to :package
  has_one :payment, foreign_key: 'transaction_id', class_name: 'Transaction'
end
