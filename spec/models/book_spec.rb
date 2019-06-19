# == Schema Information
#
# Table name: books
#
#  id               :bigint(8)        not null, primary key
#  chapters         :integer
#  description      :text(65535)
#  image            :string(255)
#  is_published     :boolean
#  num_of_pages     :integer
#  price            :float(24)
#  publisher        :string(255)
#  title            :string(255)
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  admin_user_id    :integer
#  author_id        :bigint(8)
#  book_category_id :integer
#
# Indexes
#
#  index_books_on_author_id  (author_id)
#
# Foreign Keys
#
#  fk_rails_...  (author_id => authors.id)
#


require 'rails_helper'

RSpec.describe Book, type: :model do
  it { is_expected.to validate_presence_of(:price)}
# A test to validate the presence of email presence validation method
  it { should validate_presence_of(:author_id)}
  it { should validate_presence_of(:book_category_id)}
  it { should validate_presence_of(:title)}
  it { should validate_presence_of(:description)}
end
