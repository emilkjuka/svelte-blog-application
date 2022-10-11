<script land="ts">
    import Card from "./Card.svelte";
    import { postsData } from "../stores/blogStore";
    import { blogPost } from "../classes";

    let author = "Author";
    let content = "What are you going to post about today?";

    function onSubmit() {
        const now = new Date();
        let newPost = new blogPost();
        newPost.author = author;
        newPost.date = now.toDateString();
        newPost.content = content;
        $postsData = [newPost, ...$postsData]
        console.log("submitted +" + newPost.author + newPost.date + newPost.content);
    }

</script>

<Card color={"bg-[#A4F9C8]"}>
    <div class="flex justify-between mb-2">
        <input
            class="p-2 rounded-md"
            id="author"
            bind:value={author}
            on:focus={() => author=="Author" ? author="" : author}
            on:blur={() => author=="" ? author="Author" : author}
            />
        <button
            class="bg-white text-gray-600 rounded-md w-24 hover:bg-[#801A86] hover:text-white"
            on:click={() => onSubmit()}>Submit</button
        >
    </div>
    <div class="my-2 w-full flex justify-center" id="content">
        <textarea
            class="rounded-md p-2"
            rows="4"
            cols="96"
            bind:value={content}
            on:focus={() => content=="What are you going to post about today?" ? content="" : content}
            on:blur={() => content=="" ? content="What are you going to post about today?" : content}
        />
    </div>
</Card>
