<script lang="ts">
  import "../app.css";
  import { ModeWatcher } from "mode-watcher";
  import AppSidebar from "$lib/components/app-sidebar.svelte";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import ThemeToggle from "$lib/components/theme-toggle.svelte";
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
  import { Separator } from "$lib/components/ui/separator/index.js";
  import * as Resizable from "$lib/components/ui/resizable/index.js";

  let { children } = $props();
</script>

<ModeWatcher />

<Sidebar.Provider>
  <AppSidebar />
  <Sidebar.Inset>
    <main class="w-full h-screen flex flex-col">
      <header
        class="flex justify-between h-16 shrink-0 items-center border-b px-4"
      >
        <div class="flex items-center gap-2">
          <Sidebar.Trigger class="-ml-1" />
          <Separator
            orientation="vertical"
            class="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb.Root>
            <Breadcrumb.List>
              <Breadcrumb.Item class="hidden md:block">
                <Breadcrumb.Link href="#">lib</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator class="hidden md:block" />
              <Breadcrumb.Item class="hidden md:block">
                <Breadcrumb.Link href="#">components</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator class="hidden md:block" />
              <Breadcrumb.Item>
                <Breadcrumb.Page>button.svelte</Breadcrumb.Page>
              </Breadcrumb.Item>
            </Breadcrumb.List>
          </Breadcrumb.Root>
        </div>
        <ThemeToggle />
      </header>
      <div class="flex-1 flex flex-col">
        <Resizable.PaneGroup direction="vertical">
          <Resizable.Pane class="p-4">
            {@render children?.()}
          </Resizable.Pane>
          <Resizable.Handle />
          <Resizable.Pane defaultSize={20} class="p-2">console</Resizable.Pane>
        </Resizable.PaneGroup>
      </div>
    </main>
  </Sidebar.Inset>
</Sidebar.Provider>
