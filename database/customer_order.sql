select c.id, c.nama, count(o.orderid), extract(year from o.orderdate) orderyear, extract(month from o.orderdate) ordermonth 
from customer c join "order" o on c.id = o.customerid 
group by c.id, c.nama, extract(year from o.orderdate), extract(month from o.orderdate) 
having count(o.orderid) > 2 
order by orderyear desc, ordermonth desc, c.id, c.nama;