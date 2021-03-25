drop table if exists product;
drop table if exists cart;
drop table if exists cart_item;

create table product (
  id bigint auto_increment primary key,
  name varchar(60) default null,
  image_url varchar(500) default null,
  description varchar(1000) default null,
  price decimal,
  created_at timestamp
);

create table cart (
  id bigint auto_increment primary key,
  created_at timestamp
);

create table cart_item (
  id bigint auto_increment primary key,
  cart_id bigint,
  product_id bigint,
  created_at timestamp,
  quantity integer,
  price decimal,
  foreign key (cart_id) references cart(id),
  foreign key (product_id) references product(id)
);