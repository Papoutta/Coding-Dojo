package com.zookeeper;

public class Mammal {
	private int energy = 100;
	
    public  Mammal(){}

	public Mammal(int energy) {
		this.energy = energy;
	}

	public int getEnergy() {
		return energy;
	}

	public void setEnergy(int energy) {
		this.energy = energy;
	}
	
	public void displayEnergy() {
		System.out.println("Energy : " + this.energy);
	}
}
