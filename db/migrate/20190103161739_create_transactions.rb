class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.belongs_to :invoice, foreign_key: true
      t.string :ref
      t.float :amount

      t.timestamps
    end
    add_index :transactions, :ref, unique: true
  end
end
