package com.bookclub.controllers;

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

import com.bookclub.models.Book;
import com.bookclub.models.User;
import com.bookclub.services.BookService;
import com.bookclub.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class BookController {
	@Autowired
	BookService bookServ;
	@Autowired
	UserService userServ;
	
	@GetMapping("/books")
	public String home(Model m, HttpSession session) {
		// Get id
   	 	Long userId = (Long) session.getAttribute("user_id");
   	 	if(userId == null) {
			return "redirect:/";
		}
   	 	User user = userServ.findUserById(userId);
		List<Book> allBooks = bookServ.allBooks();
		m.addAttribute("allBooks",allBooks);
		m.addAttribute("user",user);
      return "home";
   	 	
	}
	
	//Get Add new book page
	@GetMapping("/books/new")
	public String newBook(@ModelAttribute("book") Book book, HttpSession session) {
		Long userId = (Long) session.getAttribute("user_id");
		if(userId == null) {
  			return "redirect:/";
  		}
    	 return "NewBook";
	}
	
	//Post add new book
	@PostMapping("/addBook")
	public String addBook(@Valid @ModelAttribute("book") Book book, BindingResult result, HttpSession session) {
		Long userId = (Long) session.getAttribute("user_id");
		if(userId == null) {
  			return "redirect:/";
  		}
		if (result.hasErrors()) {
			return "NewBook";
		}
		else {
	   	 	User user = userServ.findUserById(userId);
	   	 	book.setUser(user);
	   	 	bookServ.createBook(book);
			return "redirect:/books";
		}
	}
	
	//Get One book
	@GetMapping("/books/{id}")
	public String oneBook(Model model, @PathVariable("id") Long id,HttpSession session) {
   	 Long userId = (Long) session.getAttribute("user_id");
 		if(userId == null) {
 			return "redirect:/";
 		}
   	 User user = userServ.findUserById(userId);
		model.addAttribute("user",user);
   	 Book selectedBook=bookServ.findBook(id);
   	 model.addAttribute("book",selectedBook);
   	 return "OneBook";
    }
	
	@DeleteMapping("/delete/{id}")
		public String deleteBook(@PathVariable("id") Long id,HttpSession session) {
	 Long userId = (Long) session.getAttribute("user_id");
		if(userId == null) {
			return "redirect:/";
		}
		bookServ.deleteBook(id);
		return "redirect:/books";
	}

	@GetMapping("/books/{id}/edit")
	public String getMethodName(Model model, @PathVariable("id") Long id,HttpSession session) {
	 Long userId = (Long) session.getAttribute("user_id");
		if(userId == null) {
			return "redirect:/";
		}
	
		Book selected = bookServ.findBook(id);
		model.addAttribute("book",selected);
		return "EditBook";
	}
	
	@PutMapping("/editBook/{id}")
	public String editExp(@Valid @ModelAttribute("book") Book book, BindingResult result,HttpSession s) {
		Long userId = (Long) s.getAttribute("user_id");
	  		if(userId == null) {
	  			return "redirect:/";
	  		}
			
		if(result.hasErrors()) {
			return "EditBook";
		}else {
			
			// grab the user by their id
			User user = userServ.findUserById(userId);
			book.setUser(user);
			bookServ.createBook(book);
		
			return "redirect:/books";
		}
	}
	
	
	
	
	
}
