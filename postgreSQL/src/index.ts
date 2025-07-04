import {Client } from "pg";

const client = new Client({
    connectionString: 'postgresql://neondb_owner:npg_VO9tdopYevl7@ep-noisy-block-a8ddmtvc-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require'
});

async function createUser(){

    await client.connect();

    const result = await client.query(`
        create table humans(
            id serial primary key,
            name varchar not null,
            age integer,
            email varchar unique not null,
            created_at timestamp with time zone default current_timestamp
        );
    `);

    console.log(result);
}

// createUser();


async function insertUserData(name: string, email: string, age: number){

    await client.connect();

    const result = await client.query(`
        insert into humans (name, email, age)
        values($1, $2, $3)
    `, [name, email, age]);

        // values('${name}', '${email}', '${age}') -> it is prone to SQL Injection

    console.log(result);
}

// insertUserData(
//     "chirag", "chirag@mail.com", 19
// );


async function relationships(){

    await client.connect();

    const result = await client.query(`
        create table addresses(
            id serial primary key,
            user_id integer not null,
            house_no integer not null,
            city varchar not null,
            country varchar not null,
            pincode integer not null,
            created_at timestamp with time zone default current_timestamp,
            foreign key (user_id) references humans(id) on delete cascade
        );
    `);

    console.log(result);
}

// relationships();


async function insertAddress(user_id: number, house_no: number, city: string, country: string, pincode: number){

    await client.connect();

    const result = await client.query(`
        insert into addresses (user_id, house_no, city, country, pincode)
        values($1, $2, $3, $4, $5)
    `, [user_id, house_no, city, country, pincode]);

    console.log(result);
}

insertAddress(2, 1, "mzn", "india", 251001);

//transactions