class CreateAnswers < ActiveRecord::Migration[5.1]
  def change
    create_table :answers do |t|
      t.string :user_id
      t.string :event_id
      t.string :expression

      t.timestamps
    end
  end
end
