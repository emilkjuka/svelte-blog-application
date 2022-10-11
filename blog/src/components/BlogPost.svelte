<script>
    import Card from "./Card.svelte";
    export let post;
</script>

<Card color={"bg-[#801A86]"}>
    <div class="flex  justify-between mb-4">
        <div class="text-white font-bold text-xl">{post.title}</div>
        <div class="text-white font-bold text-xl">{post.date}</div>
    </div>
    <div class="bg-white h-[7rem] rounded-md p-2">{post.content}</div>
</Card>
