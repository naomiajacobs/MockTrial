class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include SessionsHelper

  def new
    render 'layouts/application.html.erb'
  end
end
