class Api::V1::CategoryController < ApiController
	def category  
  	 @category = BookCategory.all
	  render json: @category
	end
end

