class Api::V1::AuthorController < ApiController
	def authors	  
  	 @authors = Author.all
	  render json: @authors
	end
end

