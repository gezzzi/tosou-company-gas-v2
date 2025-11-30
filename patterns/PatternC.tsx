import React from 'react';
import { Sun, Heart, Coffee, MessageCircle, MapPin, ChevronRight, Smile } from 'lucide-react';
import { WorkItem } from '../types';

const works: WorkItem[] = [
  { id: 1, title: 'K様邸（築20年）', category: 'まるで新築気分', imageUrl: 'https://picsum.photos/seed/warm1/600/400' },
  { id: 2, title: 'Y様邸（築15年）', category: '明るいイエローに', imageUrl: 'https://picsum.photos/seed/warm2/600/400' },
  { id: 3, title: 'T様邸（築30年）', category: 'シックなブラウン', imageUrl: 'https://picsum.photos/seed/warm3/600/400' },
];

export const PatternC: React.FC = () => {
  return (
    <div className="font-sans text-stone-600 bg-[#fdfbf7]">
      {/* Top Bar */}
      <div className="bg-brand-green text-white py-2 text-center text-sm font-medium">
        <span>🌿 地域密着30年！ 練馬区・杉並区の塗装なら「ゆたかホーム」へ</span>
      </div>

      {/* Header - Soft & Approachable */}
      <header className="py-4 px-4 md:px-8 sticky top-0 z-50 bg-[#fdfbf7]/90 backdrop-blur">
        <div className="max-w-6xl mx-auto flex justify-between items-center bg-white rounded-full shadow-lg px-6 py-3 border border-stone-100">
          <div className="flex items-center gap-2">
            <div className="text-brand-green">
               <Sun size={28} fill="currentColor" className="text-orange-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-stone-800 leading-none">ゆたかホーム</h1>
              <span className="text-[10px] text-stone-500">家族の笑顔を守る塗り替え</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-bold text-stone-600">
            <a href="#" className="hover:text-orange-500 transition-colors">はじめての方へ</a>
            <a href="#" className="hover:text-orange-500 transition-colors">施工メニュー</a>
            <a href="#" className="hover:text-orange-500 transition-colors">施工事例集</a>
            <a href="#" className="hover:text-orange-500 transition-colors">スタッフ紹介</a>
          </nav>
          <button className="bg-orange-400 hover:bg-orange-500 text-white px-5 py-2 rounded-full font-bold text-sm transition-colors shadow-md shadow-orange-200">
            かんたん見積もり
          </button>
        </div>
      </header>

      {/* Hero - Warm & Happy */}
      <section className="pt-8 pb-20 px-4">
        <div className="max-w-6xl mx-auto relative rounded-3xl overflow-hidden h-[500px] md:h-[600px] shadow-2xl shadow-stone-200">
          <img src="https://picsum.photos/seed/familyhome/1200/800" alt="Happy Family Home" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
          
          <div className="relative z-10 h-full flex items-center px-8 md:px-16">
            <div className="max-w-lg">
              <span className="inline-block bg-brand-green/10 text-brand-green px-4 py-1 rounded-full text-sm font-bold mb-4">
                お家の塗り替え専門店
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6 leading-tight">
                「ただいま」が、<br/>
                もっと嬉しくなる家へ。
              </h2>
              <p className="text-stone-600 text-lg mb-8 leading-relaxed bg-white/60 p-4 rounded-xl backdrop-blur-sm">
                そろそろ外壁の汚れ、気になりませんか？<br/>
                ゆたかホームは、家族みんなが安心して暮らせる<br/>
                あたたかい家づくりをお手伝いします。
              </p>
              <div className="flex gap-4">
                <button className="flex-1 bg-brand-green text-white py-4 rounded-xl font-bold shadow-lg shadow-green-200 hover:translate-y-[-2px] transition-transform flex items-center justify-center gap-2">
                  <MessageCircle size={20} /> LINEで相談する
                </button>
                <button className="flex-1 bg-white text-stone-800 py-4 rounded-xl font-bold shadow-lg shadow-stone-200 hover:bg-stone-50 transition-colors">
                  詳しく見る
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Point - Cards with soft shadows */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-orange-500 font-bold mb-2">YUTAKA HOME PROMISE</h3>
            <h2 className="text-3xl font-bold text-stone-800">私たちが大切にしていること</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, color: "text-red-400", bg: "bg-red-50", title: "親身なカウンセリング", text: "専門用語は使いません。お客様の「わからない」に寄り添い、納得いくまで何度でもご説明します。" },
              { icon: Smile, color: "text-yellow-500", bg: "bg-yellow-50", title: "近隣の方への配慮", text: "工事前のご挨拶はもちろん、毎日の清掃も徹底。ご近所様とも良好な関係を保てるよう努めます。" },
              { icon: Coffee, color: "text-amber-600", bg: "bg-amber-50", title: "職人のお茶出し不要", text: "お気遣いは無用です。お客様はいつものようにリラックスしてお過ごしください。" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-lg transition-shadow border border-stone-100">
                <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6 rotate-3`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">{item.title}</h3>
                <p className="text-stone-500 leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works - Grid with rounded corners */}
      <section className="py-16 bg-stone-100 rounded-t-[50px]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-stone-800">
              <span className="text-brand-green mr-2">●</span>施工事例
            </h2>
            <a href="#" className="text-stone-500 text-sm font-bold flex items-center hover:text-orange-500">
              もっと見る <ChevronRight size={16} />
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {works.map((work) => (
              <div key={work.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="aspect-[4/3] relative">
                  <img src={work.imageUrl} alt={work.title} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                    <p className="font-bold text-sm">{work.category}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-stone-800 mb-2">{work.title}</h3>
                  <div className="flex items-center text-xs text-stone-400 gap-2">
                    <MapPin size={12} /> 練馬区
                    <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                    <span>工期 10日</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Soft & Green */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-brand-green rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-xl shadow-green-900/20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">お見積もりはず〜っと無料です</h2>
            <p className="text-green-100 mb-10">
              しつこい営業電話は一切しません。<br/>
              「とりあえず金額だけ知りたい」という方も大歓迎です。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <button className="bg-white text-brand-green px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-colors shadow-lg">
                 まずは無料診断を申し込む
               </button>
               <button className="bg-orange-400 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500 transition-colors shadow-lg">
                 LINEで気軽に質問
               </button>
            </div>
            <p className="mt-6 text-sm opacity-80">
              お電話でのお問い合わせ： <span className="font-bold text-lg">0120-000-000</span> (9:00~18:00)
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-stone-400 py-10 text-center text-sm">
        <p>&copy; YUTAKA HOME Painting Co., Ltd. All Rights Reserved.</p>
      </footer>
    </div>
  );
};