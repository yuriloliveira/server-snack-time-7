CREATE DATABASE IF NOT EXISTS snack_database/
USE snack_database;

create or replace view spendings_adjust
as
select
*,
case when transaction_type = 'c' then amount
	else amount*(-1) end as spent
    from spendings
   ;