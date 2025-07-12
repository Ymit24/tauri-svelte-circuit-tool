<script lang="ts">
  import { invoke } from "@tauri-apps/api/core";

  let name = $state("");
  let greetMsg = $state("");

  async function greet(event: Event) {
    event.preventDefault();
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    greetMsg = await invoke("greet", { name });
  }
</script>

<main class="bg-neutral-600 flex flex-col justify-center items-center w-screen h-screen">
  <h1 class="text-xl text-red-400 font-bold">Welcome to Tauri + Svelte</h1>
  <form class="row" onsubmit={greet}>
    <input id="greet-input" placeholder="Enter a name..." bind:value={name} class="border-1 border-blue-200 rounded-lg p-2 text-gray-100"/>
    <button type="submit">Greet</button>
  </form>
  <p class="text-xl">{greetMsg}</p>
</main>

