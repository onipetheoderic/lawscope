class Api::V1::RegistrationsController < Devise::RegistrationsController

respond_to :json
# email 
	def create
		user = User.new(user_params_signin)
		if user.save
		render :json=> user.as_json(:auth_token=>user.authentication_token, :email => user.email ), :status=>201
		return

		else

		warden.custom_failure!

		render :json => user.errors, :status=>422

		end

	end

	private

	def user_params_signin

	params.permit(:email,:password,:password_confirmation, :first_name, :last_name)

	end

end