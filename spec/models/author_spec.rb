# == Schema Information
#
# Table name: authors
#
#  id         :bigint(8)        not null, primary key
#  email      :string(255)
#  fullname   :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_authors_on_email     (email) UNIQUE
#  index_authors_on_fullname  (fullname) UNIQUE
#

require 'rails_helper'

RSpec.describe Author, type: :model do
# A test to validate the presence of fullname presence validation method 
  it { is_expected.to validate_presence_of(:fullname) }
# A test to validate the presence of email presence validation method
  it { should validate_presence_of(:email)}
end
