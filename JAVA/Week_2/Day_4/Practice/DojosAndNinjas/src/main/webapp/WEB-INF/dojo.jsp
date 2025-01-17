
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ page isErrorPage="true" %>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>     
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>New Dojo</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body>
<div class="container p-5"><form:form class="col-6 rounded-3 text-light bg-dark p-5" action="/create/dojo" method="post" modelAttribute="dojo">
	    <h1 class="text-primary">New Dojo</h1>
	    <div class="p-3">
	        <form:label path="name">Name :</form:label>
	        <form:input class="col-6" path="name"/>
	        <form:errors class="row text-danger" path="name"/>
	    </div>   
	    <input class="col-4 btn btn-success m-3" type="submit" value="Create"/>
	</form:form> </div>
	
	
</body>
</html>
