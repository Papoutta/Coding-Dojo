package com.booksapi.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.booksapi.models.BooksModel;
import com.booksapi.services.BooksService;

@Controller
public class BookController {
	private final BooksService bookService;
	public BookController(BooksService bookService){
        this.bookService = bookService;
    }
	
	@GetMapping("/books")
    public List<BooksModel> index() {
        return bookService.allBooks();
    }
    
    @PostMapping(value="/books")
    public BooksModel create(
    		@PathVariable("id") Long id,
    		@RequestParam(value="title") String title, 
    		@RequestParam(value="description") String desc, 
    		@RequestParam(value="language") String lang, 
    		@RequestParam(value="numberOfPages") Integer numOfPages) {
    	BooksModel book = new BooksModel(title, desc, lang, numOfPages);
        return bookService.createBook(book);
    }
	
    @PutMapping(value="/books/{id}")
    public BooksModel update(
    		@PathVariable("id") Long id, 
    		@RequestParam(value="title") String title, 
    		@RequestParam(value="description") String desc, 
    		@RequestParam(value="language") String lang,
    		@RequestParam(value="numberOfPages") Integer numOfPages) {
    	BooksModel book = bookService.updateBook(id, title, desc, lang, numOfPages);
        return book;
    }
    @DeleteMapping("/books/{id}")
    public void destroy(@PathVariable("id") Long id) {
        bookService.deleteBook(id);
    }
    
    @RequestMapping("/api/books/{id}")
    public BooksModel show(@PathVariable("id") Long id) {
        BooksModel book = bookService.findBook(id);
        return book;
    }
    
    @GetMapping("/book/{id}")
	public String findOneBookById(@PathVariable("id") Long id, Model model) {
    	BooksModel selectedBook = bookService.findBook(id);
		model.addAttribute("book",selectedBook);
		return "View.jsp";
	}
}