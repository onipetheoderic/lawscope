class CreateInvoices < ActiveRecord::Migration[5.2]
  def change
    create_table :invoices do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :package, foreign_key: true
      t.boolean :is_paid
      t.float :amount

      t.timestamps
    end
  end
end
