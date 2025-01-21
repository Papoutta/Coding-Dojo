

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ page isErrorPage="true" %>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>     
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Login Page</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
<div class="container">
<h1 class="m-3 p-3" style="color:Green;">Book Club</h1>
<h3 class="m-3 p-3">A place for friends to share thoughts on books</h3>
<div class="row">

<div class="col bg-dark p-3 m-3">
<h1 class="m-3 p-3 text-success">Register</h1>
	<form:form class="text-light p-3" action="/register" method="post" modelAttribute="newUser">
	    <div class="p-3">
	        <form:label class="col-4" path="userName">User Name :</form:label>
	        <form:input class="col-6" path="userName"/>
	        <form:errors class="row text-danger" path="userName"/>
	    </div> 
	    <div class="p-3">
	        <form:label class="col-4" path="email">Email :</form:label>
	        <form:input class="col-6" path="email"/>
	        <form:errors class="row text-danger" path="email"/>
	    </div>
	    <div class="p-3">
	        <form:label class="col-4" path="password">Password :</form:label>
	        <form:input type="password" class="col-6" path="password"/>
	        <form:errors class="row text-danger" path="password"/>
	    </div>
	    <div class="p-3">
	        <form:label class="col-4" path="confirm">Confirm PW :</form:label>
	        <form:input type="password" class="col-6" path="confirm"/>
	        <form:errors class="row text-danger" path="confirm"/>
	    </div>  
	    <input class="col-4 btn btn-success m-3" type="submit" value="Register"/>
	</form:form>
</div>
<div class="col bg-dark p-3 m-3">
<h1 class="m-3 p-3 text-success" >Login</h1>
<form:form class="text-light p-3" action="/login" method="post" modelAttribute="newLogin">
	    <div class="p-3">
	        <form:label class="col-4" path="email">Email :</form:label>
	        <form:input  class="col-6" path="email"/>
	        <form:errors class="row text-danger" path="email"/>
	    </div>
	    <div class="p-3">
	        <form:label class="col-4" path="password">Password :</form:label>
	        <form:input type="password" class="col-6" path="password"/>
	        <form:errors class="row text-danger" path="password"/>
	    </div>
	    <input class="col-4 btn btn-success m-3" type="submit" value="Login"/>
	</form:form>

</div>
</div>
</div>
</body>
</html>
