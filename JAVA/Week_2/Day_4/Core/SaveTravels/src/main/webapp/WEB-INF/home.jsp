<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ page isErrorPage="true" %>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>   
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div class="container p-5">
	<h1 class="p-3">Save Travels</h1>
	<table class="table table-striped table-dark text-light text-center">
		<thead>
			<tr >
				<th scope="col">Expense</th>
				<th scope="col">Vendor</th>
				<th scope="col">Amount</th>
				<th scope="col">Actions</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${allExpenses}" var="one" >
				<tr >
					<td><a href="expense/${one.id}">${one.expenseName}</a></td>
					<td>${one.vendor}</td>
					<td>$ ${one.amount}</td>
					<td>
						<div class="d-flex justify-content-center gap-3">
							<a href='/edit/${one.id}'><button class="btn btn-warning ">Edit</button></a>
							<form action="/delete/${one.id}" method="post">
								<input type="hidden" name="_method" value="delete"> 
								<input class="btn btn-danger"  type="submit" value="Delete">
							</form>
						</div>
					</td>
				</tr>
			</c:forEach>
			</tbody>
	</table>
	<h1 class="p-3">Add an expense :</h1>
		<form:form class=" bg-dark text-light border rounded-4 border-dark p-5" action="/addExpense" method="post" modelAttribute="expense">
	    <div class="p-3 d-flex flex-column">
	        <form:label path="expenseName">Expense Name :</form:label>
	        <form:input class="form-control" path="expenseName"/>
	        <form:errors class="row text-danger" path="expenseName"/>
	    </div>
	    <div class="p-3 d-flex flex-column">
	        <form:label path="vendor">Vendor :</form:label>
	        <form:input class="form-control" path="vendor"/>
	        <form:errors class="row text-danger" path="vendor"/>
	    </div>
	    <div class="p-3 d-flex flex-column">
	        <form:label path="amount">Amount :</form:label>
	        <form:input class="form-control" type="number" step="0.01"  path="amount"/>
	        <form:errors class="row text-danger" path="amount"/>
	    </div>
	    <div class="p-3 d-flex flex-column ">
	        <form:label path="description">Description :</form:label>
	        <form:textarea class="form-control"  path="description"/>
	        <form:errors class="row text-danger " path="description"/>     
	    </div>    
	    <input class="col-4 btn btn-success m-3" type="submit" value="Submit"/>
	</form:form> 
		
	
	
</div>
</body>
</html>