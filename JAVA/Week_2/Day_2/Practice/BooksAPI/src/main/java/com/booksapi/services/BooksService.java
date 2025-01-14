package com.booksapi.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.booksapi.models.BooksModel;
import com.booksapi.repositories.BooksRepository;

@Service
public class BooksService {
	@Autowired
	BooksRepository bookRepo;
	
	// returns all the books
    public List<BooksModel> allBooks() {
        return bookRepo.findAll();
    }
    // creates a book
    public BooksModel createBook(BooksModel book) {
        return bookRepo.save(book);
    }
    
	// update a book
    public BooksModel updateBook(Long id,String title,String desc,String lang,Integer numOfPages) {
    	Optional<BooksModel> optionalBook = bookRepo.findById(id);
        if(optionalBook.isPresent()) {
        	BooksModel updatedBook=optionalBook.get();
        	updatedBook.setTitle(title);
            updatedBook.setDescription(desc);
            updatedBook.setLanguage(lang);
            updatedBook.setNumberOfPages(numOfPages);
            return bookRepo.save(updatedBook);
        } else {
            return null;
        }
    }
	
	// delete a book
    public String deleteBook(Long id) {
    	bookRepo.deleteById(id);
    	 return "deleted";
    }
}
