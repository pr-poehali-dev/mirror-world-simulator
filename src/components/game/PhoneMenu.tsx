import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useGameStore } from '@/store/gameStore';

type PhoneApp = 'home' | 'jobs' | 'build' | 'map' | 'stats';

export default function PhoneMenu() {
  const [currentApp, setCurrentApp] = useState<PhoneApp>('home');
  const { playerData, setShowPhone, addBuilding, setJob, addMoney } = useGameStore();

  const jobs = [
    { id: 'cashier', title: 'Кассир в магазине', salary: 25000, icon: 'ShoppingCart' },
    { id: 'manager', title: 'Офисный менеджер', salary: 60000, icon: 'Briefcase' },
    { id: 'developer', title: 'IT-разработчик', salary: 150000, icon: 'Code' },
    { id: 'business', title: 'Владелец бизнеса', salary: 500000, icon: 'TrendingUp' },
  ];

  const buildingTypes = [
    { id: 'house', title: 'Небольшой дом', cost: 100000, icon: 'Home' },
    { id: 'office', title: 'Офисное здание', cost: 500000, icon: 'Building' },
    { id: 'shop', title: 'Магазин', cost: 250000, icon: 'Store' },
  ];

  const handleBuild = (type: string, cost: number) => {
    if (playerData.money >= cost) {
      addBuilding({
        type,
        position: [Math.random() * 20 - 10, 2.5, Math.random() * 20 - 10],
      });
      addMoney(-cost);
      alert('Здание построено!');
    } else {
      alert('Недостаточно средств!');
    }
  };

  const handleGetJob = (job: string, salary: number) => {
    setJob(job);
    addMoney(salary);
    alert(`Вы устроились на работу! Зарплата ${salary.toLocaleString()}₽ начислена.`);
  };

  return (
    <div className="relative z-10 w-[400px] h-[700px] bg-black rounded-[40px] p-4 shadow-2xl border-8 border-gray-800">
      <div className="h-full bg-gradient-to-b from-[#1A1F2C] to-[#0A0E1A] rounded-[32px] overflow-hidden flex flex-col">
        <div className="bg-black/50 backdrop-blur px-6 py-4 flex items-center justify-between">
          <span className="text-white text-sm">14:32</span>
          <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-white" />
            <div className="w-1 h-1 rounded-full bg-white" />
            <div className="w-1 h-1 rounded-full bg-white" />
          </div>
        </div>

        <div className="flex-grow overflow-y-auto p-6">
          {currentApp === 'home' && (
            <div className="grid grid-cols-2 gap-4">
              {[
                { id: 'jobs', icon: 'Briefcase', title: 'Работа', color: '#8B5CF6' },
                { id: 'build', icon: 'Hammer', title: 'Строить', color: '#0EA5E9' },
                { id: 'map', icon: 'Map', title: 'Карта', color: '#10B981' },
                { id: 'stats', icon: 'User', title: 'Профиль', color: '#F97316' },
              ].map((app) => (
                <button
                  key={app.id}
                  onClick={() => setCurrentApp(app.id as PhoneApp)}
                  className="aspect-square rounded-2xl flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform"
                  style={{ backgroundColor: `${app.color}30` }}
                >
                  <Icon name={app.icon} size={32} style={{ color: app.color }} />
                  <span className="text-white text-sm">{app.title}</span>
                </button>
              ))}
            </div>
          )}

          {currentApp === 'jobs' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Вакансии</h2>
                <Button onClick={() => setCurrentApp('home')} size="sm" variant="ghost">
                  <Icon name="ArrowLeft" size={20} />
                </Button>
              </div>
              {jobs.map((job) => (
                <Card key={job.id} className="bg-white/5 border-white/10 p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/30 flex items-center justify-center">
                      <Icon name={job.icon} size={20} className="text-[#8B5CF6]" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-white font-semibold">{job.title}</h3>
                      <p className="text-[#0EA5E9] text-sm">{job.salary.toLocaleString()}₽/мес</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleGetJob(job.title, job.salary)}
                    className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED]"
                  >
                    Устроиться
                  </Button>
                </Card>
              ))}
            </div>
          )}

          {currentApp === 'build' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Строительство</h2>
                <Button onClick={() => setCurrentApp('home')} size="sm" variant="ghost">
                  <Icon name="ArrowLeft" size={20} />
                </Button>
              </div>
              {buildingTypes.map((building) => (
                <Card key={building.id} className="bg-white/5 border-white/10 p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0EA5E9]/30 flex items-center justify-center">
                      <Icon name={building.icon} size={20} className="text-[#0EA5E9]" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-white font-semibold">{building.title}</h3>
                      <p className="text-[#F97316] text-sm">{building.cost.toLocaleString()}₽</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleBuild(building.id, building.cost)}
                    className="w-full bg-[#0EA5E9] hover:bg-[#0284C7]"
                    disabled={playerData.money < building.cost}
                  >
                    Построить
                  </Button>
                </Card>
              ))}
            </div>
          )}

          {currentApp === 'stats' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Профиль</h2>
                <Button onClick={() => setCurrentApp('home')} size="sm" variant="ghost">
                  <Icon name="ArrowLeft" size={20} />
                </Button>
              </div>
              <Card className="bg-white/5 border-white/10 p-6 space-y-4">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Имя</p>
                  <p className="text-white text-xl font-bold">{playerData.name}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Баланс</p>
                  <p className="text-[#0EA5E9] text-xl font-bold">{playerData.money.toLocaleString()}₽</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Профессия</p>
                  <p className="text-white text-lg">{playerData.job || 'Безработный'}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Постройки</p>
                  <p className="text-white text-lg">{playerData.buildings.length} шт.</p>
                </div>
              </Card>
            </div>
          )}

          {currentApp === 'map' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Карта мира</h2>
                <Button onClick={() => setCurrentApp('home')} size="sm" variant="ghost">
                  <Icon name="ArrowLeft" size={20} />
                </Button>
              </div>
              <Card className="bg-white/5 border-white/10 p-6 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Map" size={64} className="text-[#10B981] mx-auto mb-4" />
                  <p className="text-gray-400">Вы находитесь в</p>
                  <p className="text-white text-xl font-bold mt-2">Сызрань, Россия</p>
                </div>
              </Card>
            </div>
          )}
        </div>

        <div className="bg-black/50 backdrop-blur px-6 py-4 flex justify-center">
          <Button
            onClick={() => setShowPhone(false)}
            className="w-full bg-white/10 hover:bg-white/20 text-white"
          >
            Закрыть смартфон
          </Button>
        </div>
      </div>
    </div>
  );
}
