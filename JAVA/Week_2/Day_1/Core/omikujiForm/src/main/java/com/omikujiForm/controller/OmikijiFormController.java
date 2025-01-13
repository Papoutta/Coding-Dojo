package com.omikujiForm.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;

@Controller
public class OmikijiFormController {
	@GetMapping("/omikuji")
	public String index() {
		return "Form.jsp";
	}
	@PostMapping("/submit")
	public String processForm(@RequestParam("numberYear") int numberYear,
							@RequestParam("city") String city,
							@RequestParam("person")String person,
							@RequestParam("hobby") String hobby,
							@RequestParam("thing") String thing,
							@RequestParam("nice") String nice,
							HttpSession session) {
		
		// put all the input values in session
		session.setAttribute("keyYear", numberYear);
		session.setAttribute("keyCity", city);
		session.setAttribute("keyHobby", hobby);
		session.setAttribute("keyPerson", person);
		session.setAttribute("keyNice", nice);
		session.setAttribute("keyThing", thing);
		return "redirect:/omikuji/show";
	}
	
	@GetMapping("/omikuji/show")
	public String result() {
		
		return "Display.jsp";
	}
}