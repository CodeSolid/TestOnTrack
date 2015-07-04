drop keyspace TestOnTrack;
create keyspace TestOnTrack with replication = 
	{ 'class': 'SimpleStrategy', 'replication_factor': 3 };
use TestOnTrack;

CREATE TABLE users (
  email varchar PRIMARY KEY,
  password varchar,
  name varchar,
  account varchar,  
  session_token varchar  
);

insert into users(email, password, name, account, session_token) 
		values('elitepropertiesbroker@gmail.com', 'bogus', 'John Lockwood', 'CodeSolid', 'bogus_salted_bogus');

