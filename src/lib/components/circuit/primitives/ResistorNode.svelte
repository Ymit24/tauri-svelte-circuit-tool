<script lang="ts">
  import CircuitNode from "../base/CircuitNode.svelte";
  import CircuitSymbol from "../base/CircuitSymbol.svelte";
  import type { ResistorNodeProps, AnchorConfig } from "../types.js";

  interface Props extends ResistorNodeProps {
    resistance?: string;
  }

  const {
    id = undefined,
    position = undefined,
    label = "",
    width = 120,
    height = 60,
    resistance = "1kΩ"
  }: Props = $props();

  const anchors: AnchorConfig[] = [
    { id: "input", direction: "west", type: "input" },
    { id: "output", direction: "east", type: "output" }
  ];
</script>

<CircuitNode 
  {id} 
  {position} 
  {width} 
  {height} 
  {label} 
  {anchors}
  value={resistance}
>
  {#snippet symbolChildren()}
    <CircuitSymbol viewBox="0 0 100 30" {width} height={30}>
      {#snippet children()}
        <!-- Connection lines extending to edges -->
        <line
          x1="0"
          y1="15"
          x2="20"
          y2="15"
          stroke="currentColor"
          stroke-width="3"
        />
        <line
          x1="80"
          y1="15"
          x2="100"
          y2="15"
          stroke="currentColor"
          stroke-width="3"
        />

        <!-- Resistor zig-zag pattern -->
        <path
          d="M20,15 L25,5 L30,25 L35,5 L40,25 L45,5 L50,25 L55,5 L60,25 L65,5 L70,25 L75,5 L80,15"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linejoin="round"
        />
      {/snippet}
    </CircuitSymbol>
  {/snippet}

  {#snippet children()}
    <!-- Additional content can go here if needed -->
  {/snippet}
</CircuitNode>