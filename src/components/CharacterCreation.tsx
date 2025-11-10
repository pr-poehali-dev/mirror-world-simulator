import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useGameStore } from '@/store/gameStore';

export default function CharacterCreation() {
  const [name, setName] = useState('');
  const { setPlayerData, setIsPlaying, setShowCharacterCreation } = useGameStore();

  const handleStart = () => {
    if (!name.trim()) {
      alert('Введите имя персонажа!');
      return;
    }

    setPlayerData({ name: name.trim() });
    setShowCharacterCreation(false);
    setIsPlaying(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <Card className="bg-gradient-to-b from-[#1A1F2C] to-[#0A0E1A] border-white/10 p-12 max-w-2xl w-full mx-6">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">👤</div>
          <h2 className="text-4xl font-bold text-white mb-4">Создание Персонажа</h2>
          <p className="text-gray-400 text-lg">
            Добро пожаловать в Mirror World — цифровое зазеркалье Земли
          </p>
        </div>

        <div className="space-y-6 mb-8">
          <div>
            <label className="text-white font-medium mb-2 block">Имя персонажа</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Введите имя..."
              className="bg-white/5 border-white/10 text-white text-lg py-6"
              maxLength={20}
            />
          </div>

          <Card className="bg-white/5 border-white/10 p-6">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Icon name="Info" size={20} className="text-[#0EA5E9]" />
              Стартовые условия
            </h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} className="text-[#8B5CF6]" />
                <span>Локация: Сызрань, Россия</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Wallet" size={16} className="text-[#0EA5E9]" />
                <span>Стартовый капитал: 25,000₽</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Briefcase" size={16} className="text-[#10B981]" />
                <span>Профессия: Безработный</span>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-r from-[#8B5CF6]/10 to-[#0EA5E9]/10 border-[#8B5CF6]/30 p-6">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Icon name="Lightbulb" size={20} className="text-[#FBBF24]" />
              Подсказка
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Используйте <kbd className="px-2 py-1 bg-white/10 rounded text-xs">W A S D</kbd> для передвижения и 
              <kbd className="px-2 py-1 bg-white/10 rounded text-xs ml-1">T</kbd> чтобы открыть смартфон. 
              В смартфоне вы можете найти работу, построить дом или посмотреть карту мира.
            </p>
          </Card>
        </div>

        <Button
          onClick={handleStart}
          className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] hover:from-[#7C3AED] hover:to-[#0284C7] text-white py-6 text-lg rounded-xl shadow-lg shadow-purple-500/50"
        >
          <Icon name="Play" className="mr-2" size={24} />
          Начать Новую Жизнь
        </Button>
      </Card>
    </div>
  );
}
