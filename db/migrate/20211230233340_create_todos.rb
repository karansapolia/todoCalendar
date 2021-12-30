class CreateTodos < ActiveRecord::Migration[7.0]
  def change
    create_table :todos do |t|
      t.string :title
      t.text :description
      t.boolean :status
      t.integer :frequency

      t.timestamps
    end
  end
end
