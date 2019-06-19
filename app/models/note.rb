# == Schema Information
#
# Table name: notes
#
#  id         :bigint(8)        not null, primary key
#  content    :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  book_id    :bigint(8)
#  user_id    :bigint(8)
#
# Indexes
#
#  index_notes_on_book_id  (book_id)
#  index_notes_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (book_id => books.id)
#  fk_rails_...  (user_id => users.id)
#

class Note < ApplicationRecord
  belongs_to :user
  belongs_to :book
end
