# == Schema Information
#
# Table name: packages
#
#  id          :bigint(8)        not null, primary key
#  amount      :float(24)
#  description :text(65535)
#  duration    :integer
#  name        :string(255)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_packages_on_name  (name) UNIQUE
#

class Package < ApplicationRecord
	validates_presence_of :amount, :duration, :name, :description
end
