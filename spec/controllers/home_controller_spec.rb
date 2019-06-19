require 'rails_helper'
# RSpec.describe Api::V1::ThingsController, type: :controller do
 RSpec.describe HomeController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

end
