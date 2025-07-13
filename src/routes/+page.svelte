<script lang="ts">
  import { Svelvet, Node, Minimap, Controls, ThemeToggle } from "svelvet";
  import ResistorNode from "$lib/components/ResistorNode.svelte";
  import NmosNode from "$lib/components/NmosNode.svelte";
</script>

<main class="flex flex-col justify-center flex-1 gap-2 h-full">
  <Svelvet id="my-canvas" TD minimap controls>
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

    <!-- NMOS transistor -->
    <NmosNode
      id="nmos1"
      position={{ x: 500, y: 100 }}
      label="M1"
    />

    <ThemeToggle main="dark" alt="light" slot="toggle" />
  </Svelvet>
</main>
