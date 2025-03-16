"use client";

import { saveAs } from 'file-saver';
import { useStore } from '@/lib/store';
import { toast } from 'sonner';

export function ExportButtons() {
    return (
        <div className="m-4 flex flex-col items-center gap-4">
            <button
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
                onClick={() => {
                    const state = useStore.getState();
                    const blob = new Blob([JSON.stringify(state, null, 2)], {
                        type: 'application/json;charset=utf-8'
                    });
                    saveAs(blob, 'hideout-state.json');
                    toast.success('Successfully saved state');
                }}
            >
                Save
            </button>
            <button
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
                onClick={async () => {
                    try {
                        const state = useStore.getState();
                        await navigator.clipboard.writeText(JSON.stringify(state, null, 2));
                        toast.success('State copied to clipboard');
                    } catch {
                        toast.error('Failed to copy state');
                    }
                }}
            >
                Copy
            </button>
            <button
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
                onClick={() => {
                    const input = document.createElement('input');
                    input.type = 'file';
                    input.accept = 'application/json';
                    input.onchange = (e) => {
                        const file = (e.target as HTMLInputElement).files?.[0];
                        if (file) {
                            const reader = new FileReader();
                            reader.onload = (event) => {
                                try {
                                    const state = JSON.parse(event.target?.result as string);
                                    useStore.setState(state);
                                    toast.success('Successfully loaded state');
                                } catch {
                                    toast.error('Invalid JSON file');
                                }
                            };
                            reader.readAsText(file);
                        }
                    };
                    input.click();
                }}
            >
                Load
            </button>
            <button
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
                onClick={() => {
                    toast('Are you sure? This cannot be undone.', {
                        action: <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors' onClick={() => {
                            useStore.getState().reset();
                            toast.success('Progress reset successfully')
                        }}>Reset</button>
                    })
                }}
            >
                Reset
            </button>
        </div>
    );
}
