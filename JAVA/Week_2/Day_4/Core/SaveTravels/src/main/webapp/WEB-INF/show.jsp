<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ page isErrorPage="true" %>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>     
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Edit Expense</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body>
<div class="container">
	<div class="d-flex justify-content-around align-items-center m-5 mb-5">
	<h1 class="">Expense Details</h1>
	<a class="btn btn-dark" href="/expenses">Go Back</a>
	</div>
	<div class="row">
	<div class="col"></div>
	<div class="col-6 rounded-5 bg-dark text-light p-5 m-5">
	    <div class="row p-3 ">
	        <p class="col">Expense Name :</p>
	        <h3 class="col">${expense.expenseName}</h3> 
	    </div>
	    <div class="row p-3 ">
	        <p class="col">Vendor :</p>
	        <h3 class="col">${expense.vendor}</h3> 
	    </div>
	    <div class="row p-3 ">
	        <p class="col">Amount :</p>
	        <h3 class="col">$ ${expense.amount}</h3> 
	    </div>
	    <div class="row p-3 ">
	        <p class="col">Description :</p>
	        <h5 class="col">${expense.description}</h5>     
	    </div>    
	</div>   
	<div class="col"></div>
	</div>
</div>
</body>
</html>