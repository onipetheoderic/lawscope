require 'rails_helper'
require 'faker'


RSpec.describe Api::V1::RegistrationsController, type: 'request' do
  describe "POST #create" do
      context "with valid parameters" do
      
        let(:valid_params) do
          { 
            first_name: Faker::Name.unique.name,
            last_name: Faker::Name.unique.name,
            email: Faker::Internet.unique.email,
            password: "123456"          
          }
        end
#it confirms if the user has been created
        it "creates a new user" do
          post "/api/v1/sign_up", params: valid_params
          expect(response).to have_http_status(:created)  # it's use for code 200 
        end
# To confirm if the user has been successfully saved with the correct attributes
        it "creates a user with the correct attributes" do
          expect {
            post "/api/v1/sign_up", params: valid_params}.to change(User, :count).by(1)
        end
      end
      context "with invalid email parameters" do
         let(:invalid_params) do
          { 
            first_name: Faker::Name.unique.name,
            last_name: Faker::Name.unique.name,
            email: Faker::Name.unique.name,
            password: "123456"          
          }
        end
        it "creates an invalid user" do
          post "/api/v1/sign_up", params: invalid_params
          expect(response).to have_http_status(422)  # it's use for code 200 
        end
# To confirm if the user has been successfully saved with the correct attributes
        it "creates a user with the incorrect attributes" do
          expect {
            post "/api/v1/sign_up", params: invalid_params}.to change(User, :count).by(0)
        end
      end
      
  end
end
