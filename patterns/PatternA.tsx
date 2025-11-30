import React from 'react';
import { Shield, Home, Paintbrush, Phone, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { WorkItem, TestimonialItem } from '../types';

const works: WorkItem[] = [
  { id: 1, title: '東京都世田谷区 S様邸', category: '外壁塗装', imageUrl: 'https://picsum.photos/seed/house1/600/400' },
  { id: 2, title: '横浜市青葉区 K様邸', category: '屋根・外壁', imageUrl: 'https://picsum.photos/seed/house2/600/400' },
  { id: 3, title: '川崎市中原区 M様邸', category: '防水工事', imageUrl: 'https://picsum.photos/seed/house3/600/400' },
];

const testimonials: TestimonialItem[] = [
  { id: 1, name: '田中様', location: '東京都練馬区', text: '初めての塗装で不安でしたが、丁寧な説明で安心してお任せできました。仕上がりも新築のようで感動しました。', rating: 5 },
  { id: 2, name: '鈴木様', location: '埼玉県さいたま市', text: '職人さんのマナーが素晴らしく、近隣への配慮も完璧でした。色選びのアドバイスも的確でした。', rating: 5 },
];

export const PatternA: React.FC = () => {
  return (
    <div className="font-sans text-slate-800 bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-blue rounded flex items-center justify-center text-white font-bold text-xl">Y</div>
            <span className="text-xl font-bold tracking-tight text-slate-900">YUTAKA PAINT</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-brand-blue transition-colors">私たちの強み</a>
            <a href="#" className="hover:text-brand-blue transition-colors">施工事例</a>
            <a href="#" className="hover:text-brand-blue transition-colors">お客様の声</a>
            <a href="#" className="hover:text-brand-blue transition-colors">会社概要</a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex flex-col items-end text-right">
              <span className="text-xs text-slate-500">お見積り・ご相談無料</span>
              <span className="text-lg font-bold text-brand-blue leading-none">0120-123-456</span>
            </div>
            <button className="bg-brand-blue text-white px-6 py-2.5 rounded hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 font-bold text-sm">
              無料見積もり
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[600px] flex items-center justify-center bg-slate-900 overflow-hidden">
        <img 
          src="https://picsum.photos/seed/arch1/1920/1080" 
          alt="Hero House" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/50 text-blue-100 text-sm font-medium mb-6 backdrop-blur">
            創業50年の信頼と実績
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            家を守り、<br className="md:hidden" />未来を彩る。<br />
            <span className="text-blue-200">確かな技術</span>をあなたに。
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
            一級塗装技能士による自社施工。中間マージンなしの適正価格で、<br className="hidden md:block"/>
            あなたの愛着ある住まいを美しく蘇らせます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-brand-blue rounded text-white font-bold text-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
              <Phone size={20} /> 無料相談はこちら
            </button>
            <button className="px-8 py-4 bg-white text-slate-900 rounded font-bold text-lg hover:bg-slate-100 transition-colors">
              施工事例を見る
            </button>
          </div>
        </div>
      </section>

      {/* Features (Reliability) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">選ばれる3つの理由</h2>
            <div className="w-16 h-1 bg-brand-blue mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "最長10年の工事保証", desc: "施工後も安心のアフターフォロー体制。定期点検で長持ちをサポートします。" },
              { icon: Paintbrush, title: "一級塗装技能士在籍", desc: "国家資格を持つ熟練職人が、下地処理から仕上げまで妥協なく施工します。" },
              { icon: Home, title: "地域密着・自社施工", desc: "下請けを使わない完全自社施工だから、高品質・適正価格が実現できます。" },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center group">
                <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-brand-blue font-bold tracking-wider text-sm">WORKS</span>
              <h2 className="text-3xl font-bold mt-2">施工事例</h2>
            </div>
            <a href="#" className="hidden md:flex items-center text-brand-blue font-medium hover:underline">
              すべての事例を見る <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {works.map((work) => (
              <div key={work.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                  <img src={work.imageUrl} alt={work.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full">
                    {work.category}
                  </div>
                </div>
                <h3 className="text-lg font-bold group-hover:text-brand-blue transition-colors">{work.title}</h3>
                <p className="text-slate-500 text-sm mt-1">工事期間: 14日間 / 費用: 約120万円</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <button className="px-6 py-2 border border-brand-blue text-brand-blue rounded hover:bg-blue-50">事例をもっと見る</button>
          </div>
        </div>
      </section>

      {/* Trust/Testimonials */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">お客様からの信頼が、<br/>私たちの誇りです。</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                創業以来、地域のお客様に支えられ5000件以上の施工を行ってきました。
                ひとつひとつの現場に真心を込め、「頼んでよかった」と言っていただける仕事を追求し続けています。
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-4xl font-bold text-brand-blue mb-1">5,000<span className="text-xl text-white ml-1">件+</span></div>
                  <div className="text-sm text-slate-400">累計施工実績</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-blue mb-1">98<span className="text-xl text-white ml-1">%</span></div>
                  <div className="text-sm text-slate-400">お客様満足度</div>
                </div>
              </div>
              <button className="text-white border-b border-blue-400 pb-1 hover:text-blue-300 transition-colors">
                スタッフ紹介を見る &rarr;
              </button>
            </div>
            <div className="space-y-6">
              {testimonials.map((item) => (
                <div key={item.id} className="bg-slate-800 p-6 rounded-lg relative">
                  <div className="flex items-center gap-1 text-yellow-400 mb-2">
                    {[...Array(item.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-200 mb-4">"{item.text}"</p>
                  <div className="flex items-center justify-between border-t border-slate-700 pt-4">
                    <span className="font-bold text-sm">{item.name} <span className="text-slate-500 font-normal">({item.location})</span></span>
                    <CheckCircle size={16} className="text-green-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">お家のことでお悩みですか？</h2>
          <p className="text-blue-100 text-lg mb-10">
            外壁のひび割れ、色あせ、雨漏りの不安など。<br/>
            プロの診断員が無料で現地調査・お見積りにお伺いします。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:scale-105 transition-transform">
               無料見積もりを依頼する
             </button>
             <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-colors">
               資料請求はこちら
             </button>
          </div>
          <p className="mt-6 text-sm opacity-80">※しつこい営業は一切いたしませんのでご安心ください。</p>
        </div>
      </section>
    </div>
  );
};