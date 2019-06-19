# == Schema Information
#
# Table name: authors
#
#  id         :bigint(8)        not null, primary key
#  email      :string(255)
#  fullname   :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_authors_on_email     (email) UNIQUE
#  index_authors_on_fullname  (fullname) UNIQUE
#

class Author < ApplicationRecord
	validates_presence_of :fullname, :email
	has_many :books
end
