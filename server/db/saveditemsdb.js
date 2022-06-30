import { Query } from "./index";

const all = () => Query("SELECT * FROM saveditems");
const one = async(id) => Query('SELECT * FROM saveditems WHERE id =?',[id]);
const insert = async(userid,CPSCid,NHTSAid) => Query("INSERT INTO saveditems(userid,CPSCid,NHTSAid) Values (?,?,?)",[userid,CPSCid,NHTSAid]);
const remove = async(id) => Query('DELETE FROM saveditems WHERE id=?',[id]);
export default {
        all,
        one,
        insert,
        remove
    }