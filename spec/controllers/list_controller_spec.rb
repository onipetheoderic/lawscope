require 'rails_helper'
require 'faker'

RSpec.describe Api::V1::ListController, type: :controller do
	describe "GET #My Library books" do
	    it "returns http success" do
	    	user_id = Faker::Number.number(1).to_i
	      	get :my_library_book, {:params => {:user_id => user_id}}
	      	expect(response).to have_http_status(:success)
	    end
  	end  


  	describe "POST #add_to_reading_list" do
      context "with valid parameters" do
      
        # post "/add_to_reading_list/:book_id/:user_id" => "list#add_to_reading_list"
            user_id = Faker::Number.number(1).to_i
            book_id = Faker::Number.number(1).to_i 
          
#it confirms if  it  has been created
        it "creates a new reading list" do
          post :add_to_reading_list, params: {:book_id => book_id, :user_id => user_id}, :format => :json
          expect(response).to have_http_status(:created)  # it's use for code 200 
           expect(JSON.parse(response.body)["success"]).to eq(true)
        end

        it "creates a new reading list with the correct attributes" do
         expect {
          post :add_to_reading_list, params: {:book_id => book_id, :user_id => user_id}}.to change(ReadingList, :count).by(1) 
        end
      end
      
  end
end
