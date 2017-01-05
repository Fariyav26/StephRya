require 'rails_helper'

RSpec.describe Animal, type: :model do
  describe "Animal" do
    it "has to be real" do
      expect{Animal.new}.to_not raise_error
    end
    it "has a common name, latin name, and kingdom" do
      my_animal = Animal.new common_name: "lion", latin_name: "latinlion", kingdom: "mammal"
      expect(my_animal.common_name).to be_a String
      expect(my_animal.latin_name).to be_a String
      expect(my_animal.kingdom).to be_a String
    end
  end
end
