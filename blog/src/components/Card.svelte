<script lang="ts">
    export let contents: String ;


    function click() {
        console.log("clicked");
        
    }
</script>

<div class=" p-1 h-48 w-full rounded-xl bg-orange-400 m-2 ">
    <h1>{contents}</h1>
    <button class="bg-white text-gray-600 font-sans rounded-xl w-24" on:click="{click}">Click me!</button>
</div>

<style>
</style>