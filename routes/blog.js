import express from "express"
import { commentOnPost, createBlog, getAllComment, getAllPost,updatePost } from "../controller/blogController.js";
import { isAuthenticatedUser } from "../middleware/authMiddleware.js";

const router = express.Router();



router.get("/createblog", isAuthenticatedUser, createBlog)
router.post("/api/posts/:postId/comments", isAuthenticatedUser, commentOnPost)
router.get("/api/posts", getAllPost)
router.get('/api/posts/:postId/comments', getAllComment);
router.put('/api/posts/:postId',isAuthenticatedUser,updatePost)

export default router;