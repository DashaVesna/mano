
import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp,
  Heart
} from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Advantages />
      <ProcedureSteps />
      <Results />
      <FAQ />
      <Location />
      <Footer />
    </div>
  );
};

const Header: React.FC = () => (
  <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100 px-6 py-4">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold tracking-tighter text-rose-900">MANO</div>
      <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
        <a href="#about" className="hover:text-rose-600 transition-colors">Почему мы</a>
        <a href="#procedure" className="hover:text-rose-600 transition-colors">Процедура</a>
        <a href="#faq" className="hover:text-rose-600 transition-colors">Вопросы</a>
        <a href="#location" className="hover:text-rose-600 transition-colors">Уфа</a>
      </nav>
      <button className="bg-rose-500 hover:bg-rose-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all">
        Записаться
      </button>
    </div>
  </header>
);

const Hero: React.FC = () => (
  <section className="relative h-[85vh] flex items-center overflow-hidden bg-[#FDF7F7]">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">
      <div className="space-y-6">
        <span className="inline-block text-rose-500 font-semibold tracking-widest text-sm uppercase">Студия в Уфе</span>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
          Безупречная гладкость, <br /> 
          <span className="text-rose-500">которой вы доверяете</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-md">
          Профессиональная лазерная депиляция с медицинским подходом. Забудьте о раздражении и боли — только забота о вашей коже и видимый результат с первого сеанса.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-rose-200">
            Записаться на процедуру
          </button>
          <button className="bg-white border-2 border-rose-100 hover:border-rose-300 text-rose-900 px-8 py-4 rounded-xl text-lg font-bold transition-all">
            Консультация
          </button>
        </div>
      </div>
      <div className="hidden md:block relative">
        <div className="absolute -inset-4 bg-rose-200/30 rounded-full blur-3xl"></div>
        <img 
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Beauty studio" 
          className="relative rounded-[2rem] shadow-2xl object-cover h-[500px] w-full"
        />
      </div>
    </div>
  </section>
);

const Advantages: React.FC = () => {
  const items = [
    { 
      icon: <ShieldCheck className="w-8 h-8 text-rose-500" />, 
      title: "Медицинский подход", 
      desc: "Работаем на сертифицированном оборудовании. Безопасность вашего здоровья — наш главный приоритет." 
    },
    { 
      icon: <Sparkles className="w-8 h-8 text-rose-500" />, 
      title: "Комфорт без боли", 
      desc: "Система охлаждения последнего поколения делает процедуру приятной даже на чувствительных зонах." 
    },
    { 
      icon: <Zap className="w-8 h-8 text-rose-500" />, 
      title: "Любой тип волос", 
      desc: "Наши технологии эффективно работают как с темными, так и со светлыми волосами." 
    },
    { 
      icon: <Heart className="w-8 h-8 text-rose-500" />, 
      title: "Забота и стерильность", 
      desc: "Строгое соблюдение санитарных норм и индивидуальный подход к каждому гостю." 
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают Mano</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
          Мы объединили передовые технологии и искренний сервис, чтобы вы чувствовали себя уверенно.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-rose-50 hover:bg-rose-100 transition-all text-left">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-rose-900">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcedureSteps: React.FC = () => {
  const steps = [
    { num: "01", title: "Консультация", text: "Мастер оценивает состояние кожи и тип волос, исключает противопоказания." },
    { num: "02", title: "Подготовка", text: "Очищаем зону и наносим контактный гель для защиты и скольжения лазера." },
    { num: "03", title: "Процедура", text: "Аккуратная обработка зон лазером. Вы чувствуете лишь легкое тепло." },
    { num: "04", title: "Уход", text: "Наносим успокаивающее средство и даем рекомендации по домашнему уходу." }
  ];

  return (
    <section id="procedure" className="py-24 bg-[#FCFAFA]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Как проходит процедура</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <span className="text-6xl font-bold text-rose-100 absolute -top-10 -left-2 z-0">{step.num}</span>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Results: React.FC = () => (
  <section className="py-24 bg-rose-900 text-white overflow-hidden">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Результат, который вдохновляет</h2>
        <ul className="space-y-4 text-rose-100">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-rose-400 mt-1 shrink-0" />
            <span>До 30% меньше волос уже после первого визита.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-rose-400 mt-1 shrink-0" />
            <span>Никаких вросших волос и раздражения, в отличие от бритвы.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-rose-400 mt-1 shrink-0" />
            <span>Кожа становится невероятно гладкой и бархатистой.</span>
          </li>
        </ul>
        <div className="mt-10 p-6 bg-white/10 rounded-2xl border border-white/20">
          <p className="italic text-rose-100">
            "Эффект превзошел ожидания. Самое важное для меня было — отсутствие боли. В Mano действительно работают профессионалы."
          </p>
          <p className="mt-4 font-bold">— Алина, клиент Mano</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <img src="https://picsum.photos/seed/beauty1/400/500" className="rounded-2xl shadow-xl rotate-2" alt="Result 1" />
        <img src="https://picsum.photos/seed/beauty2/400/500" className="rounded-2xl shadow-xl -rotate-2 mt-12" alt="Result 2" />
      </div>
    </div>
  </section>
);

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const questions = [
    { 
      q: "Это действительно не больно?", 
      a: "Да, благодаря современной системе охлаждения и правильной настройке параметров лазера. Вы можете чувствовать лишь легкое покалывание или тепло, что абсолютно комфортно даже в зоне бикини." 
    },
    { 
      q: "Сколько процедур потребуется?", 
      a: "В среднем курс составляет 8-10 процедур с интервалом 4-6 недель. Это необходимо, так как лазер воздействует только на волосы в активной фазе роста." 
    },
    { 
      q: "Есть ли противопоказания?", 
      a: "Основные противопоказания: беременность, период лактации, кожные заболевания в зоне обработки, сахарный диабет в стадии декомпенсации. На бесплатной консультации мы подробно разберем ваш случай." 
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Развеем ваши сомнения</h2>
        <div className="space-y-4">
          {questions.map((item, idx) => (
            <div key={idx} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-rose-50/50 transition-colors"
              >
                <span className="font-bold text-gray-800">{item.q}</span>
                {openIdx === idx ? <ChevronUp className="text-rose-500" /> : <ChevronDown className="text-gray-400" />}
              </button>
              {openIdx === idx && (
                <div className="p-6 bg-rose-50/30 text-gray-600 text-sm leading-relaxed animate-fade-in">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Location: React.FC = () => (
  <section id="location" className="py-24 bg-[#FDF7F7]">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">Ждем вас в сердце Уфы</h2>
        <p className="text-gray-600">
          Студия Mano расположена так, чтобы вам было удобно заглянуть к нам после работы или в выходной день. Мы создали пространство, где время замирает, а вы отдыхаете.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="bg-rose-100 p-3 rounded-full"><MapPin className="text-rose-600 w-5 h-5" /></div>
            <div>
              <p className="font-bold">Наш адрес</p>
              <p className="text-gray-500 text-sm">Уфа, Центр (точный адрес уточняйте при записи)</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-rose-100 p-3 rounded-full"><Clock className="text-rose-600 w-5 h-5" /></div>
            <div>
              <p className="font-bold">Режим работы</p>
              <p className="text-gray-500 text-sm">Ежедневно: 09:00 – 21:00</p>
            </div>
          </div>
        </div>
        <button className="w-full sm:w-auto bg-rose-500 hover:bg-rose-600 text-white px-10 py-4 rounded-xl font-bold shadow-lg shadow-rose-200 transition-all">
          Записаться через WhatsApp
        </button>
      </div>
      <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] bg-gray-200 border-8 border-white">
        {/* Placeholder for real map */}
        <div className="w-full h-full flex items-center justify-center bg-rose-50 text-rose-300">
           <MapPin className="w-16 h-16" />
        </div>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-white border-t border-rose-100 py-12">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <div className="text-2xl font-bold tracking-tighter text-rose-900 mb-2">MANO</div>
        <p className="text-xs text-gray-400">© 2024 Mano Studio Ufa. Все права защищены.</p>
      </div>
      <div className="flex gap-6 text-sm text-gray-500">
        <a href="#" className="hover:text-rose-500 transition-colors">Инстаграм</a>
        <a href="#" className="hover:text-rose-500 transition-colors">ВКонтакте</a>
        <a href="#" className="hover:text-rose-500 transition-colors">Договор оферты</a>
      </div>
      <div className="text-center md:text-right">
        <p className="text-sm font-medium">Конфиденциально • Профессионально • С любовью</p>
      </div>
    </div>
  </footer>
);

export default App;
