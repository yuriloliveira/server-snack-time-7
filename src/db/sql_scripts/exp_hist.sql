CREATE DATABASE IF NOT EXISTS snack_database/
USE snack_database;

create or replace view exp_hist as
select 
a.*,
b.spendings,
case when (a.earnings - b.spendings) / a.earnings >= 0.3 then 30
     when (a.earnings - b.spendings) / a.earnings >= 0.2 and  (a.earnings - b.spendings) / a.earnings < 0.3 then 20
     when (a.earnings - b.spendings) / a.earnings >= 0.1 and  (a.earnings - b.spendings) / a.earnings < 0.2 then 10
     else 0 end as exp
from
(select
account_id,
substr(date,1,6) as ref_month,
sum(amount) as earnings
from spendings_adjust
where transaction_type = 'c'
group by 1,2) as a
left join
(select
account_id,
substr(date,1,6) as ref_month,
sum(amount) as spendings
from spendings_adjust
where transaction_type = 'd'
group by 1,2) as b
on a.account_id=b.account_id
;