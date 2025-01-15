<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Reading Books</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
<div class="container">
	<h1 class="m-5">All Books</h1>
	<table class="table border table-striped text-center ">
		<thead class="">
			<tr>
				<th>ID</th>
				<th>Title</th>
				<th>Language</th>
				<th>#Pages</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${allBooks }" var="oneBook">
				<tr>
					<td>${oneBook.id}</td>
					<td><a href='/book/${oneBook.id }'> ${oneBook.title}</a></td>
					<td>${oneBook.language}</td>
					<td>${oneBook.numberOfPages}</td>
				</tr>
			</c:forEach>

		</tbody>
	</table>
</div>
</body>
</html>