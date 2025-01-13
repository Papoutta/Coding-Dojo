package com.counter.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.HttpSession;

@Controller
public class CounterController {
		@GetMapping("/")
		public String index(HttpSession session) {
			if (session.getAttribute("count") == null) {
				session.setAttribute("count", 0);
				}
				else {
					session.setAttribute("count",(int)session.getAttribute("count")+1 );
				}
			return "index.jsp";
		}
		
		@GetMapping("/counter")
		public String counter() {
			return "counter.jsp";
		}
		
		@GetMapping("/counterTwo")
		public String counterTwo(HttpSession session) {
			if (session.getAttribute("count") == null) {
				session.setAttribute("count", 0);
				}
				else {
					session.setAttribute("count",(int)session.getAttribute("count")+2 );
				}
			return "counterTwo.jsp";
		}
		@GetMapping("/clear")
		public String clear(HttpSession session) {
			session.removeAttribute("count");
			return "redirect:/";		
			}
		
}
