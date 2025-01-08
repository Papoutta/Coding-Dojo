package com.devices;

public class Device {
	private int battery;
	
	public Device() {
		this.battery=100;
	};
	
	public Device(int battery) {
		this.battery = battery;
	};
	
	public void displayBattery() {
		System.out.println("The battery level is at %s" + this.battery );
	}

	public int getBattery() {
		return battery;
	}

	public void setBattery(int battery) {
		this.battery = battery;
	}
	
}
