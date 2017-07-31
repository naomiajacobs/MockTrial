require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  describe "GET #show" do
    before do
      @user = User.create(
        username: 'boop',
        email: 'boop@boop.com',
        password: 'foobarbaz',
        password_confirmation: 'foobarbaz'
      )
    end

    it "returns http success" do
      get :show, params: { id: @user.id }
      expect(response).to have_http_status(:success)
    end
  end

end
