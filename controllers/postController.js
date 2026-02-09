import { 
    postPostService,
    getAllPostsService
 } from "../services/postServices.js";

// GET ALL POSTS CONTROLLER
export const getAllPosts = async (req, res) => {
    console.log("GET ALL POSTS CONTROLLER");

    try {
        const posts = await getAllPostsService();
        return res.status(200).json({
            success: true,
            data: posts,
        });
    } catch (error) {
        console.error("Error fetching posts:", error);

        return res.status(500).json({
            success: false,
            message: error?.message || "Internal Server Error",
        });
    }
};


export const postPost = async (req, res) => {
    console.log("POST POST CONTROLLER");

    try {
        const { title, content, user } = req.body;

        if (!title || !content || !user) {
            return res.status(400).json({
                success: false,
                message: "Name, email, age and password are required",
            });
        }

        const post = await postPostService({
            title,
            content,
            user
        });

        return res.status(201).json({
            success: true,
            data: post,
        });
    } catch (error) {
        console.error("Error creating post:", error);

        return res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    }
};