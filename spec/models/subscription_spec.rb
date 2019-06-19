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

require 'rails_helper'

RSpec.describe Subscription, type: :model do
  it { is_expected.to validate_presence_of(:start_date)}
  it { is_expected.to validate_presence_of(:user_id)}
   it { is_expected.to validate_presence_of(:end_date)}
end
