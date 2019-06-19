class Api::V1::ListController < ApiController

# this method is to accept the user_id and book_id

	def my_library_book
		books = Array.new
		user_id = params[:user_id].to_i
		all_user_books = ReadingList.where(user_id: user_id)
		all_user_books.each do |book|
			@book_detail = Book.find_by(id: book.book_id)
			books.push(@book_detail)			
		end
		render json: { books: books }
	end

	def check_book_in_library(user_id, book_id)
		lib_book = ReadingList.find_by(user_id: user_id, book_id: book_id)
		if lib_book
			return lib_book.id
		else
			return false
		end
	end

	def add_to_reading_list
		user_id = params[:user_id].to_i
		book_id = params[:book_id].to_i
		@check_if_exist = check_book_in_library(user_id, book_id)
		if @check_if_exist == false
			# lets query the user table to get its balance and deduct the price of the book from it
			book = Book.find_by(id: book_id)
			user = User.find_by(id: user_id)
			book_name = book.title
			# lets get the price of the book and the balance of the user
			@book_price = book.price
			@user_balance = user.balance
			# lets do some comparison
			if @user_balance >= @book_price
				# lets deduct the price of the book from the user balance
				@current_user_balance = @user_balance - @book_price
				@library = ReadingList.new(
							user_id: user_id,
							book_id: book_id,
							name: book_name
						)
				if @library.save 		    	
			   		User.update(user_id, 
						balance: @current_user_balance
					)
					render json: { success: true, message: "library successfully created" }
				else
				    render json: { success: false, message: "error during saving" }
				end
			else
				 render json: { success: false, message: "your balance is not enough to read this book" }
			end

		else
			render json: { success: true, exits: true, message: "Book already in the library" }
		end
	end

end
#  id         :bigint(8)        not null, primary key
#  name       :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  book_id    :bigint(8)
#  user_id    :bigint(8)