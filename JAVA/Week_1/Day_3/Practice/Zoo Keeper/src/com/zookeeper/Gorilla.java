package com.zookeeper;

public class Gorilla extends Mammal{

	public Gorilla() {
		super();
	}
	
	public void throwSomething() {
		this.setEnergy(getEnergy()-5);
		System.out.println("The gorilla has thrown something");
	}
	
	public void eatBananas() {
		this.setEnergy(getEnergy()+10);
		System.out.println("The gorilla ate a banana, he is happy");
	}
	
	public void climb() {
		this.setEnergy(getEnergy()-10);
		System.out.println("The gorilla has climbed a tree");
	}
}
