// components/ModuleLevelComponent.tsx
"use client";

import { HideoutModule } from "../data/hideoutModules";

interface ModuleLevelComponentProps {
  module: HideoutModule;
  completed?: boolean; // Optional boolean prop, defaults to false
}

// Helper function to format module IDs into human-readable text
const formatModuleId = (id: string): string => {
  return id
    .split("_")
    .map((word, index) => {
      if (index === 0) return word.charAt(0).toUpperCase() + word.slice(1);
      if (word.startsWith("level")) return `Level ${word.replace("level", "")}`;
      return word;
    })
    .join(" ");
};

// Helper function to generate anchor links
const generateAnchorLink = (id: string): string => {
  return `#${id.replace(/_/g, "-").toLowerCase()}`; // e.g., "skill_attention_level3" -> "#skill-attention-level3"
};

export default function ModuleLevelComponent({
  module,
  completed = false,
}: ModuleLevelComponentProps) {
  const levelNumber = module.id.split("_").pop();
  const moduleName = formatModuleId(module.id.replace(`_${levelNumber}`, ""));

  return (
    <div
      id={module.id.replace(/_/g, "-").toLowerCase()}
      className="mb-4 p-4 bg-gray-800 border border-red-600 rounded-lg text-white"
    >
      <h4 className="text-lg font-bold mb-2">
        {moduleName} (Level {levelNumber})
      </h4>
      <p>
        <strong>Description:</strong> {module.description}
      </p>

      {completed ? (
        <span className="text-green-500 text-xl">✔</span>
      ) : (
        <>
          {/* Required Modules */}
          {module.requiredModules.length > 0 && (
            <div>
              <p>
                <strong>Required Modules:</strong>
              </p>
              <ul className="list-disc pl-5">
                {module.requiredModules.map((reqModuleId) => (
                  <li key={reqModuleId}>
                    <a
                      href={generateAnchorLink(reqModuleId)}
                      className="text-blue-400 hover:underline"
                    >
                      {formatModuleId(reqModuleId)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Items Required */}
          {module.items.length > 0 && (
            <div>
              <p>
                <strong>Items Required:</strong>
              </p>
              <ul className="list-disc pl-5">
                {module.items.map((item) => (
                  <li key={item.id}>
                    {formatModuleId(item.id)}: {item.quantity}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Money Required */}
          {module.money.rubles > 0 && (
            <p>
              <strong>Money Required:</strong> {module.money.rubles} RUB
            </p>
          )}

          {/* Trader Levels Required */}
          {module.traderLevels.length > 0 && (
            <div>
              <p>
                <strong>Trader Levels Required:</strong>
              </p>
              <ul className="list-disc pl-5">
                {module.traderLevels.map((trader, index) => (
                  <li key={index}>
                    {formatModuleId(trader.trader)} Level {trader.level}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Skill Levels Required */}
          {module.skillLevels.length > 0 && (
            <div>
              <p>
                <strong>Skill Levels Required:</strong>
              </p>
              <ul className="list-disc pl-5">
                {module.skillLevels.map((skill, index) => (
                  <li key={index}>
                    {formatModuleId(skill.skill)} Level {skill.level}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}