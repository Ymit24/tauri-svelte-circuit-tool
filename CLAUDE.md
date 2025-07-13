# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Tauri-based desktop application for circuit design and simulation, built with SvelteKit 5 (using Svelte Runes), TypeScript, and Tailwind CSS. The app uses Svelvet for the visual circuit canvas and includes a comprehensive UI component library based on bits-ui.

## Architecture

### Frontend (SvelteKit + Svelte 5)
- **Main App**: `src/routes/+page.svelte` - Contains the main Svelvet canvas with circuit components
- **Layout**: `src/routes/+layout.svelte` - Provides app shell with sidebar, resizable panes, and console area
- **Components**: 
  - `src/lib/components/ResistorNode.svelte` - Custom resistor component for the circuit canvas
  - `src/lib/components/ui/` - Comprehensive UI component library (buttons, dialogs, sidebars, etc.)
  - `src/lib/components/app-sidebar.svelte` - Main application sidebar
  - `src/lib/components/theme-toggle.svelte` - Dark/light mode toggle

### Backend (Tauri + Rust)
- **Main**: `src-tauri/src/main.rs` - Tauri application entry point
- **Configuration**: `src-tauri/tauri.conf.json` - Tauri app configuration
- **Build**: `src-tauri/build.rs` - Build script for Rust backend

### Key Libraries
- **Svelvet**: Visual flow/circuit canvas library for node-based interfaces
- **bits-ui**: Unstyled, accessible UI component primitives
- **mode-watcher**: Theme management for light/dark mode
- **Tailwind CSS v4**: Styling with Vite plugin

## Development Commands

### Frontend Development
```bash
npm run dev          # Start SvelteKit dev server (runs on http://localhost:1420)
npm run build        # Build SvelteKit app for production
npm run preview      # Preview production build
npm run check        # Run Svelte type checking
npm run check:watch  # Run type checking in watch mode
```

### Tauri Development
```bash
npm run tauri dev    # Start Tauri app in development mode
npm run tauri build  # Build Tauri app for production
```

## Key Configuration

- **SvelteKit**: Uses `@sveltejs/adapter-static` for static site generation (required for Tauri)
- **Vite**: Configured for Tauri with fixed port (1420) and HMR support
- **TypeScript**: Full TypeScript support with strict type checking
- **Tailwind**: v4 with Vite plugin integration

## Component Development Patterns

### Custom Svelvet Nodes
When creating new circuit components, follow the pattern established in `ResistorNode.svelte`:
- Use Svelvet's `Node` and `Anchor` components
- Include input/output anchors with proper directions
- Implement theme support with CSS custom properties
- Use SVG for circuit symbols
- Position labels below the component

### UI Components
The project uses a comprehensive UI component library in `src/lib/components/ui/`. When adding new UI elements:
- Check existing components first
- Follow the established patterns using bits-ui primitives
- Maintain theme consistency
- Use TypeScript for proper type safety

## File Structure Notes

- Svelte 5 uses the new runes syntax (`$state`, `$props`, etc.)
- Components use `.svelte` extension with `<script lang="ts">` for TypeScript
- Alias `$lib` points to `src/lib/` directory
- Static assets go in `static/` directory
- Tauri-specific code lives in `src-tauri/` directory