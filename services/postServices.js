import Post from "../models/post.js";

export const getAllPostsService = async () => {
    console.log("GET ALL POSTS SERVICE")
    let posts = await Post.find().populate("user", "name email");
    return posts;
}

export const postPostService = async ({title, content, user}) => {
    console.log("CREATE POST SERVICE")
    const post = await Post.create({
        title: title,
        content: content, 
        user: user
    });

    return post;
}