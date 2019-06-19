# == Schema Information
#
# Table name: book_categories
#
#  id          :bigint(8)        not null, primary key
#  description :text(65535)
#  name        :string(255)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_book_categories_on_name  (name) UNIQUE
#

require 'rails_helper'

RSpec.describe BookCategory, type: :model do
  it { is_expected.to validate_presence_of(:name)}
  it { is_expected.to validate_presence_of(:description)}
  
end
