class Pet:
    def __init__(self, name, type, tricks):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.energy = 50 
        self.health = 50  

    def sleep(self):
        self.energy += 25
        print(f"{self.name} is sleeping and its energy increased to {self.energy}.")

    def eat(self):
        self.energy += 5
        self.health += 10
        print(f"{self.name} is eating. Energy: {self.energy}, Health: {self.health}.")

    def play(self):
        self.health += 5
        print(f"{self.name} is playing and its health increased to {self.health}.")

    def noise(self):
        print(f"{self.name} makes a sound!")
