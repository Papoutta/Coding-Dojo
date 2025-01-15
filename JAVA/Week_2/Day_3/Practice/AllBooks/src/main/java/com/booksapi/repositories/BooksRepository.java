package com.booksapi.repositories;

	import java.util.List;

	import org.springframework.data.repository.CrudRepository;
	import org.springframework.stereotype.Repository;

	import com.booksapi.models.BooksModel;


	@Repository
	public interface BooksRepository extends CrudRepository<BooksModel, Long> {
		// get the book with id 
		List <BooksModel> findById(int id);
		//this is to return all the instances
		List<BooksModel> findAll();
	}