drop table if exists products;

create table products(
    name text,
    price integer,
    imgUrl text
);

insert into products
(name, price, imgUrl)
values
('Shirt', 1, 'https://production-direct-carters.demandware.net/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwd7288ef5/productimages/293G455.jpg?sw=470');

insert into products
(name, price, imgUrl)
values
('Hat', 10000000, 'https://strattonhats.com/wp-content/uploads/IMG_1416.jpg');

insert into products
(name, price, imgUrl)
values
('Shoe', 12, 'https://production-direct-carters.demandware.net/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwd7288ef5/productimages/293G455.jpg?sw=470');