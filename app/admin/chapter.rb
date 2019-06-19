
ActiveAdmin.register Chapter do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
#
#  id             :bigint(8)        not null, primary key
#  chapter_number :integer
#  display_order  :integer
#  title          :string(255)
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  book_id        :bigint(8)
#
 permit_params :chapter_number, :display_order, :title, :book_id 
 # or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end
menu parent: "Books"
end