package com.devices;

public class DeviceTest {

	public static void main(String[] args) {
		
		Phone phone= new Phone();
		phone.displayBattery();
		phone.makeCall();
		phone.makeCall();
		phone.makeCall();
		phone.playingGame();
		phone.playingGame();
		phone.charging();
		phone.displayBattery();
	}
}