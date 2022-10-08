<script>
    import Card from "./Card.svelte";

    let contents = "this is the first container";
</script>

<div class="w-[60%] flex-row justify-center align-middle">
    <Card contents = {contents}/>
    <Card contents = {"this is a different post"}/>
</div>
