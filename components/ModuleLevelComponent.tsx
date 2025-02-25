// components/ModuleLevelComponent.tsx
"use client";

import { HideoutModule } from "../data/hideoutModules";

interface ModuleLevelComponentProps {
  module: HideoutModule;
}

export default function ModuleLevelComponent({ module }: ModuleLevelComponentProps) {
  return (
    <div className="mb-4 p-4 bg-gray-800 border border-red-600 rounded-lg text-white">
      <h4 className="text-lg font-bold mb-2">Level {module.id.split("_").pop()}</h4>
      <p><strong>Description:</strong> {module.description}</p>
      <p><strong>Construction Time:</strong> {module.constructionTime}</p>
      <p>
        <strong>Required Modules:</strong>{" "}
        {module.requiredModules.length ? module.requiredModules.join(", ") : "None"}
      </p>
      <p><strong>Items Required:</strong></p>
      <ul className="list-disc pl-5">
        {module.items.map((item) => (
          <li key={item.id}>
            {item.id.replace(/_/g, " ")}: {item.quantity}
          </li>
        ))}
      </ul>
      <p><strong>Money Required:</strong> {module.money.rubles} RUB</p>
      <p><strong>Trader Levels Required:</strong></p>
      <ul className="list-disc pl-5">
        {module.traderLevels.map((trader, index) => (
          <li key={index}>
            {trader.trader.replace(/_/g, " ")} Level {trader.level}
          </li>
        ))}
      </ul>
      <p><strong>Skill Levels Required:</strong></p>
      <ul className="list-disc pl-5">
        {module.skillLevels.map((skill, index) => (
          <li key={index}>
            {skill.skill.replace(/_/g, " ")} Level {skill.level}
          </li>
        ))}
      </ul>
    </div>
  );
}