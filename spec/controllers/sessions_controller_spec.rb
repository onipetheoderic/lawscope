require 'rails_helper'
require 'faker'


RSpec.describe Api::V1::SessionsController, type: 'request' do
  describe "POST #create" do
      context "with valid parameters" do
      
        let(:valid_params) do
          { 
            email: Faker::Internet.unique.email,
            password: "123456"          
          }
        end
        let(:reg_params) do
          { first_name: Faker::Name.name,
            last_name: Faker::Name.name,
            email: Faker::Internet.unique.email,
            password: "123456"          
          }
        end
        #it confirms if the user has been signed In
        it "it logs in a user that is not in the db" do
          post "/api/v1/sign_in", params: valid_params
          expect(response).to have_http_status(:success)  # it's use for code 200 
        end

        #it create a new user and attempts to log in
        it "creates a new user" do
          # puts "this is the original reg params #{reg_params}"
          post "/api/v1/sign_up", params: reg_params
          expect(response).to have_http_status(:created)  # it's use for code 200
          @parsed_response = JSON.parse(response.body)
          # puts "This is the parse Json output: #{@parsed_response["id"]}"
          @id = @parsed_response["id"].to_i
        end

        it "this attempts to sign in with the valid user params" do
          post "/api/v1/sign_in", params: valid_params
          expect(response).to have_http_status(:success)  # it's use for code 200 

        end
        
      end
      
     
      
  end
end
