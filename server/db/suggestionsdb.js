import { Query } from "./index";
const all = () => Query("SELECT * FROM suggestions");
const one = async(id) => Query('SELECT * FROM suggestions WHERE id =?',[id]);
const insert = async(userid,CPSCid,NHTSAid,usercomment,_created) => Query("INSERT INTO suggestions(userid,CPSCid,NHTSAid,usercomment,_created) Values (?,?,?,?,?)",[userid,CPSCid,NHTSAid,usercomment,_created]);
const remove = async(id) => Query('DELETE FROM suggestions WHERE id=?',[id]);
const comment = () => Query("SELECT users.username, suggestions.usercomment,suggestions.CPSCid,suggestions.NHTSAid from suggestions join users on suggestions.userid = users.id");
const update = (id,usercomment) => Query("UPDATE suggestions SET usercomment = ? WHERE id = ?", [usercomment, id]);
export default {
    all,
    one,
    insert,
    remove,
    comment,
    update
}
