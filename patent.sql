CREATE DATABASE IF NOT EXISTS snack_database/
USE snack_database;

create or replace table patent as
 select 
 account_id, 
 case when sum(exp) between 0 and 29 then 'poupador'
	  when sum(exp) between 30 and 69 then 'investidor junior'
      when sum(exp) between 70 and 99 then 'investidor pleno'
      when sum(exp) >=100  then 'investidor senior' end as patent, 
 sum(exp) as total_exp from exp_hist group by 1;
