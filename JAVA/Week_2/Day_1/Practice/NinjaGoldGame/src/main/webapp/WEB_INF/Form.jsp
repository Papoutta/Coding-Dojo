
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>NinjaGoldGame</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body>

<div class="container p-5">
	<div class="d-flex justify-content-between align-items-center p-5">
	<h1 class="">Your Gold : <span class="border border-3 ms-3 p-1">${count }</span></h1>
	<form action="/process" method="POST" class="">
			<input type="hidden" name='typeE' value="reset">
			<button class="btn btn-danger">Reset</button>
	</form>
	</div>
	<div class="row m-5">
		<form action="/process" method="POST" class="col border border-3 rounded border-dark p-4 m-1 text-center">
			<h2>Farm</h2>
			<input type="hidden" name='typeE' value="farm">
			<p>(earns 10-20 gold)</p>
			<button class="btn btn-primary">Find Gold!</button>
		</form>
		<form action="/process" method="POST" class="col border border-3 rounded border-dark p-4 m-1 text-center">
			<h2>Cave</h2>
			<input type="hidden" name='typeE' value="cave">
			<p>(earns 5-10 gold)</p>
			<button class="btn btn-success">Find Gold!</button>
		</form>
		<form action="/process" method="POST" class="col border border-3 rounded border-dark p-4 m-1 text-center">
			<h2>House</h2>
			<input type="hidden" name='typeE' value="house">
			<p>(earns 2-5 gold)</p>
			<button class="btn btn-info">Find Gold!</button>
		</form>
		<form action="/process" method="POST" class="col border border-3 rounded border-dark p-4 m-1 text-center">
			<h2>Quest</h2>
			<input type="hidden" name='typeE' value="quest">
			<p>(earns/takes 0-50 gold)</p>
			<button class="btn btn-warning">Find Gold!</button>
		</form>
		<form action="/process" method="POST" class="col border border-3 rounded border-dark p-4 m-1 text-center">
			<h2>Spa</h2>
			<input type="hidden" name='typeE' value="spa">
			<p>(loose 5-20 gold)</p>
			<button class="btn btn-warning">Go to Spa</button>
		</form>
	</div>
	<div class="m-5">
		<h3 class="m-3">Activities:</h3>
		<div class="border border-3 border-dark p-3">
			<ul>
				<c:forEach items="${earns}" var="message">
				<li class="text-success"> <c:out value="${message}"/> </li>
				</c:forEach>
			</ul>
			<ul>
				<c:forEach items="${losses}" var="messaged">
				<li class="text-danger"> <c:out value="${messaged}"/> </li>
				</c:forEach>
			</ul>
			
		</div>
	</div>
</div>
</body>
</html>
