create table students(id integer,name text,age integer,course text);
insert into students (name,age,course) values("Amit Sharma",20,"Computer Science");
insert into students values ( 2, 'Priya Singh', 22,'Information Technology');
 insert into students values ( 3,'Ravi Kumar',19,'Electronics');
insert into students values (4,'Neha Verma',21,'Mechanical');
insert into students values (5,'Sohan Lal',23,'Civil Engineering');
insert into students values (6,'Anjali Mehta',20,'Computer Science');
insert into students values (7,'Vikas Gupta',22,'Information Technolog');
insert into students values (9,'Rajesh Khanna',21,'Electronics');
insert into students values (10,'Sneha Kapoor',22,'Civil Engineering');
select * from students where course='Information Technology';
UPDATE students SET course='Mechanical' WHERE id=3;
DELETE FROM students WHERE name='Ravi Kumar';

select * from students;

