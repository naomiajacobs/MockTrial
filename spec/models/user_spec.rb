require 'rails_helper'

RSpec.describe User, type: :model do
  it 'is a valid model' do
    user = User.new(username: 'naomiajacobs', email: 'naomiajacobs@gmail.com')
    expect(user).to be_valid
  end
end
