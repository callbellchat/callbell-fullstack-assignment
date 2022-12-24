class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string :remote_trello_card_id
      t.string :name
      t.string :list_id
      t.text :desc
      t.string :due

      t.timestamps
    end
  end
end
