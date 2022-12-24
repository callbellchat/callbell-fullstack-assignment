class Api::V1::CardsController < ApplicationController
  def index
    @cards = Card.order('created_at DESC').all
    render json: @cards, status: 200
  end

  def new
    @card = Card.new
  end

  def get_list_id
    board = Trello::Board.find(ENV['TRELLO_BOARD_ID'])

    list = board.lists[0]
    list.id
  end

  def create
    trello_card = Trello::Card.create(name: card_params[:name], desc: card_params[:desc], due: card_params[:due],
                                      idList: get_list_id)

    @card = Card.new(remote_trello_card_id: trello_card.id, name: card_params[:name], desc: card_params[:desc],
                     due: card_params[:due], list_id: get_list_id)
    if @card.save
      render json: @card, status: :created
    else
      render json: { error: 'check params again', status: 400 }, status: 400
    end
  end

  private

  def card_params
    params.require(:card).permit(:name, :desc, :due)
  end
end
