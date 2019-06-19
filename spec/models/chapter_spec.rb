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

require 'rails_helper'

RSpec.describe Chapter, type: :model do
 it { is_expected.to validate_presence_of(:title)}
 it { is_expected.to validate_presence_of(:book_id)}
end
