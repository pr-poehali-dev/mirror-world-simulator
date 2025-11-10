import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const features = [
  {
    icon: 'Hammer',
    title: 'Строительство без границ',
    description: 'Метрическая система. Любая высота. Пристраивай этажи, гаражи, флигели. Создавай архитектурные шедевры.',
    color: '#8B5CF6',
  },
  {
    icon: 'Briefcase',
    title: 'Карьера: от кассира до президента',
    description: 'Глубокая экономика. Зарплаты как в жизни. Работай, накапливай капитал, стань лидером нации.',
    color: '#0EA5E9',
  },
  {
    icon: 'Users',
    title: 'Живые NPC с памятью',
    description: 'ИИ-система "Живых Душ". Родственные связи. Эмоции. Распорядок дня. Реакция на твои поступки.',
    color: '#D946EF',
  },
  {
    icon: 'Video',
    title: 'Mirror Films Studio',
    description: 'Снимай фильмы в игре. Продавай их. Твои ролики будут на телевизорах в барах и домах по всему миру.',
    color: '#F97316',
  },
  {
    icon: 'Building2',
    title: 'Реальные учреждения',
    description: 'МФЦ, Пенсионный фонд, банки, магазины — всё как в жизни. Абсурдная, но точная симуляция реальности.',
    color: '#10B981',
  },
  {
    icon: 'Globe',
    title: 'Инвайт-миры',
    description: 'Создай свой мир. Пригласи друзей по ссылке. Стань президентом. Принимай законы. Управляй экономикой.',
    color: '#EC4899',
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Безграничная Свобода</h2>
          <p className="text-xl text-gray-400">Делай всё, что захочешь. Без ограничений.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <Card
              key={feature.title}
              className="group bg-white/5 backdrop-blur-xl border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover-scale animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                style={{
                  backgroundColor: `${feature.color}20`,
                  boxShadow: `0 0 30px ${feature.color}40`,
                }}
              >
                <Icon name={feature.icon} size={32} style={{ color: feature.color }} />
              </div>

              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
