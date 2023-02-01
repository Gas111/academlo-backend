CREATE TYPE "status" AS ENUM (
  'pending',
  'incart',
  'purchased'
);

CREATE TABLE "users" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "username" varchar(15),
  "email" varchar(30) UNIQUE NOT NULL,
  "password" varchar(20) NOT NULL
);

CREATE TABLE "product" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" varchar(30) UNIQUE NOT NULL,
  "price" int,
  "available_qty" int,
  "type" status DEFAULT 'pending',
  "user_id" int NOT NULL
);

CREATE TABLE "car" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "user_id" int NOT NULL,
  "total_price" int
);

CREATE TABLE "product_in_cart" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "cart_id" int NOT NULL,
  "product_id" int NOT NULL,
  "quantity" int,
  "price" int,
  "type" status DEFAULT 'pending'
);

CREATE TABLE "order" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "total_price" int,
  "user_id" int NOT NULL,
  "type" status DEFAULT 'pending'
);

CREATE TABLE "product_in_order" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "order_id" int NOT NULL,
  "product_id" int NOT NULL,
  "quantity" int,
  "price" int,
  "type" status DEFAULT 'pending'
);

ALTER TABLE "product" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "car" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "order" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "product_in_cart" ADD FOREIGN KEY ("cart_id") REFERENCES "car" ("id");

ALTER TABLE "product_in_order" ADD FOREIGN KEY ("order_id") REFERENCES "order" ("id");

ALTER TABLE "product_in_cart" ADD FOREIGN KEY ("product_id") REFERENCES "product" ("id");

ALTER TABLE "product_in_order" ADD FOREIGN KEY ("product_id") REFERENCES "product" ("id");
