<script lang="ts">
  import { Svelvet, Node, Minimap, Controls, ThemeToggle } from "svelvet";
</script>

<main class="flex flex-col justify-center flex-1 gap-2 h-full">
  <h1 class="text-4xl font-bold">Circuit</h1>
  <Svelvet id="my-canvas" TD minimap controls locked>
    <Node />
    <Node id="alpha" bgColor="red" label="Default Node" />
    <ThemeToggle main="dark" alt="light" slot="toggle" />
  </Svelvet>
</main>
