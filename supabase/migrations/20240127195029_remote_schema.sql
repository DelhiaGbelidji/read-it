alter table "public"."profiles" drop constraint "profiles_username_key";

alter table "public"."profiles" drop constraint "username_length";

drop index if exists "public"."profiles_username_key";

alter table "public"."profiles" drop column "full_name";

alter table "public"."profiles" drop column "username";

alter table "public"."profiles" drop column "website";

alter table "public"."profiles" add column "email" text;

alter table "public"."profiles" add column "firstname" text;

alter table "public"."profiles" add column "lastname" text;

alter table "public"."profiles" add column "phone_number" text;

alter table "public"."profiles" add constraint "username_length" CHECK ((char_length(firstname) >= 3)) not valid;

alter table "public"."profiles" validate constraint "username_length";


