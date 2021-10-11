create database restaurant;
use restaurant;


create table menu (
    -> plato_id int not null auto_increment,
    -> name_plato varchar(200) not null,
    -> tipo_plato varchar(200) not null,
    -> created_date datetime,
    -> modified_date datetime,
    -> PRIMARY KEY (plato_id)
    -> );


insert into menu values(1, 'Carbonada', 'menestra', '2019-09-14', '2020-08-15');
insert into menu values(2, 'Bife Angosto', 'parrilla', '2019-07-14', '2020-09-15');
insert into menu values(3, 'Lentejas', 'menestra', '2019-09-14', '2020-07-19');
insert into menu values(4, 'Pizza', 'Italiano', '2019-01-14', '2020-08-17');
insert into menu values(5, 'Hamburguesa', 'Fast Food', '2019-09-13', '2020-08-04');
insert into menu values(6, 'Arroz Chaufa', 'Chifa', '2019-09-04', '2020-08-05');
