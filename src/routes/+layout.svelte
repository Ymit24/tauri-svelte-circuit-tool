<script lang="ts">
  import "../app.css";
  import { ModeWatcher } from "mode-watcher";
  import AppSidebar from "$lib/components/app-sidebar.svelte";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import ThemeToggle from "$lib/components/theme-toggle.svelte";

  let { children } = $props();
</script>

<ModeWatcher />

<Sidebar.Provider>
  <AppSidebar />
  <main class="w-full h-screen flex flex-col">
    <Sidebar.Trigger />
    <div class="fixed right-2 top-2">
      <ThemeToggle />
    </div>
    <div class="flex-1 flex flex-col">
      {@render children?.()}
    </div>
  </main>
</Sidebar.Provider>
