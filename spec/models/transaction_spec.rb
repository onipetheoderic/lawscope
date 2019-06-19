# == Schema Information
#
# Table name: transactions
#
#  id         :bigint(8)        not null, primary key
#  amount     :float(24)
#  ref        :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  invoice_id :bigint(8)
#
# Indexes
#
#  index_transactions_on_invoice_id  (invoice_id)
#  index_transactions_on_ref         (ref) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (invoice_id => invoices.id)
#

require 'rails_helper'

RSpec.describe Transaction, type: :model do
  it { is_expected.to validate_presence_of(:invoice_id)}
   it { is_expected.to validate_presence_of(:amount)}
end
