class Card < ApplicationRecord
  validates :idTrelloCard, presence: true
  validates :name, presence: true
  validates :idList, presence: true
  validates :desc, presence: false
  validates :due, presence: false
end
