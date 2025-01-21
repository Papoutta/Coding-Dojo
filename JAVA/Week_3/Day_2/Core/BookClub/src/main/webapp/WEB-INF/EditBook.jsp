<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ page isErrorPage="true" %>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>     
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Edit Book</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
<div class="container p-5 mt-5">
<div class="d-flex justify-content-between align-items-center">
	<h1 class="text-center m-3 p-3">Change your Entry!</h1>
	<a href="/books" class="btn btn-outline-dark">Back to shelves</a>
</div>
<div class="border border-2 shadow p-3 m-3">
<form:form class="p-3" action="/editBook/${book.id }" method="post" modelAttribute="book">
<input type="hidden" name="_method" value="put">
		<form:errors class="text-danger" path="*"/>
	    <div class="p-3">
	        <form:label class="col-4" path="title">Title :</form:label>
	        <form:input class="col-6" path="title"/>
	    </div>
	    <div class="p-3">
	        <form:label class="col-4" path="author">Author :</form:label>
	        <form:input class="col-6" path="author"/>
	    </div>
	    <div class="p-3">
	        <form:label class="col-4" path="myThoughts">My thoughts :</form:label>
	        <form:input class="col-6" path="myThoughts"/>

	    </div>
	    <input class="col-11 btn btn-outline-success m-3" type="submit" value="Submit"/>
	</form:form>

</div>
</div>
</body>
</html>
