// QuestRequirementsList.tsx
import { Quests } from '@/data/parsedItems/quests';
import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { useStore } from '@/lib/store';
import { cn } from '@/lib/utils';


interface QuestRequirementsListProps {
  quests: Quests;
}

const QuestRequirementsList: React.FC<QuestRequirementsListProps> = ({ quests }) => {
  const { questCompletions, setQuestCompletion } = useStore();
  return (
    <div className="container mx-auto p-4 flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Quest Requirements</h2>
      {quests.map(([questId, requirements]) => (
        <Popover key={questId}>
          <PopoverTrigger>
            <div className={cn("mb-4 p-2 bg-gray-800 text-white rounded-lg shadow-lg", questCompletions[questId] && "bg-green-800")}>
              <h3 className="text-xl font-semibold mb-2">  {requirements[0][1].questName}</h3>
            </div>
          </PopoverTrigger>
          <PopoverContent className='bg-gray-800 text-white'>
            <h3 className="text-xl font-semibold mb-2"><input
                type="checkbox"
                checked={questCompletions[questId] || false}
                onChange={(e) => setQuestCompletion(questId, e.target.checked)}
                className="mr-2"
              /> {requirements[0][1].questName}</h3>
            <ul className="list-disc pl-5">
              {requirements.map(([item, questReq], index) => (
                <li key={index} className="mb-2">
                  <span className="font-medium">{item.name}</span> -
                  <span className="ml-1">{questReq.quantity}x</span>
                  {questReq.inRaid && <span className="ml-1 text-red-400">(In Raid)</span>}
                  {questReq.notes && <span className="ml-1 text-gray-400">({questReq.notes})</span>}
                </li>
              ))}
            </ul>
          </PopoverContent>
        </Popover>

      ))}
    </div>
  );
};

export default QuestRequirementsList;