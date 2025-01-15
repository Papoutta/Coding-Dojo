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
<div class="container p-5">
	<h1 class="p-3">Burger Tracker</h1>
	<table class="border table-dark table table-striped text-light text-center">
		<thead>
			<tr>
				<th>Burger Name</th>
				<th>Restaurant Name</th>
				<th>Rating</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${allBurgers}" var="one" >
				<tr>
					<td>${one.burgerName}</td>
					<td>${one.restaurantName}</td>
					<td>${one.rating}</td>
				</tr>
			</c:forEach>
			</tbody>
	</table>
	<h1 class="p-3">Add Burger</h1>
		<form:form class="col-6 border rounded-4 border-danger p-5" action="/burger/processBurger" method="post" modelAttribute="burger">
	    <div class="d-flex flex-column p-3">
	        <form:label path="burgerName">Burger Name :</form:label>
	        <form:input class="col-6" path="burgerName"/>
	        <form:errors class="row text-danger" path="burgerName"/>
	    </div>
	    <div class="d-flex flex-column p-3">
	        <form:label path="restaurantName">Restaurant Name :</form:label>
	        <form:input class="col-6" path="restaurantName"/>
	        <form:errors class="row text-danger" path="restaurantName"/>
	    </div>
	    <div class="d-flex flex-column p-3">
	        <form:label path="rating">Rating :</form:label>
	        <form:input class="col-6" type="number" path="rating"/>
	        <form:errors class="row text-danger" path="rating"/>
	    </div>
	    <div class="d-flex flex-column p-3 ">
	        <form:label path="notes">Notes :</form:label>
	        <form:textarea class="col-6"  path="notes"/>
	        <form:errors class="row text-danger " path="notes"/>     
	    </div>    
	    <input class="col-4 btn btn-success m-3" type="submit" value="Submit"/>
	</form:form> 
		
	
	
</div>
</body>
</html>