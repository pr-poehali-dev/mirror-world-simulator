import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const careers = [
  { id: 1, title: 'Кассир в магазине', salary: '25,000₽', level: 1, icon: 'ShoppingCart', color: '#10B981' },
  { id: 2, title: 'Офисный менеджер', salary: '60,000₽', level: 3, icon: 'Briefcase', color: '#0EA5E9' },
  { id: 3, title: 'IT-разработчик', salary: '150,000₽', level: 5, icon: 'Code', color: '#8B5CF6' },
  { id: 4, title: 'Владелец бизнеса', salary: '500,000₽', level: 7, icon: 'TrendingUp', color: '#F97316' },
  { id: 5, title: 'Глава корпорации', salary: '2,000,000₽', level: 9, icon: 'Building', color: '#D946EF' },
  { id: 6, title: 'Президент страны', salary: '∞', level: 10, icon: 'Crown', color: '#FBBF24' },
];

export default function CareerSystem() {
  const [selectedCareer, setSelectedCareer] = useState(careers[0]);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent via-[#1A1F2C] to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#D946EF] to-[#F97316] bg-clip-text text-transparent">
            Карьерная Лестница
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Реальная экономика. Настоящие зарплаты. Бесконечные возможности роста.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {careers.map((career) => (
              <Card
                key={career.id}
                className={`p-6 cursor-pointer transition-all duration-300 ${
                  selectedCareer.id === career.id
                    ? 'bg-white/10 border-white/30 scale-105'
                    : 'bg-white/5 border-white/10 hover:bg-white/8'
                }`}
                onClick={() => setSelectedCareer(career)}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: `${career.color}30`,
                      boxShadow: `0 0 20px ${career.color}40`,
                    }}
                  >
                    <Icon name={career.icon} size={24} style={{ color: career.color }} />
                  </div>

                  <div className="flex-grow">
                    <h4 className="text-lg font-semibold mb-1">{career.title}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <span>Уровень {career.level}</span>
                      <span>•</span>
                      <span className="font-medium" style={{ color: career.color }}>
                        {career.salary}
                      </span>
                    </div>
                  </div>

                  {selectedCareer.id === career.id && (
                    <Icon name="Check" size={24} className="text-green-400" />
                  )}
                </div>
              </Card>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/20 to-[#D946EF]/20 blur-3xl" />
            
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-12 relative">
              <div
                className="w-24 h-24 rounded-3xl flex items-center justify-center mb-8 mx-auto"
                style={{
                  backgroundColor: `${selectedCareer.color}30`,
                  boxShadow: `0 0 40px ${selectedCareer.color}60`,
                }}
              >
                <Icon name={selectedCareer.icon} size={48} style={{ color: selectedCareer.color }} />
              </div>

              <h3 className="text-3xl font-bold text-center mb-4">{selectedCareer.title}</h3>
              
              <div className="text-center mb-8">
                <div className="text-5xl font-bold mb-2" style={{ color: selectedCareer.color }}>
                  {selectedCareer.salary}
                </div>
                <div className="text-gray-400">в месяц</div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-300">
                  <Icon name="CheckCircle2" size={20} className="text-green-400 flex-shrink-0" />
                  <span>Реалистичные задачи и механики работы</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Icon name="CheckCircle2" size={20} className="text-green-400 flex-shrink-0" />
                  <span>Карьерный рост через опыт и навыки</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Icon name="CheckCircle2" size={20} className="text-green-400 flex-shrink-0" />
                  <span>Влияние на экономику и общество</span>
                </div>
              </div>

              <Button
                className="w-full py-6 text-lg rounded-xl"
                style={{
                  backgroundColor: selectedCareer.color,
                  boxShadow: `0 10px 40px ${selectedCareer.color}60`,
                }}
              >
                Начать карьеру
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
