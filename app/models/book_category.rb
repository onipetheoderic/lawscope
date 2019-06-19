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

class BookCategory < ApplicationRecord
	validates_presence_of :name, :description
	has_many :books
end
