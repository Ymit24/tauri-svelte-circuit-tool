<script lang="ts">
  import ResistorNodeNew from "./circuit/primitives/ResistorNode.svelte";
  
  // Props that can be passed to customize the resistor
  interface Props {
    id?: string;
    position?: { x: number; y: number };
    label?: string;
    resistance?: string;
    width?: number;
    height?: number;
  }

  const props: Props = $props();
</script>

<ResistorNodeNew {...props} />
