<script lang="ts">
  import { Node, Anchor } from "svelvet";
  import { getContext } from "svelte";

  // Props that can be passed to customize the resistor
  export let id: string | undefined = undefined;
  export let position: { x: number; y: number } | undefined = undefined;
  export let label: string = "";
  export let resistance: string = "1kΩ";
  export let bgColor = undefined;
  export let borderColor = undefined;
  export let width: number = 120;
  export let height: number = 60;

  // Get theme context for auto light/dark mode
  const isDark = getContext("theme") === "dark";
</script>

<Node {id} {position} {width} {height} bgColor="transparent" borderColor="transparent" let:grabHandle>
  <div class="resistor-container" use:grabHandle>
    <!-- Left anchor for input -->
    <Anchor id="input" input direction="west" />

    <!-- Resistor symbol -->
    <div class="resistor-symbol">
      <svg
        viewBox="0 0 100 30"
        class="resistor-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
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
      </svg>
    </div>

    <!-- Labels -->
    <div class="resistor-labels">
      {#if label}
        <div class="resistor-label">{label}</div>
      {/if}
      <div class="resistor-value">{resistance}</div>
    </div>

    <!-- Right anchor for output -->
    <Anchor id="output" output direction="east" />
  </div>
</Node>

<style>
  .resistor-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
    background: transparent;
    border: none;
    cursor: grab;
    box-shadow: none !important;
    filter: none !important;
  }

  .resistor-container:hover {
    transform: translateY(-1px);
    box-shadow: none !important;
  }

  .resistor-container:active {
    cursor: grabbing;
  }

  /* Remove shadow from Svelvet's Node wrapper */
  :global(div[role="button"]:has(.resistor-container)) {
    box-shadow: none !important;
  }

  .resistor-symbol {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  }

  .resistor-svg {
    width: 100%;
    height: 30px;
    color: var(--symbol-color, #374151);
  }

  .resistor-labels {
    position: absolute;
    bottom: -24px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    font-size: 12px;
    color: var(--text-color, #374151);
    white-space: nowrap;
    filter: none;
  }

  .resistor-label {
    font-weight: 600;
    font-size: 11px;
  }

  .resistor-value {
    font-weight: 500;
    font-size: 10px;
    color: var(--value-color, #6b7280);
  }

  /* Light theme (default) */
  .resistor-container {
    --background-color: #ffffff;
    --border-color: #e2e8f0;
    --symbol-color: #374151;
    --text-color: #374151;
    --value-color: #6b7280;
  }

  /* Dark theme */
  :global(.dark) .resistor-container,
  :global([data-theme="dark"]) .resistor-container {
    --background-color: #1f2937;
    --border-color: #4b5563;
    --symbol-color: #f3f4f6;
    --text-color: #f3f4f6;
    --value-color: #d1d5db;
  }

  /* Auto dark mode support */
  @media (prefers-color-scheme: dark) {
    .resistor-container {
      --background-color: #1f2937;
      --border-color: #4b5563;
      --symbol-color: #f3f4f6;
      --text-color: #f3f4f6;
      --value-color: #d1d5db;
    }
  }

  /* Anchor positioning - align with resistor symbol ends */
  :global(.resistor-container .anchor) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--anchor-color, #3b82f6);
    border: 2px solid var(--anchor-border, #ffffff);
    z-index: 10;
  }

  :global(.resistor-container .anchor[data-direction="west"]) {
    left: -4px;
  }

  :global(.resistor-container .anchor[data-direction="east"]) {
    right: -4px;
  }

  :global(.resistor-container .anchor:hover) {
    background: var(--anchor-hover-color, #2563eb);
    transform: translateY(-50%) scale(1.1);
  }

  /* Dark theme anchor colors */
  :global(.dark) .resistor-container,
  :global([data-theme="dark"]) .resistor-container {
    --anchor-color: #60a5fa;
    --anchor-border: #1f2937;
    --anchor-hover-color: #3b82f6;
  }

  @media (prefers-color-scheme: dark) {
    .resistor-container {
      --anchor-color: #60a5fa;
      --anchor-border: #1f2937;
      --anchor-hover-color: #3b82f6;
    }
  }
</style>
