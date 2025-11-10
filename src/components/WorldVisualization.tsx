import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

export default function WorldVisualization() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const cities = [
    { name: 'Москва', x: 55, y: 45, color: '#8B5CF6' },
    { name: 'Нью-Йорк', x: 20, y: 42, color: '#0EA5E9' },
    { name: 'Токио', x: 80, y: 48, color: '#D946EF' },
    { name: 'Сызрань', x: 58, y: 50, color: '#F97316' },
    { name: 'Париж', x: 48, y: 38, color: '#10B981' },
  ];

  return (
    <section id="world-section" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] bg-clip-text text-transparent">
            Вся Планета. Каждый Город.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Точная 3D-копия Земли с каждой улицей, каждым домом, каждым уголком
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/20 to-[#0EA5E9]/20 blur-3xl -z-10" />
          
          <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-12 relative overflow-hidden">
            <div className="relative w-full aspect-square max-w-2xl mx-auto">
              <div 
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0EA5E9]/30 via-[#8B5CF6]/20 to-[#D946EF]/30 blur-2xl"
                style={{
                  transform: `rotate(${rotation}deg)`,
                }}
              />
              
              <div className="absolute inset-0 rounded-full border-2 border-white/10" />
              <div className="absolute inset-8 rounded-full border border-white/5" />
              <div className="absolute inset-16 rounded-full border border-white/5" />
              
              {cities.map((city, idx) => (
                <div
                  key={city.name}
                  className="absolute w-4 h-4 rounded-full animate-pulse cursor-pointer group"
                  style={{
                    left: `${city.x}%`,
                    top: `${city.y}%`,
                    backgroundColor: city.color,
                    boxShadow: `0 0 20px ${city.color}`,
                    animationDelay: `${idx * 0.2}s`,
                  }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/80 px-3 py-1 rounded text-sm">
                    {city.name}
                  </div>
                </div>
              ))}

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-6xl mb-4">🌍</div>
                <div className="text-lg font-medium">Mirror World</div>
                <div className="text-sm text-gray-400">Вращение в реальном времени</div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-white/5 rounded-lg">
                <div className="text-2xl font-bold text-[#8B5CF6]">510M</div>
                <div className="text-sm text-gray-400">км² суши</div>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <div className="text-2xl font-bold text-[#0EA5E9]">4,416</div>
                <div className="text-sm text-gray-400">городов</div>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <div className="text-2xl font-bold text-[#D946EF]">100%</div>
                <div className="text-sm text-gray-400">реализм</div>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <div className="text-2xl font-bold text-[#F97316]">1см</div>
                <div className="text-sm text-gray-400">точность</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}