class SplashController < ApplicationController
  def index
  end
  
  def subscribe
  	list_id = "78e96e223e"
  	gibbon = Gibbon::Request.new()
  	lower_case_md5_hashed_email_address = Digest::MD5.hexdigest(params[:email])
  	
  	respond_to do |format|
	  	begin
			  gibbon.lists(list_id).members(lower_case_md5_hashed_email_address).upsert(body: {email_address: params[:email], status: "subscribed"})
			  format.js
			rescue Gibbon::MailChimpError => e
			  @js_email_error =  "#{e.message}"
			  format.js
			end
		end
		# respond_to do |format|
		# 	format.js
		# end
	
  end
end
