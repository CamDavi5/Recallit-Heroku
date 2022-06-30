import * as express from "express";
const router = express.Router();

import db from "../db/saveditemsdb";

// REST API
router.get("/:id?", async (req, res) => {
    try {
        const id = req.params.id;

        if (id) {
            const saveditem = await db.one(id);
            res.json(saveditem);
        } else {
            const saveditems = await db.all();
            res.json(saveditems);
        }
    } catch (error) {
        console.log(error);
    }
});

// Create
router.post("/", async (req, res) => {
    try {
        const body = req.body;

        const dbCreate = await db.insert(body.userid, body.CPSCid, body.NHTSAid);
        res.status(200).json(dbCreate);
    } catch (error) {
        console.log(error)
    }
});

// Delete
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const dbDelete = await db.remove(id);

        res.status(200).json(dbDelete);
    } catch (error) {
        console.log(error);
    }
});

export default router;