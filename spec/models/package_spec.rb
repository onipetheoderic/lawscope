# == Schema Information
#
# Table name: packages
#
#  id          :bigint(8)        not null, primary key
#  amount      :float(24)
#  description :text(65535)
#  duration    :integer
#  name        :string(255)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_packages_on_name  (name) UNIQUE
#

require 'rails_helper'

RSpec.describe Package, type: :model do
   it { is_expected.to validate_presence_of(:amount)}
    it { is_expected.to validate_presence_of(:duration)}
     it { is_expected.to validate_presence_of(:name)}
      it { is_expected.to validate_presence_of(:description)}
end
