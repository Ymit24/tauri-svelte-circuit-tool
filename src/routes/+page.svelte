<script lang="ts">
  import { Svelvet, Node, Minimap, Controls, ThemeToggle } from "svelvet";
  import ResistorNode from "$lib/components/ResistorNode.svelte";
</script>

<main class="flex flex-col justify-center flex-1 gap-2 h-full">
  <Svelvet id="my-canvas" TD minimap controls locked>
    <!-- First resistor -->
    <ResistorNode
      id="resistor1"
      position={{ x: 100, y: 100 }}
      label="R1"
      resistance="1kΩ"
    />

    <!-- Second resistor -->
    <ResistorNode
      id="resistor2"
      position={{ x: 300, y: 100 }}
      label="R2"
      resistance="2.2kΩ"
    />

    <ThemeToggle main="dark" alt="light" slot="toggle" />
  </Svelvet>
</main>
