<script>
    import Card from "./Card.svelte";
</script>

<Card>
    <div class="flex justify-between">
        <input class="" placeholder="Title" />
        <button class="bg-white text-gray-600 rounded-md">Submit</button>
    </div>
    <div class="py-2 w-full">
        <textarea class="rounded-md" rows="5" cols="98" placeholder="Enter your post here!" />
    </div>
</Card>
