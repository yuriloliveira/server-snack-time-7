CREATE DATABASE IF NOT EXISTS snack_database/
USE snack_database;

	CREATE table if not exists `account_info` (
  	`account_id` int NOT NULL AUTO_INCREMENT,
	  `name` varchar(45) NOT NULL,
	  `doc_number` int NOT NULL,
	  PRIMARY KEY (`account_id`)
	);

		CREATE TABLE `spendings` (
		  `transaction_id` int NOT NULL AUTO_INCREMENT,
		  `account_id` int DEFAULT NULL,
		  `transaction_type` varchar(45) DEFAULT NULL,
		  `amount` double DEFAULT NULL,
		  `date` int DEFAULT NULL,
		  PRIMARY KEY (`transaction_id`)
		);


			CREATE OR REPLACE VIEW spendings_adjust
			as
			select
			*,
			case when transaction_type = 'c' then amount
				else amount*(-1) end as spent
			    from spendings
			   ;


				CREATE OR REPLACE VIEW balance
				as
				select 
				account_id, sum(spent) as balance from spendings_adjust group by 1;

					CREATE OR REPLACE VIEW exp_hist as
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

CREATE OR REPLACE VIEW patent as
 select 
 account_id, 
 case when sum(exp) between 0 and 29 then 'poupador'
	  when sum(exp) between 30 and 69 then 'investidor junior'
      when sum(exp) between 70 and 99 then 'investidor pleno'
      when sum(exp) >=100  then 'investidor senior' end as patent, 
 sum(exp) as total_exp from exp_hist group by 1;

	CREATE TABLE if not exists questions (
	question_id int NOT NULL AUTO_INCREMENT,
	title varchar(200) NOT NULL,
	PRIMARY KEY (question_id)
	);

		CREATE TABLE if not exists question_alternatives (
		  alternative_id int NOT NULL AUTO_INCREMENT,
		  question_id int NOT NULL,
		  title varchar(200) NOT NULL,
		  correct_answer boolean NOT NULL DEFAULT FALSE,
		  PRIMARY KEY (alternative_id),
		  FOREIGN KEY (question_id) REFERENCES questions (question_id)
		);

			CREATE OR REPLACE VIEW final_base as
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