import { writable } from "svelte/store";

import data from "../static/postsData.json";
import {blogPost} from "../classes"

let posts: blogPost[] = []
data.forEach(element => {
    let newPost : blogPost = new blogPost()
    newPost.author = element.author
    newPost.date = element.date 
    newPost.content = element.content

    posts.push(newPost)
});

export const postsData = writable(posts);
