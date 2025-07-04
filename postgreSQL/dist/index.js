"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: 'postgresql://neondb_owner:npg_VO9tdopYevl7@ep-noisy-block-a8ddmtvc-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require'
});
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        create table humans(
            id serial primary key,
            name varchar not null,
            age integer,
            email varchar unique not null,
            created_at timestamp with time zone default current_timestamp
        );
    `);
        console.log(result);
    });
}
// createUser();
function insertUserData(name, email, age) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        insert into humans (name, email, age)
        values($1, $2, $3)
    `, [name, email, age]);
        // values('${name}', '${email}', '${age}') -> it is prone to SQL Injection
        console.log(result);
    });
}
// insertUserData(
//     "chirag", "chirag@mail.com", 19
// );
function relationships() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        create table addresses2(
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
    });
}
// relationships();
function insertAddress(user_id, house_no, city, country, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        insert into addresses2 (user_id, house_no, city, country, pincode)
        values($1, $2, $3, $4, $5)
    `, [user_id, house_no, city, country, pincode]);
        console.log(result);
    });
}
insertAddress(2, 1, "mzn", "india", 251001);
// insertAddress(1, 26, "mzn", "india", 251001);
// insertAddress(2, 14, "noida", "india", 201301);
// insertAddress(1, 55, "noida", "india", 201301);
