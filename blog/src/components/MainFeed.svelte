<script lang="ts">
    import BlogPost from "./BlogPost.svelte";
    import { postsData } from "../stores/blogStore";
    import type {blogPost} from "../classes"
    
    let tempData: blogPost[] 

    postsData.subscribe((data) => {
        tempData = data;
        console.log(tempData);
    });

    tempData = tempData.reverse();
</script>

<div class=" flex-row justify-center align-middle">
    {#each tempData as post}
        <BlogPost {post} />
    {/each}
</div>
