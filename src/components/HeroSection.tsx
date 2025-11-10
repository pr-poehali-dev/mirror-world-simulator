import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollY: number;
}

export default function HeroSection({ scrollY }: HeroSectionProps) {
  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)',
        }}
      />
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <div className="inline-block mb-6 px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <span className="text-[#0EA5E9] font-medium">✨ Цифровое Зазеркалье Земли</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-[#8B5CF6] to-[#0EA5E9] bg-clip-text text-transparent leading-tight">
            MIRROR WORLD
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Гиперреалистичный симулятор жизни на точной копии планеты Земля
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Проживи альтернативную жизнь с полной свободой воли. От кассира до президента. От хижины до небоскрёба. Твоя параллельная реальность ждёт.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] hover:from-[#7C3AED] hover:to-[#C026D3] text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-purple-500/50 hover-scale"
            >
              <Icon name="Play" className="mr-2" size={24} />
              Начать Жизнь
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 hover:bg-white/10 px-8 py-6 text-lg rounded-full"
            >
              <Icon name="Globe" className="mr-2" size={24} />
              Исследовать Мир
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-[#0EA5E9] mb-2">197</div>
              <div className="text-sm text-gray-400">Стран мира</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-[#8B5CF6] mb-2">∞</div>
              <div className="text-sm text-gray-400">Возможностей</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl font-bold text-[#D946EF] mb-2">1:1</div>
              <div className="text-sm text-gray-400">Масштаб Земли</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white/50" />
      </div>
    </section>
  );
}
