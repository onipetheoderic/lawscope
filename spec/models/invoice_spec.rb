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

require 'rails_helper'

RSpec.describe Invoice, type: :model do
  it { is_expected.to validate_presence_of(:package_id)}
  it { is_expected.to validate_presence_of(:user_id)}
   it { is_expected.to validate_presence_of(:amount)}
end
