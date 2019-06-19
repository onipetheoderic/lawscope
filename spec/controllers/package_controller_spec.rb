require 'rails_helper'
RSpec.describe Api::V1::PackageController, type: :controller do
 # RSpec.describe HomeController, type: :controller do

  describe "GET #packages" do
    it "returns http success" do
      get :packages
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #show package" do
	    it "returns http success" do
	    	id = Faker::Number.number(1).to_i
	      	get :show, {:params => {:id => id}}
	      	expect(response).to have_http_status(:success)
	    end
  end

  describe "POST #create_subscription" do
	    it "returns http success" do
	    	user_id = Faker::Number.number(1).to_i
            package_id = Faker::Number.number(1).to_i 
        end
          
	      	it "creates a new subscription" do
          post :create_subscription, params: {:package_id => package_id, :user_id => user_id}, :format => :json
          expect(response).to have_http_status(:created)  # it's use for code 200 
           expect(JSON.parse(response.body)["success"]).to eq(true)
        
	    end
  end

  
end

