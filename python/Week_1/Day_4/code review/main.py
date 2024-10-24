from cars import Car
from motorcycles import Motorcycle
from vehicles import Vehicle

vehicle_instance = Vehicle("BMW" , "M5", 2000)
car_instance = Car(vehicle_instance.make, vehicle_instance.model, vehicle_instance.year,2)
moto_instance = Motorcycle("Yamaha", "r1", 2004, "sport")
vehicle_instance.display_info()
print("*"*70)
car_instance.display_info()
print("*"*70)
moto_instance.display_info()
print("*"*70)