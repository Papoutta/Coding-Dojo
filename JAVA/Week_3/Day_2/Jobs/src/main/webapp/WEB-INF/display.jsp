<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %> 
 <%@ page isErrorPage="true" %> 
 <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html>
<html>
<head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div class="container">
		<h5>${job.addToTheirFavourite.size()} users add this job to their favorites</h5>
		<h1>Title : ${job.title}</h1>
		<h1>Description : ${job.description}</h1>
		<h1>Posted By : ${job.creator.userName}</h1>
		
		<c:if test="${job.creator.equals(user)}">
			<a href="/edit/${job.id}" class="btn btn-primary">Edit</a>
		</c:if>
		<div class="mt-4">
		<c:if test="${job.addToTheirFavourite.contains(user) }">
			<a href="/remove/${job.id}" class="btn btn-danger">Remove</a>
		</c:if>
		<c:if test="${!job.addToTheirFavourite.contains(user) }">
			<a href="/add/${job.id}" class="btn btn-success">Add</a>
		</c:if>
		</div>
		<div class="mt-4">
			<ul>
				<c:forEach var="user" items="${job.addToTheirFavourite}">
				<li>${user.userName}</li>
				</c:forEach>
			</ul>
		</div>
	</div>
</body>
</html>