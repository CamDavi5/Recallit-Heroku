import * as express from "express";
const router = express.Router();

import db from "../db/suggestionsdb";

// REST API
router.get("/:id?", async (req, res) => {
    try {
        const id = req.params.id;

        if (id) {
            const suggestion = await db.one(id);
            res.json(suggestion);
        } else {
            const suggestions = await db.all();
            res.json(suggestions);
        }
    } catch (error) {
        console.log(error);
    }
});
// This endpoint gets user details but needs id to retrieve a specific one
router.get("/userdetail/:id?", async (req, res) => {
    try {
        const id = req.params.id;

        if (id) {
            const suggestion = await db.comment(id);
            res.json(suggestion);
        } else {
            const suggestions = await db.all();
            res.json(suggestions);
        }
    } catch (error) {
        console.log(error);
    }
});


// Create
router.post("/", async (req, res) => {
    try {
        const body = req.body;

        const dbCreate = await db.insert(body.userid, body.CPSCid, body.NHTSAid,body.usercomment,body._created);
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

//Update
router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const content = req.body.usercomment;

        const dbUpdate = await db.update(id,content);
        
        res.status(200).json(dbUpdate);
    } catch (error) {
        console.log(error)
    }
});

export default router;