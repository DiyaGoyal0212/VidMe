import express from "express";
import { update, deletee, getUser, subscribe, unsubscribe, like, dislike } from "../controller/user.js";

const router = express.Router();

// router.get("/test", test)

//update a user
router.put("/:id", update);

//delete a user
router.delete("/:id", deletee);

//get a user
router.get("/find/:id", getUser);

//subscribe a user
router.put("/sub/:id", subscribe);

//unsubscribe a user
router.put("/unsub/:id", unsubscribe);

//like a video
router.put("/like/:videoId", like);

//dislike a video
router.put("/dislike/:videoId", dislike);

export default router;