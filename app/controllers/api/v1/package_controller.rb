class Api::V1::PackageController < ApiController
	def packages 
  	 @package = Package.all
	  render json: @package
	end

	def show
		@package_id = params[:id]
		@package = Package.find_by(id: @package_id)
		render json: {package: @package}
	end
	def concat_date(end_date)
		@date_today = Date.today
		@remaining_days = (end_date.to_date - @date_today.to_date).to_i
		return @remaining_days
	end


	def check_subscription(user_id)
		@user_subs = Subscription.where(user_id: user_id).last
		if @user_subs
			if @user_subs.expired == false
				@end_date = @user_subs.end_date
				@remaining_days = concat_date(@end_date)
				return @remaining_days
			else
				remaining_days = 0
				return remaining_days
			end
		else
			return false
		end

	end
# http://localhost:3000/api/v1/create_subscription/1/3
	def use_user_id_to_get_sub_id(user_id)
		@subscription = Subscription.where(user_id: user_id).last
		return @subscription.id
	end

	def check_user_subscription
		user_id = params[:user_id]
		@subscription = Subscription.where(user_id: user_id).last
		if @subscription.expired == true
			render json: { expired: true}
		else
			render json: { expired: false}
		end
	end

	def create_subscription
		package_id = params[:id]
		user_id = params[:user_id]
		@current_sub = check_subscription(user_id)
		puts "____________this is the current subscription days remaining: #{@current_sub}"
		start_date = Date.today()
		# lets get the current user balance
		user = User.find_by(id: user_id)
		if @current_sub == false 
			puts "_____________NO SUBSCRIPTION"
			user_balance = user.balance
		# lets extract the num_of_day from the package table using the package_id
			package = Package.find_by(id: package_id)
			package_price = package.amount
			@ref = rand(1e9...1e10).to_i
			num_of_day = package.duration
			package_name = package.name
			end_date = start_date + num_of_day
			puts "package_id: #{package_id}, user_id: #{user_id}, 
			start_date: #{start_date}, end_date: #{end_date}"
			if user_balance >= package_price
				@invoice = Invoice.new(
					amount: package_price, 
					is_paid: false,
					package_id: package_id,
					user_id: user_id
				)
				if @invoice.save
					@transaction = Transaction.new(
						amount: package_price,
						ref: @ref,
						invoice_id: @invoice.id
					)
					if @transaction.save
						@subscription = Subscription.new(
						    :end_date => end_date,
						    :name => @package_name,
						    :start_date => start_date,
						    :transaction_id => @transaction.id,
						    :user_id => user_id,
						    :expired => false
					    )
					    if @subscription.save 
					    	Invoice.update(@invoice.id, is_paid:true)
					   		current_balance = user_balance - package_price
					   		User.update(user_id, 
			    				balance: current_balance
			    			)
					     render json: { success: true, current_user_balance: current_balance}
					    else
					      render json: { success: false, message: "error occured from subscription" }
					    end
					else
						render json: { success: false, message: "error occured from transaction" }
					end
				else
					render json: { success: false, message: "error occured from invoice" }
				end
			else
				render json: {success: false, message: "your balance is not up to the package price"}
			end
		elsif @current_sub == 0
			user_balance = user.balance
			# lets extract the num_of_day from the package table using the package_id
			package = Package.find_by(id: package_id)
			package_price = package.amount
			@ref = rand(1e9...1e10).to_i
			num_of_day = package.duration
			package_name = package.name
			end_date = start_date + num_of_day + num_of_day
			puts "package_id: #{package_id}, user_id: #{user_id}, 
			start_date: #{start_date}, end_date: #{end_date}"
			if user_balance >= package_price
				@invoice = Invoice.new(
					amount: package_price, 
					is_paid: false,
					package_id: package_id,
					user_id: user_id
				)
				if @invoice.save
					@transaction = Transaction.new(
						amount: package_price,
						ref: @ref,
						invoice_id: @invoice.id
					)
					if @transaction.save
						@sub_id = use_user_id_to_get_sub_id(user_id)
						@subscription = Subscription.update(@sub_id,
						    end_date: end_date,
						    user_id: user_id,
						    name: @package_name,
						    start_date: start_date,
						    transaction_id: @transaction.id,					   
						    expired: false
					    )
					    if @subscription.save 
					    	Invoice.update(@invoice.id, is_paid:true)
					   		current_balance = user_balance - package_price
					   		User.update(user_id, 
			    				balance: current_balance
			    			)
					     render json: { success: true, current_user_balance: current_balance}
					    else
					      render json: { success: false, message: "error occured from subscription" }
					    end
					else
						render json: { success: false, message: "error occured from transaction" }
					end
				else
					render json: { success: false, message: "error occured from invoice" }
				end
			else
				render json: {success: false, message: "your balance is not up to the package price"}
			end
		elsif @current_sub > 0
			puts "_____________REMAINING DAYS#{@current_sub}"
			user_balance = user.balance
		# lets extract the num_of_day from the package table using the package_id
			package = Package.find_by(id: package_id)
			package_price = package.amount
			@ref = rand(1e9...1e10).to_i
			num_of_day = package.duration
			package_name = package.name
			end_date = start_date + num_of_day + @current_sub
			puts "package_id: #{package_id}, user_id: #{user_id}, 
			start_date: #{start_date}, end_date: #{end_date}"
			if user_balance >= package_price
				@invoice = Invoice.new(
					amount: package_price, 
					is_paid: false,
					package_id: package_id,
					user_id: user_id
				)
				if @invoice.save
					@transaction = Transaction.new(
						amount: package_price,
						ref: @ref,
						invoice_id: @invoice.id
					)
					if @transaction.save
						@sub_id = use_user_id_to_get_sub_id(user_id)
						@subscription = Subscription.update(@sub_id,
						    end_date: end_date,
						    user_id: user_id,
						    name: @package_name,
						    start_date: start_date,
						    transaction_id: @transaction.id,					   
						    expired: false
					    )
					    if @subscription.save 
					    	Invoice.update(@invoice.id, is_paid:true)
					   		current_balance = user_balance - package_price
					   		User.update(user_id, 
			    				balance: current_balance
			    			)
					     render json: { success: true, current_user_balance: current_balance}
					    else
					      render json: { success: false, message: "error occured from subscription" }
					    end
					else
						render json: { success: false, message: "error occured from transaction" }
					end
				else
					render json: { success: false, message: "error occured from invoice" }
				end
			else
				render json: {success: false, message: "your balance is not up to the package price"}
			end
		end 
		
# #  id             :bigint(8)        not null, primary key
#  end_date       :date
#  name           :string(255)
#  start_date     :date
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  transaction_id :bigint(8)
	end


	private


end

	