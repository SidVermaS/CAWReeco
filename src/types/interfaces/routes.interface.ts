import React from "react";

interface NavItemsI {
  text: string;
  path: string;
}
interface RouteI {
  element: React.ComponentType;
  path: string;
}

export type { NavItemsI, RouteI };
