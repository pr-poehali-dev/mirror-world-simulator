import { useGameStore } from '@/store/gameStore';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import PhoneMenu from './PhoneMenu';

export default function GameUI() {
  const { playerData, showPhone, setIsPlaying, setShowPhone } = useGameStore();

  return (
    <>
      <div className="fixed top-6 left-6 z-50">
        <Card className="bg-black/60 backdrop-blur-xl border-white/20 px-6 py-4">
          <div className="space-y-2 text-white">
            <div className="flex items-center gap-2">
              <Icon name="User" size={18} className="text-[#8B5CF6]" />
              <span className="font-medium">{playerData.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Wallet" size={18} className="text-[#0EA5E9]" />
              <span>{playerData.money.toLocaleString()}₽</span>
            </div>
            {playerData.job && (
              <div className="flex items-center gap-2">
                <Icon name="Briefcase" size={18} className="text-[#10B981]" />
                <span className="text-sm">{playerData.job}</span>
              </div>
            )}
          </div>
        </Card>
      </div>

      <div className="fixed top-6 right-6 z-50">
        <Button
          onClick={() => setIsPlaying(false)}
          variant="outline"
          className="bg-black/60 backdrop-blur-xl border-white/20 hover:bg-red-500/20"
        >
          <Icon name="X" size={18} className="mr-2" />
          Выйти
        </Button>
      </div>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <Card className="bg-black/60 backdrop-blur-xl border-white/20 px-6 py-3">
          <div className="flex items-center gap-6 text-white text-sm">
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 bg-white/10 rounded">W</kbd>
              <kbd className="px-2 py-1 bg-white/10 rounded">A</kbd>
              <kbd className="px-2 py-1 bg-white/10 rounded">S</kbd>
              <kbd className="px-2 py-1 bg-white/10 rounded">D</kbd>
              <span className="text-gray-400">— Движение</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 bg-white/10 rounded">T</kbd>
              <span className="text-gray-400">— Смартфон</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Mouse" size={16} />
              <span className="text-gray-400">— Обзор</span>
            </div>
          </div>
        </Card>
      </div>

      {showPhone && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowPhone(false)} />
          <PhoneMenu />
        </div>
      )}
    </>
  );
}
