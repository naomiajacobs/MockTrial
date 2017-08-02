class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include SessionsHelper

  before_action :set_logged_in, :require_login
  skip_before_action :require_login, only: [:new, :create]

  def new
  end

  private

  def set_logged_in
    @logged_in = logged_in?
  end

  def require_login
    redirect_to root_url unless logged_in?
  end
end
