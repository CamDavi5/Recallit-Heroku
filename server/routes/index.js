import * as express from "express";
const router = express.Router();

//importing routers from respective files
import saveditemsRouter from "./saveditems";
import suggestRouter from "./suggest";
import userRouter from "./users";
import test from './ihatecors'

//localhost:3000/api/saveditems
router.use("/saveditems", saveditemsRouter);
//localhost:3000/api/suggestions
router.use("/suggestions", suggestRouter);
//localhost:3000/api/user
router.use("/user", userRouter);
router.use('/ahh', test)

export default router;