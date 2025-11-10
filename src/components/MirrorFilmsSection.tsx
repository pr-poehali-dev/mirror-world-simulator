import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function MirrorFilmsSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent via-[#0A0E1A] to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-[#D946EF]/20 to-[#8B5CF6]/20 backdrop-blur-sm border border-white/10 rounded-full">
            <span className="text-[#D946EF] font-medium">🎬 Mirror Films Studio</span>
          </div>
          
          <h2 className="text-5xl font-bold mb-6">
            Создавай Контент.<br />Влияй на Мир.
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Снимай кино, создавай рекламу, делись историями. Твои ролики появятся на экранах по всему игровому миру.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-8 text-center hover:bg-white/10 transition-all hover-scale">
            <div className="text-6xl mb-4">📹</div>
            <h3 className="text-2xl font-bold mb-3">Снимай</h3>
            <p className="text-gray-400">Используй внутриигровые инструменты камеры и монтажа</p>
          </Card>

          <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-8 text-center hover:bg-white/10 transition-all hover-scale">
            <div className="text-6xl mb-4">💰</div>
            <h3 className="text-2xl font-bold mb-3">Продавай</h3>
            <p className="text-gray-400">Зарабатывай внутриигровую валюту на своём контенте</p>
          </Card>

          <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-8 text-center hover:bg-white/10 transition-all hover-scale">
            <div className="text-6xl mb-4">📺</div>
            <h3 className="text-2xl font-bold mb-3">Транслируй</h3>
            <p className="text-gray-400">Твои ролики появятся на телевизорах в барах и домах NPC</p>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-[#D946EF]/10 to-[#8B5CF6]/10 backdrop-blur-xl border-white/10 p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">Живой Медиа-Поток</h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Создай свою студию Mirror Films и стань режиссёром, актёром, продюсером. Весь контент создаётся игроками — для игроков.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D946EF] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                    <Icon name="Camera" size={20} className="text-white" />
                  </div>
                  <span className="text-gray-300">Профессиональные инструменты камеры</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D946EF] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                    <Icon name="Film" size={20} className="text-white" />
                  </div>
                  <span className="text-gray-300">Встроенный видеоредактор</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D946EF] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                    <Icon name="TrendingUp" size={20} className="text-white" />
                  </div>
                  <span className="text-gray-300">Монетизация и рейтинги</span>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-[#D946EF] to-[#8B5CF6] hover:from-[#C026D3] hover:to-[#7C3AED] px-8 py-6 text-lg rounded-xl shadow-lg shadow-purple-500/50"
              >
                <Icon name="Video" className="mr-2" size={24} />
                Открыть Студию
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-[#1A1F2C] to-[#0A0E1A] rounded-2xl flex items-center justify-center border-2 border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#D946EF]/20 to-[#8B5CF6]/20" />
                
                <div className="relative z-10 text-center">
                  <Icon name="Play" size={64} className="text-white/50 mx-auto mb-4" />
                  <div className="text-xl text-gray-400">Предпросмотр контента</div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur px-4 py-3 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D946EF] to-[#8B5CF6]" />
                    <div>
                      <div className="text-sm font-medium">@YourStudio</div>
                      <div className="text-xs text-gray-400">1.2M просмотров</div>
                    </div>
                  </div>
                  <Icon name="Heart" size={20} className="text-red-400" />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
