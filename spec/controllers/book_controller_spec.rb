require 'rails_helper'
RSpec.describe Api::V1::BookController, type: :controller do
 # RSpec.describe HomeController, type: :controller do

  describe "GET #books" do
    it "returns http success" do
      get :books
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #free_books" do
    it "returns http success" do
      get :free_books
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #new_free_books" do
    it "returns http success" do
      get :new_free_books
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #new_premium_books" do
    it "returns http success" do
      get :new_premium_books
      expect(response).to have_http_status(:success)
    end
  end

	describe "GET #premium_books" do
	    it "returns http success" do
	      get :premium_books
	      expect(response).to have_http_status(:success)
	    end
  	end  


  	describe "GET #best_sellers" do
	    it "returns http success" do
	      get :best_sellers
	      expect(response).to have_http_status(:success)
	    end
  	end  

  	describe "GET #show" do
	    it "returns http success" do
	      get :show, {:params => {:id => 7}}
	      expect(response).to have_http_status(:success)
	    end
  	end 
  	describe "GET #chapters" do
	    it "returns http success" do
	      get :chapter, {:params => {:id => 7}}
	      expect(response).to have_http_status(:success)
	    end
  	end 

  	describe "GET #Page" do
	    it "returns http success" do
	      get :pages, {:params => {:id => 7}}
	      expect(response).to have_http_status(:success)
	    end
  	end  

end
