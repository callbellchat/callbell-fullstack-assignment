class Card < ApplicationRecord
  validates :name, presence: true
  validates :desc, presence: true
  validates :idList, presence: true
  validates :due, presence: false
end

