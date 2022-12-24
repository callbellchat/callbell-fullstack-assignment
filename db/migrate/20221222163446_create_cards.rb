class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string :idTrelloCard
      t.string :name
      t.string :idList
      t.text :desc
      t.string :due

      t.timestamps
    end
  end
end
