require 'rails_helper'
RSpec.describe Api::V1::CategoryController, type: :controller do
 # RSpec.describe HomeController, type: :controller do

  describe "GET #category" do
    it "returns http success" do
      get :category
      expect(response).to have_http_status(:success)
    end
  end

end
