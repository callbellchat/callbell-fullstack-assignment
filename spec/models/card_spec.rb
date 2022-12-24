require 'rails_helper'

RSpec.describe Card, type: :model do
  subject do
    Card.new(name: 'any name',
             list_id: '321',
             remote_trello_card_id: '123')
  end
  before { subject.save }

  it 'is valid with valid attributes' do
    expect(subject).to be_valid
  end

  it 'is not valid without a name' do
    subject.name = nil
    expect(subject).to_not be_valid
  end

  it 'is not valid without a list_id' do
    subject.list_id = nil
    expect(subject).to_not be_valid
  end

  it 'is not valid without a remote_trello_card_id' do
    subject.remote_trello_card_id = nil
    expect(subject).to_not be_valid
  end
end
