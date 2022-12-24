class Card < ApplicationRecord
  validates :remote_trello_card_id, presence: true
  validates :name, presence: true
  validates :list_id, presence: true
  validates :desc, presence: false
  validates :due, presence: false
end
