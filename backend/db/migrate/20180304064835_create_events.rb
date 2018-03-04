class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :user_id
      t.string :title
      t.integer :top_limit
      t.integer :under_limit
      t.string :place
      t.string :detail
      t.date :date
      t.date :anser_limit

      t.timestamps
    end
  end
end
