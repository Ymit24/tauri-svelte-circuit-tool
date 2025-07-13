<script lang="ts">
  import CircuitNode from "../base/CircuitNode.svelte";
  import CircuitSymbol from "../base/CircuitSymbol.svelte";
  import type { NmosNodeProps, AnchorConfig } from "../types.js";

  interface Props extends NmosNodeProps {}

  const {
    id = undefined,
    position = undefined,
    label = "",
    width = 64,
    height = 64
  }: Props = $props();

  const anchors: AnchorConfig[] = [
    { id: "gate", direction: "west", type: "input" },
    { 
      id: "drain", 
      direction: "north", 
      type: "output",
      position: { x: "62.5%", y: "0%" }
    },
    { 
      id: "source", 
      direction: "south", 
      type: "output",
      position: { x: "62.5%", y: "100%" }
    }
  ];
</script>

<CircuitNode 
  {id} 
  {position} 
  {width} 
  {height} 
  {label} 
  {anchors}
  value="NMOS"
>
  {#snippet symbolChildren()}
    <CircuitSymbol viewBox="0 0 80 60" {width} {height}>
      {#snippet children()}
        <!-- Gate line (vertical line on left) -->
        <line
          x1="15"
          y1="10"
          x2="15"
          y2="50"
          stroke="currentColor"
          stroke-width="3"
        />

        <!-- Gate connection line -->
        <line
          x1="0"
          y1="30"
          x2="15"
          y2="30"
          stroke="currentColor"
          stroke-width="2"
        />

        <!-- Channel (broken vertical line in middle) -->
        <line
          x1="25"
          y1="15"
          x2="25"
          y2="25"
          stroke="currentColor"
          stroke-width="3"
        />
        <line
          x1="25"
          y1="35"
          x2="25"
          y2="45"
          stroke="currentColor"
          stroke-width="3"
        />

        <!-- Drain connection -->
        <line
          x1="25"
          y1="20"
          x2="50"
          y2="20"
          stroke="currentColor"
          stroke-width="2"
        />
        <line
          x1="50"
          y1="0"
          x2="50"
          y2="20"
          stroke="currentColor"
          stroke-width="2"
        />

        <!-- Source connection -->
        <line
          x1="25"
          y1="40"
          x2="50"
          y2="40"
          stroke="currentColor"
          stroke-width="2"
        />
        <line
          x1="50"
          y1="40"
          x2="50"
          y2="60"
          stroke="currentColor"
          stroke-width="2"
        />
      {/snippet}
    </CircuitSymbol>
  {/snippet}

  {#snippet children()}
    <!-- Additional content can go here if needed -->
  {/snippet}
</CircuitNode>