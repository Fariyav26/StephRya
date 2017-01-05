class Region < ActiveRecord::Base
  has_many :sightings

  validates :name, presence: true
  validates :common_name, length: { minimum: 1 }
end
