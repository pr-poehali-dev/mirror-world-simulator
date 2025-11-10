import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="py-24 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#8B5CF6] to-[#0EA5E9] bg-clip-text text-transparent">
            Готов Начать Новую Жизнь?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Цифровое зазеркалье ждёт. Твоя параллельная реальность. Твои правила.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] hover:from-[#7C3AED] hover:to-[#C026D3] px-12 py-6 text-lg rounded-full shadow-lg shadow-purple-500/50"
            >
              <Icon name="Rocket" className="mr-2" size={24} />
              Запустить Игру
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 hover:bg-white/10 px-12 py-6 text-lg rounded-full"
            >
              <Icon name="MessageCircle" className="mr-2" size={24} />
              Discord Сообщество
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] bg-clip-text text-transparent">
              MIRROR WORLD
            </h3>
            <p className="text-gray-400 text-sm">
              Гиперреалистичный симулятор жизни на цифровой копии Земли.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Игра</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">О проекте</li>
              <li className="hover:text-white cursor-pointer transition-colors">Особенности</li>
              <li className="hover:text-white cursor-pointer transition-colors">Системные требования</li>
              <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Сообщество</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Discord</li>
              <li className="hover:text-white cursor-pointer transition-colors">Reddit</li>
              <li className="hover:text-white cursor-pointer transition-colors">YouTube</li>
              <li className="hover:text-white cursor-pointer transition-colors">Twitch</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Техподдержка</li>
              <li className="hover:text-white cursor-pointer transition-colors">Документация</li>
              <li className="hover:text-white cursor-pointer transition-colors">Обратная связь</li>
              <li className="hover:text-white cursor-pointer transition-colors">Баг-репорты</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
          <div className="text-gray-400 text-sm">
            © 2025 Mirror World. Цифровая параллельная реальность.
          </div>
          
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
              <Icon name="Twitter" size={20} />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
              <Icon name="Youtube" size={20} />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
              <Icon name="Instagram" size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
