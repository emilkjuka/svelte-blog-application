<script lang="ts">
  import Card from "./components/Card.svelte";
  import MainFeed from "./components/MainFeed.svelte";
  import NewPost from "./components/NewPost.svelte";
</script>

<main class="custom">
  <MainFeed />
</main>

<style>
  .custom {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>
