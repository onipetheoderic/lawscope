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

require 'rails_helper'

RSpec.describe ReadingList, type: :model do
  it { is_expected.to validate_presence_of(:book_id)}
   it { is_expected.to validate_presence_of(:user_id)}
end
