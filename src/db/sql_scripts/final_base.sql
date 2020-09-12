CREATE DATABASE IF NOT EXISTS snack_database/
USE snack_database;
create or replace view final_base as
select 
a.account_id,
a.name,
a.doc_number,
case when isnull(b.balance) then 0 else b.balance end as balance,
case when isnull(c.total_exp) then 0 else c.total_exp end as experience,
case when isnull(c.patent) then 'sem patente' else c.patent end as patent,
'' as date_last_spin,
0 as spin_score
 from account_info as a
 left join balance as b on a.account_id = b.account_id
 left join patent as c on a.account_id=c.account_id;