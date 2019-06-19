# == Schema Information
#
# Table name: reading_lists
#
#  id         :bigint(8)        not null, primary key
#  name       :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  book_id    :bigint(8)
#  user_id    :bigint(8)
#
# Indexes
#
#  index_reading_lists_on_book_id  (book_id)
#  index_reading_lists_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (book_id => books.id)
#  fk_rails_...  (user_id => users.id)
#

class ReadingList < ApplicationRecord
	validates_presence_of :book_id, :user_id
  belongs_to :user
  belongs_to :book
end
