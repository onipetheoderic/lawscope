Rails.application.routes.draw do
  root 'home#index'
  post '/admin/books/create', :to => 'home#create'
  patch 'admin/books/:id/create', to: 'home#edit'
  put 'admin/books/:id/create', to: 'home#edit'

 # touch tmp/restart.txt
  namespace :api do
	  namespace :v1 do
	   get "/authors" => "author#authors"
     get "/books" => "book#books"
     get "/book/:id" => "book#show"
     get "/chapter/:id" => "book#chapter"
     get "/pages/:id" => "book#pages"
     get "/freebooks" => "book#free_books"
     get "/premiumbooks" => "book#premium_books"
     get "/best_sellers" => "book#best_sellers"
     get "/newly_created_books" => "book#newly_created_books"
     get "/new_premium_books" => "book#new_premium_books"
     get "/new_free_books" => "book#new_free_books"
     get "/category" => "category#category"
     get "/packages" => "package#packages"
     get "/package/:id" => "package#show"
     post "/create_subscription/:id/:user_id"=> "package#create_subscription"
     get "/check_user_subscription/:user_id" => "package#check_user_subscription"
     post "/add_to_reading_list/:book_id/:user_id" => "list#add_to_reading_list"
     get "/my_library_book/:user_id" => "list#my_library_book"
     devise_scope :user do
      post "/sign_in", :to => 'sessions#create'
      post "/sign_up", :to => 'registrations#create'
      delete "/sign_out", :to => 'sessions#destroy'
      get "/confirmlogin", :to => 'sessions#confirmlogin'
      post "/load_account_balance_through_auth_token/:id/:balance", :to=>'sessions#load_account_balance_through_auth_token' 
      get "/get_user_details_from_token", :to=> 'sessions#get_user_details_from_token'
      post "/update", :to => 'sessions#update'
      get "/show_user", :to => 'sessions#show_user'
      post "/create_profile", :to => 'sessions#create_profile'
      post "/check_email", :to => 'sessions#check_email'
      end
	  end
	end
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users
  get '*path', to: 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  	
# rspec spec                           # All specs
# rspec spec/models                    # All specs in the models directory
# rspec spec/models/a_model_spec.rb    # All specs in the some_model model spec
# rspec spec/models/a_model_spec.rb:nn # Run the spec that includes line 'nn'
# rspec -e"text from a test"           # Runs specs that match the text
# rspec spec --tag focus               # Runs specs that have :focus => true
# rspec spec --tag focus:special       # Run specs that have :focus => special
# rspec spec --tag focus ~skip         # Run tests except those with :focus => true
end
