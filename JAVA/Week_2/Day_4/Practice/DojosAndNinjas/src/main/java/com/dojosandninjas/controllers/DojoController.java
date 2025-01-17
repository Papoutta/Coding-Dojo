package com.dojosandninjas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.dojosandninjas.models.Dojo;
import com.dojosandninjas.services.DojoService;

@Controller
public class DojoController {
	@Autowired
	DojoService DojoServ;
	
	@GetMapping("/dojos/new")
	public String newDojo(@ModelAttribute("dojo") Dojo dojo) {
		return "dojo.jsp";
	}
	
	@PostMapping("/create/dojo")
	public String createDojo(@ModelAttribute("dojo") Dojo dojo, BindingResult result) {
		if (result.hasErrors()) {
			return "dojo.jsp";
		}
		DojoServ.createDojo(dojo);
		return "redirect:/new";
	}
	
	@GetMapping("/dojo")
	public String getDojo(@PathVariable Long id,Model model) {
		model.addAttribute("dojo", model);
		return "show.jsp";
	}
	
	@GetMapping("/dojo/{id}")
	public String ninjaByDojo(@PathVariable Long id,Model model) {
		Dojo saved = DojoServ.findDojoById(id);
		System.out.println(saved);
		model.addAttribute("dojo", saved);
		return "show.jsp";
	}
}
