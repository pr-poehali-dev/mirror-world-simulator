import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const buildingFeatures = [
  {
    title: 'Метрическая система',
    description: 'Сантиметры и метры вместо блоков',
    icon: 'Ruler',
  },
  {
    title: 'Любая высота',
    description: 'От хижины до 500-этажного небоскрёба',
    icon: 'TrendingUp',
  },
  {
    title: 'Пристройки',
    description: 'Гаражи, веранды, флигели, мансарды',
    icon: 'Home',
  },
  {
    title: 'Полная кастомизация',
    description: 'Интерьер, телевизоры, мебель, декор',
    icon: 'Paintbrush',
  },
];

export default function BuildingShowcase() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#F97316] to-[#FBBF24] bg-clip-text text-transparent">
              Строй Без Границ
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Никаких ограничений по высоте, ширине или фантазии. Реалистичная физика. Точные измерения. Бесконечные возможности.
            </p>

            <div className="space-y-4">
              {buildingFeatures.map((feature, idx) => (
                <Card
                  key={feature.title}
                  className="bg-white/5 backdrop-blur-xl border-white/10 p-6 hover:bg-white/10 transition-all animate-fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F97316] to-[#FBBF24] flex items-center justify-center flex-shrink-0">
                      <Icon name={feature.icon} size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/20 to-[#FBBF24]/20 blur-3xl" />
            
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-8 relative">
              <div className="aspect-square bg-gradient-to-br from-[#1A1F2C] to-[#0A0E1A] rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
                
                <div className="relative z-10">
                  <div className="text-8xl mb-4 text-center">🏗️</div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#F97316] mb-2">∞</div>
                    <div className="text-gray-400">возможностей</div>
                  </div>
                </div>

                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-sm">
                  <Icon name="Ruler" size={14} className="inline mr-1" />
                  Высота: 125.5м
                </div>

                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-sm">
                  <Icon name="Home" size={14} className="inline mr-1" />
                  45 этажей
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#F97316]">0</div>
                  <div className="text-xs text-gray-400">Ограничений</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#FBBF24]">100%</div>
                  <div className="text-xs text-gray-400">Реализм</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#F97316]">1см</div>
                  <div className="text-xs text-gray-400">Точность</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
