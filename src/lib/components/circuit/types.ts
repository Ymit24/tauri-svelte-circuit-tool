export interface BaseCircuitNodeProps {
  id?: string;
  position?: { x: number; y: number };
  label?: string;
  width?: number;
  height?: number;
}

export interface AnchorConfig {
  id: string;
  direction: "north" | "south" | "east" | "west";
  type: "input" | "output";
  position?: {
    x?: string | number;
    y?: string | number;
  };
}

export interface CircuitSymbolProps {
  viewBox: string;
  width?: number;
  height?: number;
  className?: string;
}

export interface ResistorNodeProps extends BaseCircuitNodeProps {
  resistance?: string;
}

export interface NmosNodeProps extends BaseCircuitNodeProps {
  // NMOS-specific props can be added here
}
