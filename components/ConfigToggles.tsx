"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useStore } from "@/lib/store";

export function ConfigToggles() {
  const { config, setConfig } = useStore();

  return (
    <TooltipProvider>
      <div className="sticky self-start bottom-10 left-10 z-50 mb-4 bg-gray-900 p-1 rounded-md shadow-md shadow-black">
        <ToggleGroup
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
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <ToggleGroupItem value="Q" aria-label="Toggle quests">
                  Q
                </ToggleGroupItem>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              Show quest items: {config.displayTasks ? "Yes" : "No"}
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <ToggleGroupItem value="H" aria-label="Toggle hideout">
                  H
                </ToggleGroupItem>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              Show hideout items: {config.displayHideout ? "Yes" : "No"}
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <ToggleGroupItem value="F" aria-label="Toggle found items">
                  F
                </ToggleGroupItem>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              Show already found items: {config.displayFound ? "Yes" : "No"}
            </TooltipContent>
          </Tooltip>
        </ToggleGroup>
      </div></TooltipProvider>
  );
}
