class CreateRegions1 < ActiveRecord::Migration
  def change
    create_table :regions do |t|
      t.string :name
      t.references :sighting, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
