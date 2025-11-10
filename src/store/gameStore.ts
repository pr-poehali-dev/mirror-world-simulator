import { create } from 'zustand';

interface PlayerData {
  name: string;
  money: number;
  job: string | null;
  position: [number, number, number];
  buildings: Array<{
    id: string;
    type: string;
    position: [number, number, number];
  }>;
}

interface GameState {
  isPlaying: boolean;
  showPhone: boolean;
  showCharacterCreation: boolean;
  playerData: PlayerData;
  currentInteraction: string | null;
  setIsPlaying: (playing: boolean) => void;
  setShowPhone: (show: boolean) => void;
  setShowCharacterCreation: (show: boolean) => void;
  setPlayerData: (data: Partial<PlayerData>) => void;
  setCurrentInteraction: (interaction: string | null) => void;
  addBuilding: (building: { type: string; position: [number, number, number] }) => void;
  setJob: (job: string) => void;
  addMoney: (amount: number) => void;
}

export const useGameStore = create<GameState>((set) => ({
  isPlaying: false,
  showPhone: false,
  showCharacterCreation: false,
  playerData: {
    name: 'Игрок',
    money: 25000,
    job: null,
    position: [0, 0, 0],
    buildings: [],
  },
  currentInteraction: null,

  setIsPlaying: (playing) => set({ isPlaying: playing }),
  setShowPhone: (show) => set({ showPhone: show }),
  setShowCharacterCreation: (show) => set({ showCharacterCreation: show }),
  setPlayerData: (data) => set((state) => ({ 
    playerData: { ...state.playerData, ...data } 
  })),
  setCurrentInteraction: (interaction) => set({ currentInteraction: interaction }),
  
  addBuilding: (building) => set((state) => ({
    playerData: {
      ...state.playerData,
      buildings: [
        ...state.playerData.buildings,
        { ...building, id: `building-${Date.now()}` }
      ],
    },
  })),

  setJob: (job) => set((state) => ({
    playerData: { ...state.playerData, job },
  })),

  addMoney: (amount) => set((state) => ({
    playerData: { ...state.playerData, money: state.playerData.money + amount },
  })),
}));
