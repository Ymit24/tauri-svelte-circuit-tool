<script lang="ts">
  import { invoke } from "@tauri-apps/api/core";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";

  let name = $state("");
  let greetMsg = $state("");

  async function greet(event: Event) {
    event.preventDefault();
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    greetMsg = await invoke("greet", { name });
  }
</script>

<main class="flex flex-col justify-center items-center flex-1 gap-2">
  <h1
    class="text-xl text-red-400 font-bold
    animate-in fade-in zoom-in duration-100"
  >
    Welcome to Tauri + Svelte
  </h1>
  <form class="flex flex-row gap-4" onsubmit={greet}>
    <Input placeholder="Enter a name..." bind:value={name} />
    <Button type="submit">Greet</Button>
  </form>
  {#if greetMsg}
    <p class="text-xl animate-in fade-in slide-in-from-left-8 duration-200">
      {greetMsg}
    </p>
  {/if}
</main>
