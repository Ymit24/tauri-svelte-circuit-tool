<script lang="ts">
  import { Node, Anchor } from "svelvet";
  import type { BaseCircuitNodeProps, AnchorConfig } from "../types.js";
  import type { Snippet } from "svelte";

  interface Props extends BaseCircuitNodeProps {
    anchors: AnchorConfig[];
    children: Snippet;
    symbolChildren: Snippet;
    value?: string;
  }

  const {
    id = undefined,
    position = undefined,
    label = "",
    width = 120,
    height = 60,
    anchors = [],
    children,
    symbolChildren,
    value = ""
  }: Props = $props();
</script>

<Node 
  {id} 
  {position} 
  {width} 
  {height} 
  bgColor="transparent" 
  borderColor="transparent" 
  let:grabHandle
>
  <div 
    class="flex items-center justify-center w-full h-full relative bg-transparent border-none cursor-grab hover:-translate-y-0.5 transition-transform active:cursor-grabbing"
    use:grabHandle
  >
    <!-- Anchors -->
    {#each anchors as anchor}
      <div 
        class="absolute {anchor.direction === 'west' ? 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2' : ''}
               {anchor.direction === 'east' ? 'right-0 top-1/2 translate-x-1/2 -translate-y-1/2' : ''}
               {anchor.direction === 'north' ? 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' : ''}
               {anchor.direction === 'south' ? 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2' : ''}"
        style={anchor.position ? `left: ${anchor.position.x}; top: ${anchor.position.y};` : ''}
      >
        <Anchor 
          id={anchor.id} 
          input={anchor.type === 'input'} 
          output={anchor.type === 'output'} 
          direction={anchor.direction} 
        />
      </div>
    {/each}

    <!-- Symbol content -->
    {@render symbolChildren()}

    <!-- Labels -->
    <div class="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
      {#if label}
        <div class="font-semibold text-[11px]">{label}</div>
      {/if}
      {#if value}
        <div class="font-medium text-[10px] text-gray-500 dark:text-gray-400">{value}</div>
      {/if}
    </div>

    <!-- Additional content slot -->
    {@render children()}
  </div>
</Node>

<style>
  /* Remove box shadow from Svelvet's Node wrapper for all circuit nodes */
  :global(div[role="button"]) {
    box-shadow: none !important;
  }

  /* Global anchor styling for all circuit nodes */
  :global(.anchor) {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #3b82f6;
    border: 2px solid #ffffff;
    z-index: 10;
    transition: all 0.2s;
  }

  :global(.anchor:hover) {
    background-color: #2563eb;
    transform: scale(1.1);
  }

  :global(.dark .anchor) {
    background-color: #60a5fa;
    border-color: #1f2937;
  }

  :global(.dark .anchor:hover) {
    background-color: #3b82f6;
  }
</style>