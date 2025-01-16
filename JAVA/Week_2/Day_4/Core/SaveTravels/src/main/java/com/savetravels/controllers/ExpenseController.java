package com.savetravels.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.savetravels.models.Expense;
import com.savetravels.services.ExpenseService;

import jakarta.validation.Valid;

@Controller
public class ExpenseController {
	@Autowired
	private ExpenseService ExpServ;
	
	@GetMapping("expenses")
	public String getAllExpenses(@ModelAttribute("expense") Expense expense, Model model) {
		List<Expense> allExpenses = ExpServ.allExpenses();
		model.addAttribute("allExpenses", allExpenses);
		return "home.jsp";
	}
	
	@PostMapping("/addExpense")
	public String createExpense(@Valid @ModelAttribute("expense")Expense expense, BindingResult result, Model model) {
		if (result.hasErrors()) {
			List<Expense> allExpenses = ExpServ.allExpenses();
			model.addAttribute("allExpenses", allExpenses);
			return "home.jsp";
		}
		ExpServ.createExpense(expense);
		return "redirect:/expenses";
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteExp(@PathVariable("id") Long id) {
		ExpServ.deleteExp(id);
		return "redirect:/expenses";
	}
	
	@GetMapping("/edit/{id}")
	public String getEdit(Model model, @PathVariable("id") Long id) {
		Expense selectedExp = ExpServ.findExpById(id);
		model.addAttribute("expense",selectedExp);
		return "edit.jsp";
	}
	
	@PutMapping("/update/{id}")
	public String editExp(@Valid @ModelAttribute("expense")Expense expense, BindingResult result) {
		if (result.hasErrors()) {
			return "edit.jsp";
		}
		ExpServ.updateExpById(expense);
		return "redirect:/expenses";
	}
	
	@GetMapping("/expense/{id}")
	public String getExp(Model model, @PathVariable("id") Long id) {
		Expense ExpOne = ExpServ.findExpById(id);
		model.addAttribute("expense", ExpOne);
		return "show.jsp";
	}
	
	
	
	
	
	
}
