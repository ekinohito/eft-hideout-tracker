"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useStore } from "@/lib/store";

export function ConfigToggles() {
  const { config, setConfig } = useStore();

  return (
    <div className="fixed bottom-10 left-10 z-50">
      <ToggleGroup
        variant={"outline"}
        type="multiple"
        value={[
          config.displayTasks ? "Q" : "",
          config.displayHideout ? "H" : "",
          config.displayFound ? "F" : "",
        ].filter(Boolean)}
        onValueChange={(value) => {
          setConfig({
            displayTasks: value.includes("Q"),
            displayHideout: value.includes("H"),
            displayFound: value.includes("F"),
          });
        }}
      >
        <ToggleGroupItem value="Q" aria-label="Toggle quests">
          Q
        </ToggleGroupItem>
        <ToggleGroupItem value="H" aria-label="Toggle hideout">
          H
        </ToggleGroupItem>
        <ToggleGroupItem value="F" aria-label="Toggle found items">
          F
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
