<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Display</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body>
	<div class="container p-5 m-5">
		<h1 class="m-5">Here is your Omikuji!</h1>
		<div class="card p-3" style="width: 30rem;">
   			<h3 class="card-text m-5">In <span>${keyYear }</span> years.You will leave in <span>${keyCity}</span> with <span>${keyPerson }</span> as your roommate, <span>${keyHobby}</span> for a living. The next time you see a <span>${keyThing }</span>,you will have good luck. Also, <span>${keyNice }</span> </h3>
   			<a href="/omikuji" class="btn btn-success m-3">Go Back</a>
		</div>
	</div>
</body>
</html>