<script lang="ts">
    import Card from "./Card.svelte";
    import type {blogPost} from "../classes"
    
    export let post: blogPost;
</script>

<Card color={"bg-[#801A86]"}>
    <div class="flex  justify-between mb-4">
        <div class="text-white font-bold text-xl">{post.author}</div>
        <div class="text-white font-bold text-xl">{post.date}</div>
    </div>
    <div class="bg-white h-[7rem] rounded-md p-2">{post.content}</div>
</Card>
