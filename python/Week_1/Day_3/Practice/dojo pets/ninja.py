from pets import Pet

class Ninja:
    def __init__(self, first_name, last_name, pet, treats, pet_food ):
        self.first_name = first_name
        self.last_name = last_name
        self.treats = treats
        self.pet_food = pet_food
        self.pet = pet

    def walk(self):
        print(f"{self.first_name} is walking {self.pet.name}")
        self.pet.play()
        print("")

    def feed(self):
        print(f"{self.first_name} is feeding {self.pet.name}")
        self.pet.eat()
        print("")

    def bathe(self):
        print(f"{self.first_name} is bathing {self.pet.name}")
        self.pet.noise()
        print("")

my_pet = Pet(name="Loki", type="dog", tricks=["sit", "roll over"])
ninja = Ninja(first_name="Farouk", last_name="Ghezal", treats="bones", pet_food="dog food", pet=my_pet)

ninja.feed()
ninja.walk()
ninja.bathe()

