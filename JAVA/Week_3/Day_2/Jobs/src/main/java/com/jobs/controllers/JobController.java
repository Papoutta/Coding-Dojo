package com.jobs.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.jobs.models.Job;
import com.jobs.models.User;
import com.jobs.services.JobService;
import com.jobs.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class JobController {

	@Autowired
	JobService jobService;
	@Autowired
	UserService userService;
	
	@GetMapping("/create")
	public String createPage(@ModelAttribute("job")Job job,HttpSession session) {
		if(session.getAttribute("user_id")==null) {
			return "redirect:/logout";
		}
		return "createjsp";
	}
	
	@PostMapping("/create")
	public String createJob(@Valid @ModelAttribute("job")Job job ,BindingResult result,HttpSession session) {
		if(result.hasErrors()) {
			return "createjsp";
		}
		User user=userService.getById((Long)session.getAttribute("user_id"));
		job.setCreator(user);
		jobService.createJob(job);
		return "redirect:/home";
	}
	
	@GetMapping("/jobs/search")
	public String search(@RequestParam("query")String query,Model model) {
		List<Job> jobs=jobService.searchByTitle(query);
		model.addAttribute("jobs",jobs);
		return "home";
	}
	
	@GetMapping("/display/{id}")
	public String displayPage(@PathVariable("id")Long id,Model model,HttpSession session) {
		if(session.getAttribute("user_id")==null) {
			return "redirect:/logout";
		}
		model.addAttribute("job",jobService.findById(id));
		model.addAttribute("user",userService.getById((Long)session.getAttribute("user_id")));
		return "display";
		
	}
	
	@GetMapping("/add/{id}")
	public String addToFavorite(@PathVariable("id")Long id,HttpSession session) {
		if(session.getAttribute("user_id")==null) {
			return "redirect:/logout";
		}
		jobService.addToFavorites((Long)session.getAttribute("user_id"), id);
		return "redirect:/display/"+id;
	}
	
	@GetMapping("/remove/{id}")
	public String removeFromFavorite(@PathVariable("id")Long id,HttpSession session) {
		if(session.getAttribute("user_id")==null) {
			return "redirect:/logout";
		}
		jobService.removeFromFavorites((Long)session.getAttribute("user_id"), id);
		return "redirect:/display/"+id;
	}
	
	@GetMapping("/edit/{id}")
	public String EditPage(@PathVariable("id")Long id,Model model,HttpSession session) {
		Job job=jobService.findById(id);
		if(session.getAttribute("user_id")==null || !job.getCreator().getId().equals(session.getAttribute("user_id"))) {
			return "redirect:/logout";
		}
		model.addAttribute("job",job);
		return "edit";
	}
	
	@PutMapping("/edit/{id}")
	public String editJob(@Valid @ModelAttribute("job")Job job,BindingResult result,HttpSession session,@PathVariable("id")Long id) {
		if(result.hasErrors()) {
			return "edit";
		}
		User user=userService.getById((Long)session.getAttribute("user_id"));
		jobService.updateJob(job, id, user);
		return "redirect:/home";
	}
	
	@GetMapping("/delete/{id}")
	public String delete(@PathVariable("id")Long id) {
		jobService.DeleteJob(id);
		return "redirect:/home";
	}
	
}
