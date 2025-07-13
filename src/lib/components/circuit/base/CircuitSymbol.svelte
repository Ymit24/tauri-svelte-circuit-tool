<script lang="ts">
  import type { CircuitSymbolProps } from "../types.js";
  import type { Snippet } from "svelte";

  interface Props extends CircuitSymbolProps {
    children: Snippet;
  }

  const {
    viewBox,
    width = 100,
    height = 60,
    className = "",
    children
  }: Props = $props();
</script>

<div class="flex-1 flex items-center justify-center">
  <svg
    {viewBox}
    class="text-gray-700 dark:text-gray-300 {className}"
    xmlns="http://www.w3.org/2000/svg"
    style="width: {width}px; height: {height}px;"
  >
    {@render children()}
  </svg>
</div>