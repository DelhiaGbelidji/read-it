alter table "public"."profiles" drop constraint "username_length";

alter table "public"."profiles" drop column "firstname";

alter table "public"."profiles" drop column "lastname";

alter table "public"."profiles" drop column "phone_number";

alter table "public"."profiles" add column "first_name" text;

alter table "public"."profiles" add column "last_name" text;

CREATE UNIQUE INDEX profiles_email_key ON public.profiles USING btree (email);

alter table "public"."profiles" add constraint "profiles_email_key" UNIQUE using index "profiles_email_key";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
begin
  insert into public.profiles (id, email, first_name, last_name, avatar_url)
  values (new.id, new.email, new.raw_user_meta_data->>'first_name',new.raw_user_meta_data->>'last_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$function$
;


