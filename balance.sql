CREATE DATABASE IF NOT EXISTS snack_database/
USE snack_database;

 create or replace view balance
	as
    select 
    account_id, sum(spent) as balance from spendings_adjust group by 1;