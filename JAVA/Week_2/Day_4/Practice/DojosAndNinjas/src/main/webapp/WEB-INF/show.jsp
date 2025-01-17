
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ page isErrorPage="true" %>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>     
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Dojo Page</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body>
<h1 class="p-3">${dojo.name} Location Ninjas</h1>
	<table class="table table-striped table-dark text-light text-center">
		<thead>
			<tr>
				<th scope="col">First Name</th>
				<th scope="col">Last Name</th>
				<th scope="col">Age</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${dojo.ninjas}" var="one" >
				<tr>
					<td scope="row" >${one.firstName}</td>
					<td>${one.lastName}</td>
					<td>${one.age}</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
</body>
</html>
