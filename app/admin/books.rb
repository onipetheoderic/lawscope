ActiveAdmin.register Book do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
permit_params :title, :chapters, :num_of_pages, :description, :publisher, :image, :is_published, :author_id
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end
#chapters     :integer
#  image        :string(255)
#  is_published :boolean
#  num_of_pages :integer
#  publisher    :string(255)
#  title        :string(255)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  author_id    :bigint(8)

#
form html: { :multipart => true }, :url => "create" do |f|
    inputs  do
      input :title
      input :chapters
      input :description
      input :num_of_pages
      input :publisher, label: "Name of Publisher"
      input :image, :as => :file
      input :is_published
      panel 'Book Category:' do
        collection_select(:book_category_id, BookCategory.all, :id, :name)
      end
      panel 'Select Name of Author:' do
        collection_select(:author_id, Author.all, :id, :fullname)
      end
      panel 'Price of book, 0 means Free:' do
        input :price
      end
    
      f.actions do
     	  f.action :submit, label: "Submit"
  		end
    end
    
    # para "Press cancel to return to the list without saving."
  end


end
