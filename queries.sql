-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT ProductName, CategoryName 
FROM product
JOIN category on product.CategoryId = category.Id
LIMIT 77
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT o.Id, s.CompanyName, o.OrderDate
FROM [order] as o
JOIN shipper as s 
ON s.Id = o.ShipVia
WHERE o.OrderDate < '2012-08-09'
LIMIT 429
-- Display the name and quantity of the products ordered in order 
-- with Id 10251. Sort by ProductName. Shows 3 records.
-- I don't know wtf this question is asking

-- Display the OrderID, Customer's Company Name and 
-- the employee's LastName for every order. All columns 
-- should be labeled clearly. Displays 16,789 records.
SELECT o.Id as OrderId, c.CompanyName as Customers_Company_Name, e.LastName as Employees_last_name
FROM [order] as o
JOIN customer as c
ON c.Id = o.CustomerId
Join employee as e
On e.Id = o.EmployeeId
LIMIT 16789