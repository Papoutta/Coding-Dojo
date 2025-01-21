<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ page isErrorPage="true" %>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>     
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>One Book</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
<div class="container p-5 mt-5">
<div class="d-flex justify-content-between align-items-center">
	<h1 class="text-uppercase text-center m-3 p-3 ">${book.title}</h1>
	<a href="/books" class="btn btn-outline-dark">Back to shelves</a>
</div>

<c:choose>
	<c:when test="${user.userName.equals(book.user.userName)}">
		<h3 class="m-3"><span class="text-capitalize text-primary">You</span> read 
            <span class="text-success text-capitalize text-opacity-50">${book.title}</span> 
            by <span class="text-capitalize text-danger">${book.author}</span>
        </h3>
		<p>Here are your thoughts:</p>
	</c:when>
	<c:otherwise>
		<h3 class="m-3"><span class="text-capitalize text-primary">${book.user.userName}</span> read 
            <span class="text-success text-capitalize text-opacity-50">${book.title}</span> 
            by <span class="text-capitalize text-danger">${book.author}</span>
        </h3>
		<p>Here are ${book.user.userName}'s thoughts:</p>
	</c:otherwise>
</c:choose>


<div class="border-top border-bottom border-dark p-5 m-3" >
${book.myThoughts }
</div>
<c:if test="${user.userName.equals(book.user.userName)}">
<div class="d-flex justify-content-end align-items-center gap-3 m-3">
	<a href="/books/${book.id }/edit" class="col-2 btn btn-warning">Edit</a>
	<form class="col-2" action="/delete/${book.id}" method="POST"><input type="hidden" name="_method" value="delete"><input type="submit" value="Remove" class="col-11 btn btn-outline-danger" /></form>
</div>
</c:if>
<c:if test="${!user.userName.equals(book.user.userName)}">
<div class="d-flex justify-content-end align-items-center gap-3 m-3">
	<a href="/books/${book.id }/edit" class="col-2 btn btn-warning disabled">Edit</a>
	<form class="col-2" action="/delete/${book.id}" method="POST"><input type="hidden" name="_method" value="delete"><input type="submit" value="Delete" class="col-11 disabled btn btn-outline-danger" /></form>
</div>
</c:if>

</div>
</body>
</html>
