package com.booksapi.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.booksapi.models.BooksModel;
import com.booksapi.services.BooksService;

@RestController
public class BooksAPIController {
	private final BooksService bookService;
	public BooksAPIController(BooksService bookService){
        this.bookService = bookService;
    }
	
	@GetMapping("/api/books")
    public List<BooksModel> index() {
        return bookService.allBooks();
    }
    
    @PostMapping("/api/books")
    public BooksModel create(@RequestParam(value="title") String title, @RequestParam(value="description") String desc, @RequestParam(value="language") String lang, @RequestParam(value="numberOfPages") Integer numOfPages) {
    	BooksModel book = new BooksModel(title, desc, lang, numOfPages);
        return bookService.createBook(book);
    }
	
    @PutMapping("/api/books/{id}")
    public BooksModel update(
    		@PathVariable("id") Long id, 
    		@RequestParam(value="title") String title, 
    		@RequestParam(value="description") String desc, 
    		@RequestParam(value="language") String lang,
    		@RequestParam(value="numberOfPages") Integer numOfPages) {
    	BooksModel book = bookService.updateBook(id, title, desc, lang, numOfPages);
        return book;
    }
    @DeleteMapping("api/books/{id}")
    public void destroy(@PathVariable("id") Long id) {
        bookService.deleteBook(id);
    }
}