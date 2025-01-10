package com.dakichipathvariables.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DaikichiController {
	@RequestMapping("/daikishi")
	public String home() {
		return "<h1>Welcome!</h1>";
	}
	@RequestMapping("/daikishi/today")
	public String today() {
		return "<h1>Today you will find luck in all your endeavors!</h1>";
	}
	@RequestMapping("/daikishi/tomorrow")
	public String tomorrow() {
		return "<h1>Tomorrow, an opportunity will arise, so be sure to be open to new ideas!</h1>";
	}
	
	@RequestMapping("/daikishi/travel/{city}")
	public String travel(@PathVariable("city") String city) {
		return "Congratulations! You will soon travel to : "+ city;
	}
	
	@RequestMapping("/daikishi/lotto/{num}")
	public String lotto(@PathVariable("num") int num) {
		if(num%2==0) {
			
		return "You will take a grand journey in the near future, but be wary of tempting offers";
		}else {
			return "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends";
		}
	}
	
}
