<script>
    import Card from "./Card.svelte";
    let color = "#801A86";
</script>

<Card color={"bg-[#A4F9C8]"}>
    <div class="flex justify-between mb-2">
        <input class="p-2 rounded-md" placeholder="Title" />
        <button class="bg-white text-gray-600 rounded-md w-24 hover:bg-[#801A86] hover:text-white">Submit</button>
    </div>
    <div class="my-2 w-full flex justify-center">
        <textarea class="rounded-md p-2" rows="4" cols="96" placeholder="Enter your post here!" />
    </div>
</Card>
