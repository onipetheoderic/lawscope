class Api::V1::SessionsController < Devise::SessionsController

prepend_before_action :require_no_authentication, :only => [:create]
before_action :ensure_params_exist, only: :create
before_action :get_user_id_from_header, :only =>[:update, :show_user, :create_profile, :show_user_documents]
# before_action :user_params_signin, only: :create

respond_to :json

# def encode(payload, exp = 2.hours.from_now)
#       # set token expiration time 
#       payload[:exp] = exp.to_i
      
#        # this encodes the user data(payload) with our secret key
#       JWT.encode(payload, Rails.application.secrets.secret_key_base)
# end
class JsonWebToken
  def self.encode(payload, expiration)
    payload[:exp] = expiration
    JWT.encode(payload, ENV['RAILS_SECRET'])
  end

  def self.decode(token)
    return JWT.decode(token, ENV['RAILS_SECRET'])
  rescue
    'FAILED'
  end
end
# Login method

def check_email
  @user_email = User.find_by(:email => params[:email])
  # render json: {user: @user_email}render json: {user: @user_email}
  if @user_email
    render :json => @user_email, :status=>200
  else
    render :json => @user_email, :status=>500
  end
end


def create
  @user = User.find_by(:email => params[:email])
  @user_password = params[:password]
  if @user
    @user_id = @user.id
    @token = JsonWebToken.encode({ :user_id => @user.id }, Time.now.to_i + 1200000)
    puts JsonWebToken.decode(@token)
 #puts(@user.valid_password?(params[:password]) ) 
    #puts "the password is false " << String(@user_password)
    if @user.valid_password?(params[:password]) != false
      response.headers['Authentication_token'] = @token
      render json: {success: true, user: @user}
    else
      render json: {success: false, error: "password dont match with the Email"}
    end
  else
    render json: {success: false, error: "Email not found in the database"}
  end
end

def show_user_documents
  @documents = Document.where(:user_id => @user_id)
  puts @documents.to_json
  render json: {documents: @documents}
end


def create_profile
    @random = SecureRandom.hex(14)
    @user_id =  @user_id
    @document_name = params[:name]
    uploaded_io = params[:resume]   
    @file_name = @random+uploaded_io.original_filename
    puts "document instance" << String(@document_name)
        puts " this is d file name from the server" << String(@file_name)
        puts @user_id
    File.open(Rails.root.join('public', 'uploads', @file_name), 'wb') do |file|
    file.write(uploaded_io.read)
    @document = Document.new(
      :user_id => @user_id,
      :name => @document_name,
      :image => @file_name,
      :cover_letter => @document_cover_letter,

      )

    if @document.save 
     render json: { success: true}
    else
      render json: { success: false}
    end
  end
end

def update
  @user = user.find_by(:id => @user_id)
  @first_name = params[:first_name]
  @last_name = params[:last_name]
  @phone = params[:phone]
  
  # puts @user.to_json
  if User.update(@user_id, 
    first_name: @first_name,
    last_name: @last_name,
    phone: @phone
    )
  render json: { success: true}
else
  render json: {success: false}
end
  # puts "#{@first_name} #{@last_name} "
end



def show_user
  @user = user.find_by(:id => @user_id)
  render json: @user
end
#Every request must have a token header
#This is a method to confirm if a user is logged In or not
def confirmlogin
  @header = request.headers['Authorization']
  puts "authorisation header " << String(@header)
  @token =  JsonWebToken.decode(@header)
 puts @token
  @user_id = @token[0].values.first.to_i
  puts @user_id
  render json: @token
end

def get_user_details_from_token
  @header = request.headers['Authorization']
  puts "authorisation header " << String(@header)
  @token =  JsonWebToken.decode(@header)
  @user_id = @token[0].values.first.to_i
  @user = User.find_by(:id => @user_id)
  puts @user
  render json: @user
end

def load_account_balance_through_auth_token
  @user_id = params[:id].to_i
  @balance = params[:balance]
  @user = User.find_by(id: @user_id)
  # puts @user.to_json
  
  if @user.balance.nil?
    @previous_balance = 0
  else
    @previous_balance = @user.balance
  end
  @current_balance = @previous_balance.to_f + @balance.to_f
  puts @current_balance
  if User.update(@user_id, 
    balance: @current_balance
    )
  render json: { success: true}
else
  render json: {success: false}
end


end


def destroy
  sign_out(resource_name)
end

protected
  def ensure_params_exist
    if params[:email].blank? || params[:password].blank?
      render json: {:success => false, :message => "missing login credentials"}
    end
  end
  def user_params_signin
    params.permit(:email,:password)
  end

  def invalid_login_attempt
    warden.custom_failure!
      render json: {:success => false, :message => "Error with your login or password"
      }, :status => 401
  end
  def get_user_id_from_header
    @header = request.headers['Authorization']
    puts "authorisation header " << String(@header)
    @token =  JsonWebToken.decode(@header)
   # puts @token[0].values.first
    @user_id = @token[0].values.first.to_i
    # puts @user_id
  end
end