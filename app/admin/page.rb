ActiveAdmin.register Page do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
#
#  id          :bigint(8)        not null, primary key
#  content     :text(65535)
#  page_number :integer
#  views       :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  chapter_id  :bigint(8)
#
#
 permit_params :content, :page_number, :chapter_id, :views
 # or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end
menu parent: "Books"

end