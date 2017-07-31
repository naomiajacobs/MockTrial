class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include SessionsHelper

  def new
    @logged_in = logged_in?
    render 'layouts/application.html.erb'
  end
end
