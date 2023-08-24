import { User } from "../model/user.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { BlogPost } from "../model/blog.js"
import Comment from "../model/comment.js";

// Create a new blog post (authenticated route)  
export const createBlog = async (req, res, next) => {
    try {
        const { title, content } = req.body;

        // Get the authenticated user from the token
        const user = await User.findById(req.user._id);

        if (!user) {
            return next(new ErrorHandler("'User not found' ", 401))
        }
        // Create a new blog post
        const newPost = new BlogPost({
            title,
            content,
            author: user._id
        });

        await newPost.save();
        user.posts.unshift(post._id);

        await user.save();
        res.status(201).json(newPost);
    } catch (error) {

        return next(new ErrorHandler(error, 401))
    }
}

export const commentOnPost = async (req, res) => {
    try {
        const { content } = req.body;
        const postId = req.params.postId;
        const post = await BlogPost.findById(postId);

        if (!post) {
            return next("Post not found", 401)
        }


        // Create a new comment
        const newComment = await Comment.create({
            content,
            author: req.user._id
        })

        post.comments.push(newComment._id);
        await post.save();
        res.status(201).json(newComment);

    } catch (error) {
        return next(new ErrorHandler(error, 401))
    }
};

// Get all blog posts (public route)
export const getAllPost = async (req, res) => {
    try {
        const posts = await BlogPost.find().populate('author', 'name'); // Assuming 'author' is a reference to User
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};



// Get all comments on a blog post (public route)
export const getAllComment = async (req, res, next) => {
    try {
        const postId = req.params.postId;

        // Find the blog post by ID and populate the 'comments' field with author information
        const post = await BlogPost.findById(postId).populate({
            path: 'comments.author',
            select: 'name'
        });

        if (!post) {
            return next(new ErrorHandler('Blog post not found', 401))
        }

        res.status(200).json(post.comments);
    } catch (error) {

        return next(new ErrorHandler(error, 401))
    }
};

// Add this route after the existing code in your 'index.js' file

// Update a blog post (authenticated route)
export const updatePost = async (req, res, next) => {
    try {
        const postId = req.params.postId;
        const { title, content } = req.body;

        // Get the authenticated user from the token
        const user = await User.findById(req.user._id);

        if (!user) {
            return next(new ErrorHandler("user not found", 401))
        }

        // Find the blog post by ID
        const post = await BlogPost.findById(postId);

        if (!post) {
            return next(new ErrorHandler('Blog post not found', 401))
        }

        // Check if the authenticated user is the author of the blog post
        if (post.author.toString() !== user._id.toString()) {
            return next(new ErrorHandler(" 'You are not authorized to update this post", 401))
        }

        // Update the blog post
        post.title = title;
        post.content = content;
        post.updatedAt = Date.now();

        await post.save();
        res.status(200).json(post);
    } catch (error) {

        return next(new ErrorHandler(error, 401))
    }
};

