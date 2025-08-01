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
    connectionString: "postgresql://postgres:password@localhost/postgres"
});
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect;
        const result = yield client.query(`
        create table humans(
            id serial primary key,
            name varchar not null,
            age number,
            email varchar unique not null,
            created_at timestamp with time zone default current_timestamp
        );
    `);
        console.log(result);
    });
}
createUser();
