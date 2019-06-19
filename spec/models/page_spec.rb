# == Schema Information
#
# Table name: pages
#
#  id          :bigint(8)        not null, primary key
#  content     :text(65535)
#  page_number :integer
#  views       :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  chapter_id  :bigint(8)
#
# Indexes
#
#  index_pages_on_chapter_id  (chapter_id)
#
# Foreign Keys
#
#  fk_rails_...  (chapter_id => chapters.id)
#

require 'rails_helper'

RSpec.describe Page, type: :model do
  it { should validate_presence_of(:page_number)}
  it { should validate_presence_of(:chapter_id)}
  it { should validate_presence_of(:content)}
end
