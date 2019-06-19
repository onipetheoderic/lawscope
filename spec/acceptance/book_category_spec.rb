require 'rails_helper'
require 'rspec_api_documentation/dsl'


resource 'BookCategory' do
 
  # index
	get "/api/v1/category" do
    example "Listing orders" do
      do_request

      status.should == 200
    end
  end
end