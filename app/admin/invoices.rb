ActiveAdmin.register Invoice do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params :user_id, :package_id, :amount, :is_Paid


menu parent: "Finance"

end
