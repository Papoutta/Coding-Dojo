package com.dakishiroutes.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HumanController {
		@RequestMapping("/")
		public String home(@RequestParam(value="firstName",required=false) String firstName,@RequestParam(value="lastName",required=false) String lastName) {
			String msg = String.format("Hello %s %s", firstName,lastName);

			if(firstName==null) {
				return "Hello Human";
			}
		
			return msg;
		}
		
}
