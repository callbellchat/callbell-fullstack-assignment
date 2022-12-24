class Api::V1::WebhooksController < ApplicationController
  def get_list_id
    board = Trello::Board.find(ENV['TRELLO_BOARD_ID'])

    list = board.lists[0]
    list.id
  end

  def show
    render status: 200
  end

  def create
    raw_post = request.raw_post
    data_parsed = JSON.parse(raw_post)
    event = data_parsed['action']['type']
    parsedCard = data_parsed['action']['data']['card']
    case event
    when 'createCard'
      card = Card.new(idTrelloCard: parsedCard['id'], name: parsedCard['name'], idList: get_list_id)
      if card.save
        render json: @card, status: 201
      else
        render json: { error: 'check attributes again', status: 400 }, status: 400
      end

    when 'updateCard'
      card = Card.find_by(idTrelloCard: parsedCard['id'])
      card['name'] = parsedCard['name']
      card['desc'] = parsedCard['desc'] if parsedCard['desc']
      card['due'] = parsedCard['due'] if parsedCard['due']

      if card.save
        render json: @card, status: 200
      else
        render json: { error: 'check attributes again', status: 400 }, status: 400
      end

    when 'deleteCard'
      card = Card.find_by(idTrelloCard: parsedCard['id'])
      card.destroy
    else
      p 'uhandled event'
    end
  end
end
