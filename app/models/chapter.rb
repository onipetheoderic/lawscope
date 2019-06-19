# == Schema Information
#
# Table name: chapters
#
#  id             :bigint(8)        not null, primary key
#  chapter_number :integer
#  display_order  :integer
#  title          :string(255)
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  book_id        :bigint(8)
#
# Indexes
#
#  index_chapters_on_book_id  (book_id)
#
# Foreign Keys
#
#  fk_rails_...  (book_id => books.id)
#

class Chapter < ApplicationRecord
	validates_presence_of :title, :book_id
  belongs_to :book
end
