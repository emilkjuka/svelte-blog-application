<script lang="ts">
    import BlogPost from "./BlogPost.svelte";
    import { postsData } from "../stores/blogStore";
    
    let tempData;
    postsData.subscribe(data =>
    {
        tempData = data;
        console.log(tempData)
    });

</script>

<div class=" flex-row justify-center align-middle">
    {#each tempData as post}
        <BlogPost post={post}></BlogPost>
    {/each}
</div>
