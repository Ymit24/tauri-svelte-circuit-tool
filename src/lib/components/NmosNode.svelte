<script lang="ts">
  import NmosNodeNew from "./circuit/primitives/NmosNode.svelte";
  
  // Props using Svelte 5 $props rune
  interface Props {
    id?: string;
    position?: { x: number; y: number };
    label?: string;
    width?: number;
    height?: number;
  }

  const props: Props = $props();
</script>

<NmosNodeNew {...props} />



