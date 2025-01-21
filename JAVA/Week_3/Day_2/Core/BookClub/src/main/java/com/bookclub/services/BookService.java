package com.bookclub.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookclub.models.Book;
import com.bookclub.repositories.BookRepository;

@Service
public class BookService {
	@Autowired
	private BookRepository bookRepo;
	
	//All books
	public List<Book> allBooks(){
		return bookRepo.findAll();
	}
	
	//Create Book
	public Book createBook(Book book){
		return bookRepo.save(book);
	}
	
	//Delete Book
	public void deleteBook(Long id){
		bookRepo.deleteById(id);
	}
	
	//Find Book
	public Book findBook(Long id) {
        Optional<Book> optionalBook = bookRepo.findById(id);
        if(optionalBook.isPresent()) {
            return optionalBook.get();
        } else {
            return null;
        }
    }
	
	
	
	
	
	
	
	
}
