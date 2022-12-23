class Api::V1::CardsController < ApplicationController
  # TODO: Fill the controller actions for the API

  def index
    @cards = Card.all
    @board = Trello::Board.find(ENV['TRELLO_BOARD_ID'])
  end

  def new
    @card = Card.new
  end

  def create
    @card = Card.new(card_params)
    trello_card = Trello::Card.create(name: card_params[:name], desc: card_params[:desc], list_id: card_params[:idList])

    if @card.save
      render json: @card, status: 201
    else
      render json: { error: 'check attributes again', status: 400 }, status: 400
    end
  end

  private

  def card_params
    params.require(:card).permit(:name, :desc, :idList)
  end
end
