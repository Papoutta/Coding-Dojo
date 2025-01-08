package com.devices;

public class Phone extends Device {

	public Phone() {
		super();
	}
	public void makeCall() {
		this.setBattery((getBattery()-5));
		System.out.println("You're calling \n Battery level after your call is: %"+this.getBattery()+"\n");		
	}
	public void playingGame() {
		this.setBattery((getBattery()-20));
		System.out.println("You play a game \n Battery level after playing is: %"+this.getBattery()+"\n");		
	}
	public void charging() {
		this.setBattery((getBattery()+50));
		System.out.println("Charging... \n Battery level after charging is: %"+this.getBattery()+"\n");		
	}
}