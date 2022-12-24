require 'rails_helper'

RSpec.describe Api::V1::CardsController, type: :controller do
  describe 'GET /index' do
    before(:each) do
      get :index
    end

    it 'returns a list of cards' do
      expect(response).to have_http_status(:ok)
    end

    it 'responds with a valid content type' do
      expect(response.content_type).to include('application/json')
    end

    it 'returns an empty list of card' do
      expect(JSON.parse(response.body)).to eq([])
    end
  end

  describe 'POST /create' do
    it 'creates new card' do
      params = {
        remote_trello_card_id: '123fdsaf31',
        name: 'test name',
        desc: 'test desc',
        due: '',
        list_id: '1'
      }
      post :create, params: { card: params }
      expect(response).to have_http_status(:created)
    end
    it 'returns error when param is null' do
      params = {
        name: nil
      }
      post :create, params: { card: params }
      expect(response).to have_http_status(400)
    end
  end
end
