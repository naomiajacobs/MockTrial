require 'rails_helper'

RSpec.describe SessionsController, type: :controller do

  describe "should get new" do
    it "returns http success" do
      get :new
      expect(response).to have_http_status(:success)
    end
  end
end
