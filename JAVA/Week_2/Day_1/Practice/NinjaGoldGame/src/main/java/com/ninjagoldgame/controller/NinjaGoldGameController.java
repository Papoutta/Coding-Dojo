package com.ninjagoldgame.controller;

import java.util.Random;
import java.util.ArrayList;
import java.util.Date;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import jakarta.servlet.http.HttpSession;

@Controller
public class NinjaGoldGameController {
		@GetMapping("/")
		public String index(HttpSession session) {		
		    	// If the count is not already in session
				if (session.getAttribute("count") == null) {
					session.setAttribute("count", 0);
				}
			return "Form.jsp";
		}
		
		@SuppressWarnings("unchecked")
		@PostMapping("/process")
		public String processForm(@RequestParam("typeE") String typeE,HttpSession session,
				RedirectAttributes flash) {
			Random random= new Random();
			int farm=random.nextInt(10, 21);
			int cave=random.nextInt(5, 11);
			int house=random.nextInt(2, 6);
			int quest=random.nextInt(-50, 51);
			int spa=random.nextInt(-20,-5);
			
			ArrayList<String> earns = (ArrayList<String>) session.getAttribute("earns");
			if (earns == null) {
		        earns = new ArrayList<>();
		    }
			ArrayList<String> losses = (ArrayList<String>) session.getAttribute("losses");		    
			    if (losses == null) {
			        losses = new ArrayList<>();
			    }
			Date date = new Date();
			
			if ("farm".equals(typeE) ) {
				session.setAttribute("count",(int)session.getAttribute("count")+farm);
				String messageF="You entered a farm and earned "+farm+" gold.("+date.toString()+")";
				earns.add(messageF);
			}
			if ("house".equals(typeE) ) {
				session.setAttribute("count",(int)session.getAttribute("count")+house);
				String messageF="You entered a house and earned "+house+" gold.("+date.toString()+")";
				earns.add(messageF);
			}
			if ("quest".equals(typeE) ) {
				session.setAttribute("count",(int)session.getAttribute("count")+quest);
				if (quest<0) {
					String messageF="You failed a quest and lost "+quest+" gold.Ouch("+date.toString()+")";
					losses.add(messageF);
				}
				if (quest>0) {
					String messageF="You completed a QUEST and earned "+quest+" gold.("+date.toString()+")";
					earns.add(messageF);
				}
			}
			if ("cave".equals(typeE) ) {
				session.setAttribute("count",(int)session.getAttribute("count")+cave);
				String messageF="You entered a cave and earned "+cave+" gold.("+date.toString()+")";
				earns.add(messageF);
			}
			if ("spa".equals(typeE) ) {
				session.setAttribute("count",(int)session.getAttribute("count")+spa);
				String messageF="You entered a spa "+spa+" gold.("+date.toString()+")";
				losses.add(messageF);
			}
			session.setAttribute("earns",earns);
			session.setAttribute("losses",losses);
			if ("reset".equals(typeE) ) {
				session.invalidate();
			}
			return "redirect:/";
		}
		
}
