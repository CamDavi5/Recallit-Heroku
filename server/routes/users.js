import * as express from "express";
const router = express.Router();

import db from "../db/usersdb";

// REST API
router.get("/:id?", async (req, res) => {
    try {
        const id = req.params.id;

        if (id) {
            const user = await db.one(id);
            res.json(user);
        } else {
            const users = await db.all();
            res.json(users);
        }
    } catch (error) {
        console.log(error);
    }
});

// Create
router.post("/", async (req, res) => {
    try {
        const body = req.body;

        const dbCreate = await db.insert(body.username, body.password, body.birthdate,body.email);
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
        const body  = req.body;

        const dbUpdate = await db.update(body.username,body.password,body.email,id);

        res.status(200).json(dbUpdate);
    } catch (error) {
        console.log(error)
    }
});

export default router;