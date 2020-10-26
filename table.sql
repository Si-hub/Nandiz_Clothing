create table products (
	id serial not null primary key,
    product_name text not null ,
    size text not null,
    quantity int not null,
	price decimal not null
);

create table customer (
	id serial not null primary key,
    customer_name text not null 
    
);