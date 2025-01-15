<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ page isErrorPage="true" %>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>     
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Burger Tracker</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body>
<div class="container">
	<div class="d-flex justify-content-around align-items-center p-5 ">
	<h1 class="">Edit Burger</h1>
	<a class="btn btn-dark" href="/burger">Go Back</a>
	</div>
	<div class="row">
	<div class="col"></div>
	<form:form class="col-6 rounded-5 border border-black p-5 mb-4"  action="/burger/update/${burger.id }" method="post" modelAttribute="burger">
	<input type="hidden" name="_method" value="put">
	    <div class="p-3 ">
	        <form:label path="burgerName">Burger Name :</form:label>
	        <form:input class="col-6" path="burgerName"/>
	        <form:errors class="row text-danger "  path="burgerName"/>
	    </div>
	    <div class="p-3 ">
	        <form:label path="restaurantName">Restaurant Name :</form:label>
	        <form:input class="col-6" path="restaurantName"/>
	        <form:errors class="row text-danger "  path="restaurantName"/>
	    </div>
	    <div class="p-3 ">
	        <form:label path="rating">Rating :</form:label>
	        <form:input class="col-6" type="number" path="rating"/>
	        <form:errors class="row text-danger "  path="rating"/>
	    </div>
	    <div class="p-3 ">
	        <form:label path="notes">Notes :</form:label>
	        <form:input class="col-6"  path="notes"/>
	        <form:errors class="row text-danger "  path="notes"/>     
	    </div>    
	    <input class="btn btn-lg btn-success m-3" type="submit" value="Submit"/>
	</form:form>   
	<div class="col"></div>
	</div>
</div>
</body>
</html>