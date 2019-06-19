class Api::V1::BookController < ApiController
	def books  
  	 @books = Book.all
	  render json: @books
	end
	def free_books
		@free_books = Book.where(price: 0.0)
		render json: @free_books
	end

	def newly_created_books
		@last_five_book = Book.last(5)# last - 2
		render json: @last_five_book
	end

	def new_free_books
		@free_books = Book.where(price: 0.0).last(5)
		render json: @free_books
	end

	def new_premium_books
		@premium_books = Book.where("price > ?", 0).last(5)
		render json: @premium_books
	end

	def premium_books
		@premium_books = Book.where("price > ?", 0) 
		render json: @premium_books
	end

	def best_sellers
		@best_sellers = Book.where('price BETWEEN 1 AND 1000').last(3)
		render json: @best_sellers
	end
# this method would accept the user_id and the book_id

	# accepts book_id as parameter
	def show
		@book_id = params[:id]
		@book = Book.find_by(id: @book_id)
		@author_id = @book.author_id
		@chapter_of_book_count = Chapter.where(book_id: @book_id).count
		@chapter_list = Chapter.where(book_id: @book_id)
		@author_detail = Author.find_by(id: @author_id)
		render json: {chapter_count: @chapter_of_book_count, book: @book, author: @author_detail, chapterlist:@chapter_list}
	end
	#accepts book_id and find the parameter in the library model
	def chapter
		@book_id = params[:id]
		@chapter_of_book = Chapter.where(book_id: @book_id)
		render json: @chapter_of_book
	end


	#counts the number of chapter in a specific book
	def chapters_count
		@book_id = params[:id]
		@chapter_of_book_count = Chapter.where(book_id: @book_id).count
		render json: @chapter_of_book_count
	end
	#accepts the chapter_id as an argument and uses it to query the books table
	def pages
		@chapter_id = params[:id]
		@chapter_pages = Page.where(chapter_id: @chapter_id)
		@chapter_pages_count = Page.where(chapter_id: @chapter_id).count
		render json: {all_pages: @chapter_pages, pages_count: @chapter_pages_count}
	end
	def pages_count
		@chapter_id = params[:id]
		@chapter_pages_count = Page.where(chapter_id: @chapter_id).count
		render json: @chapter_pages_count
	end
end
# we use where for many records that match the condition
# we use find_by for a single first record
