import { Query } from "./index";

const all = () => Query("SELECT * FROM users");
const one = async(id) => Query('SELECT * FROM users WHERE id =?',[id]);
const insert = async(username,password,birthdate,email) => Query("INSERT INTO users(username,password,birthdate,email) Values (?,?,?,?)",[username,password,birthdate,email]);
const remove = async(id) => Query('DELETE FROM users WHERE id=?',[id]);
const update = (username,password,email,id) => Query("UPDATE users SET username = ? , password = ? , email = ? WHERE id = ?", [username,password,email,id]);
export default {
    all,
    one,
    insert,
    remove,
    update
}