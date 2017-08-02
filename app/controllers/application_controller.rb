class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include SessionsHelper

  before_action :set_logged_in

  def new
  end

  private

  def set_logged_in
    @logged_in = logged_in?
  end

end
