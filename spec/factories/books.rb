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

FactoryGirl.define do
  factory :book do
    author nil
    title "MyString"
    publisher "MyString"
    chapters ""
    num_of_pages 1
    is_published false
  end
end
