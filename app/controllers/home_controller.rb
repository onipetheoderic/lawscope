class HomeController < ApplicationController
  def index
  	@message = "this is the index page"
  end

	def edit
		@user_id = current_admin_user.id
		@book_id = params[:id]
		@title = params[:book][:title]
		@chapters = params[:book][:chapters]
		@num_of_pages = params[:book][:num_of_pages]
		@publisher = params[:book][:publisher]
		@description = params[:book][:description]
		@price = params[:book][:price]
		@author_id = params[:book][:author_id]
		@book_category_id = params[:book][:book_category_id]
		@is_published = params[:book][:is_published]
		@image_name = ""
		if params[:book][:image]
			uploaded_io = params[:book][:image]
			@image_name = @random+uploaded_io.original_filename
		end
		
		book = Book.find_by(id: @book_id)
		book.title = @title
		book.chapters = @chapters
		book.description = @description
		book.author_id = @author_id
		book.book_category_id = @book_category_id
		book.publisher = @publisher
		book.num_of_pages = @num_of_pages
		book.price = @price
		book.is_published = @is_published
		
		respond_to do |format|
	    if book.save 
	      format.html { redirect_to admin_books_path, notice: 'book was successfully updated' }        
	    else
	      format.html{ redirect_to admin_books_path, notice: book.errors }
	    end
	  end

	end


	def create
		@random = SecureRandom.hex(14)
		@user_id = current_admin_user.id
		@title = params[:book][:title]
		@chapters = params[:book][:chapters]
		@num_of_pages = params[:book][:num_of_pages]
		@publisher = params[:book][:publisher]
		@description = params[:book][:description]
		@author_id = params[:book][:author_id]
		@price = params[:book][:price]
		@book_category_id = params[:book][:book_category_id]
		@is_published = params[:book][:is_published]
		uploaded_io = params[:book][:image]
		@image_name = @random+uploaded_io.original_filename
		
		puts "user_id: #{@user_id} title: #{@title} chapters: #{@chapters} 
		author_id: #{@author_id}, publisher: #{@publisher}
		number of pages: #{@num_of_pages}, is_published:  #{@is_published}, image_name: #{@image_name}"

		File.open(Rails.root.join('public', 'uploads', @image_name), 'wb') do |file|
		 file.write(uploaded_io.read)
		 @book = current_admin_user.books.build(
			:title => @title,
			:chapters => @chapters,
			:num_of_pages => @num_of_pages,
			:is_published => @is_published,
			:image => @image_name,
			:description => @description,
			:publisher => @publisher,
			:price => @price,
			:author_id => @author_id,
			:book_category_id => @book_category_id
		
			)
		  respond_to do |format|
	    if @book.save 
	      format.html { redirect_to admin_books_path, notice: 'book was successfully created' }        
	    else
	      format.html { render :new }
	      format.json { render json: @book.errors, status: :unprocessable_entity }
	    end
	  end
	  end
		
		# respond_to do |format|
		# if @book.save 
		#   format.html { redirect_to profile_dashboard_path, notice: 'Program was successfully updated.' }        
		# else
		#   format.html { render :new }
		#   format.json { render json: @book.errors, status: :unprocessable_entity }
		# end
	end
  	

end
