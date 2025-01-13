
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Form</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body>
	<div class="container m-5">
		<h1 class="m-5">Send an Omikuji!</h1>
		<form class="col-6 border rounded p-5 " action="/submit" method="POST">
			<div class="form-group">
		    	<label for="numberYear">Pick any number from 5 to 25</label>
		    	<input type="number" class="form-control" id="numberYear" name="numberYear">
		  	</div>
			 <div class="form-group">
			   <label for="city">Enter the name of any city:</label>
			   <input type="text" class="form-control" id="city" name="city">
			 </div>
			 <div class="form-group">
			   <label for="person">Enter the name of any real person:</label>
			   <input type="text" class="form-control" id="person" name="person">
			 </div>
			 <div class="form-group">
			   <label for="hobby">Enter professional endeavor or hobby:</label>
			   <input type="text" class="form-control" id="hobby" name="hobby">
			 </div>
			 <div class="form-group">
			   <label for="thing">Enter any type of living thing:</label>
			   <input type="text" class="form-control" id="thing" name="thing">
			 </div>
			 <div class="form-group">
			   <label for="nice">Say something nice to someone :</label>
			   <textarea class="form-control" id="nice" name="nice" rows="" cols=""></textarea>
			 </div>
			 <p>Send and show a friend</p>
			 <div class="text-end">		  	
			 	 <button type="submit" class="btn btn-primary">Send</button>
			 </div>
		</form>
	</div>
</body>
</html>
