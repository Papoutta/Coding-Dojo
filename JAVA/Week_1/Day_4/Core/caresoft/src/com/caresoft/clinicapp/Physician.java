package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;

public class Physician extends User implements HIPAACompliantUser {
	private ArrayList<String> patientNotes;
	
	// TO DO: Constructor that takes an IDcopy
	public Physician(Integer id) {
		super();
		this.setId(id);
		this.patientNotes = new ArrayList<String>();
	}
    // TO DO: Implement HIPAACompliantUser!
	@Override
	public boolean assignPin(int pin) {
		if(999<pin && pin<10000) {
			return true;
		}else {
			return false;
		}
	}
	
	public boolean accessAuthorized(Integer confirmedAuthID) {
    	if(confirmedAuthID==this.getId() ) {
			return true;
		}else {
			return false;
		}
    }
	
	public void newPatientNotes(String notes, String patientName, Date date) {
        String report = String.format(
            "Datetime Submitted: %s \n", date);
        report += String.format("Reported By ID: %s\n", this.id);
        report += String.format("Patient Name: %s\n", patientName);
        report += String.format("Notes: %s \n", notes);
        this.patientNotes.add(report);
    }


	
    // TO DO: Setters & Getters
	
}
