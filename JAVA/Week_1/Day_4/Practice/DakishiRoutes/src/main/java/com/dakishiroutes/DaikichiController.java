package com.dakishiroutes;

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
	
	
}