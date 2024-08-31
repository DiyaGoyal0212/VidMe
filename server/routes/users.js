import express from "express";
import { update, deletee, getUser, subscribe, unsubscribe, like, dislike } from "../controller/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// router.get("/test", test)

//update a user
router.put("/:id",verifyToken, update);

//delete a user
router.delete("/:id",verifyToken, deletee);

//get a user
router.get("/find/:id",verifyToken, getUser);

//subscribe a user
router.put("/sub/:id",verifyToken, subscribe);

//unsubscribe a user
router.put("/unsub/:id",verifyToken, unsubscribe);

//like a video
router.put("/like/:videoId",verifyToken, like);

//dislike a video
router.put("/dislike/:videoId",verifyToken, dislike);

export default router;