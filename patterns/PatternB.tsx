import React, { useState, useEffect } from 'react';
import { Layers, Crown, ArrowUpRight, Menu, Phone, Mail, ChevronDown, ShieldCheck, MapPin } from 'lucide-react';
import { WorkItem } from '../types';

const works: WorkItem[] = [
  { id: 1, title: '世田谷区 S様邸', category: '外壁塗装 / プレミアム無機塗料', imageUrl: 'https://images.unsplash.com/photo-1600596542815-e32870533ed2?auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: '横浜市 K様邸', category: '屋根・外壁 / 遮熱フッ素', imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: '目黒区 Mマンション', category: '大規模修繕 / 防水工事', imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80' },
  { id: 4, title: '鎌倉市 A様邸', category: '木部再生 / 特殊塗装', imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
];

const features = [
  {
    title: "国家資格・一級塗装技能士",
    sub: "SKILL",
    desc: "在籍職人はすべて国家資格保有者。妥協を許さない熟練の技術が、10年後の美しさまで保証します。",
    icon: Crown
  },
  {
    title: "最高品質・無機塗料",
    sub: "MATERIAL",
    desc: "国内最高峰の耐久性を誇る無機塗料や遮熱塗料を厳選。建物の寿命を延ばすための投資として最適な提案を。",
    icon: Layers
  },
  {
    title: "完全自社施工・保証",
    sub: "PROMISE",
    desc: "下請けを使わない完全自社施工だからこそ実現できる適正価格と責任感。最長15年の工事保証をお付けします。",
    icon: ShieldCheck
  }
];

export const PatternB: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-serif bg-white text-zinc-900 selection:bg-brand-gold selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md py-4 border-zinc-200 text-zinc-900 shadow-sm' 
          : 'bg-transparent py-6 border-white/10 text-white'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-brand-gold text-white flex items-center justify-center font-bold text-xl rounded-sm shadow-md">Y</div>
            <div>
              <div className="text-xl font-bold tracking-widest leading-none">YUTAKA</div>
              <div className="text-[10px] tracking-[0.2em] mt-1 font-sans opacity-80">PAINT & RENOVATION</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <ul className="flex gap-8 text-sm font-sans tracking-widest uppercase font-medium">
              <li><a href="#about" className="hover:text-brand-gold transition-colors">Philosophy</a></li>
              <li><a href="#works" className="hover:text-brand-gold transition-colors">Works</a></li>
              <li><a href="#service" className="hover:text-brand-gold transition-colors">Service</a></li>
              <li><a href="#company" className="hover:text-brand-gold transition-colors">Company</a></li>
            </ul>
            <div className="flex gap-4">
              <a href="#contact" className={`px-6 py-2 bg-transparent border transition-all font-sans text-xs tracking-wider flex items-center gap-2 ${
                scrolled ? 'border-zinc-300 hover:border-brand-gold hover:text-brand-gold' : 'border-white/30 hover:border-brand-gold hover:text-brand-gold'
              }`}>
                <Mail size={14} /> 資料請求
              </a>
              <a href="#contact" className="px-6 py-2 bg-brand-gold text-white font-bold font-sans text-xs tracking-wider hover:bg-zinc-800 transition-colors flex items-center gap-2 shadow-lg shadow-brand-gold/20">
                <Phone size={14} /> 無料見積
              </a>
            </div>
          </div>

          <button className={`${scrolled ? 'text-zinc-900' : 'text-white' } md:hidden`} onClick={() => setMenuOpen(!menuOpen)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-zinc-900">
        {/* Background Image with Parallax-like effect */}
        <div className="absolute inset-0">
           <img 
             src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
             className="w-full h-full object-cover opacity-60 scale-105" 
             alt="Luxury Home" 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-end pb-20">
          <div className="md:col-span-8">
            <p className="text-brand-gold tracking-[0.3em] text-sm mb-6 font-sans font-bold flex items-center gap-3">
              <span className="w-8 h-[1px] bg-brand-gold"></span>
              SINCE 1974
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-8 tracking-wide font-serif drop-shadow-lg">
              邸宅の品格を、<br/>
              塗り替える。
            </h1>
            <div className="bg-white/10 backdrop-blur-sm p-6 border-l-4 border-brand-gold inline-block max-w-xl">
              <p className="text-zinc-100 text-base md:text-lg font-sans leading-relaxed">
                塗装は、建物を守る「鎧」であり、<br className="hidden md:block" />
                住まう人の美意識を映し出す「衣装」でもある。<br className="hidden md:block" />
                妥協なき職人魂が宿る、至高の外壁塗装をご提供します。
              </p>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col items-start md:items-end justify-end">
             <div className="animate-bounce mb-4 text-white">
               <ChevronDown size={24} />
             </div>
             <span className="text-xs font-sans tracking-[0.2em] text-white/80 rotate-90 origin-right translate-x-4">SCROLL DOWN</span>
          </div>
        </div>
      </header>

      {/* Philosophy / About */}
      <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-10 text-[10rem] font-bold text-zinc-50 font-serif select-none pointer-events-none">
          PRIDE
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="order-2 md:order-1">
               <div className="aspect-[4/5] bg-zinc-100 relative z-10 overflow-hidden rounded-sm shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop" alt="塗装職人" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-6 left-6 bg-white/90 text-zinc-900 px-5 py-3 font-bold font-sans text-xs tracking-widest shadow-lg border-l-2 border-brand-gold">
                    MASTER CRAFTSMAN
                  </div>
               </div>
               {/* Decorative border */}
               <div className="hidden md:block absolute top-10 left-10 w-[80%] h-[90%] border border-zinc-200 -z-10 translate-y-8 -translate-x-8"></div>
             </div>
             
             <div className="order-1 md:order-2">
               <span className="text-brand-gold font-sans tracking-widest text-xs font-bold mb-4 block flex items-center gap-2">
                 <span className="w-6 h-[1px] bg-brand-gold"></span>私たちの美学
               </span>
               <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-snug font-serif text-zinc-900">
                 見えない下地こそ、<br/>
                 美しくあれ。
               </h2>
               <div className="space-y-6 text-zinc-600 font-sans leading-relaxed text-justify">
                 <p>
                   一見綺麗に仕上がった壁も、下地処理が甘ければ数年で輝きを失います。
                   私たちユタカホームの職人は、仕上げの塗料を塗る前の工程に、全工程の7割の時間を費やします。
                 </p>
                 <p>
                   ひび割れ一つ、浮き一つ見逃さない徹底的な調査と補修。
                   それは、お客様の目には触れない部分かもしれません。
                   しかし、その「見えないこだわり」こそが、10年、20年と続く安心を生み出すと信じています。
                 </p>
               </div>
               <div className="mt-10">
                 <div className="font-serif text-3xl italic text-zinc-400">Kenichi Toyoda</div>
                 <p className="mt-2 text-xs font-sans tracking-widest text-zinc-400">代表取締役・一級塗装技能士 <br/> 豊田 健一</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, idx) => (
              <div key={idx} className="group p-8 bg-white border border-zinc-200 hover:border-brand-gold/50 hover:shadow-xl transition-all duration-500 relative overflow-hidden rounded-sm">
                <div className="absolute -right-10 -bottom-10 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity text-zinc-900">
                  <feature.icon size={150} />
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-600 group-hover:bg-brand-gold group-hover:text-white group-hover:border-brand-gold transition-colors shadow-sm">
                    <feature.icon size={24} />
                  </div>
                  <span className="text-brand-gold font-sans text-xs tracking-[0.2em] font-bold">{feature.sub}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 font-serif text-zinc-900">{feature.title}</h3>
                <p className="text-zinc-600 text-sm leading-7 font-sans">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Menu */}
      <section id="service" className="py-32 bg-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-50 -z-0 hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-brand-gold font-sans tracking-widest text-xs font-bold">OUR SERVICES</span>
            <h2 className="text-4xl font-bold mt-4 font-serif text-zinc-900">提供する価値</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-zinc-200 bg-white shadow-xl">
            {[
              { en: "Exterior", jp: "外壁塗装", desc: "美観と保護を両立する、建物のアンチエイジング。" },
              { en: "Roof", jp: "屋根塗装", desc: "遮熱・断熱機能で、暮らしの快適性を向上。" },
              { en: "Waterproof", jp: "防水工事", desc: "雨水の浸入を完全シャットアウト。建物の寿命を守る。" },
              { en: "Renovation", jp: "内装・リノベ", desc: "空間の価値を再定義する、トータルコーディネート。" },
            ].map((item, i) => (
              <div key={i} className="group relative h-80 border-b md:border-b-0 lg:border-r border-zinc-200 last:border-r-0 hover:bg-zinc-50 transition-colors cursor-pointer flex flex-col items-center justify-center text-center p-6">
                <div className="text-zinc-100 text-6xl font-serif font-bold absolute top-6 left-6 group-hover:text-brand-gold/10 transition-colors">0{i+1}</div>
                <h3 className="text-xl font-bold font-sans tracking-widest mb-2 text-zinc-400 group-hover:text-brand-gold transition-colors">{item.en}</h3>
                <p className="text-2xl font-serif font-bold mb-4 text-zinc-900">{item.jp}</p>
                <div className="w-8 h-[1px] bg-zinc-300 mb-4 group-hover:w-16 group-hover:bg-brand-gold transition-all"></div>
                <p className="text-xs text-zinc-500 font-sans max-w-[200px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works Gallery */}
      <section id="works" className="py-32 bg-zinc-50 text-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
             <div>
               <span className="text-brand-gold font-sans tracking-widest text-xs font-bold uppercase">Portfolio</span>
               <h2 className="text-4xl font-bold mt-2 font-serif">施工事例</h2>
               <p className="text-zinc-500 mt-4 font-sans text-sm">技術と美意識の結晶をご覧ください。</p>
             </div>
             <a href="#" className="hidden md:flex items-center gap-2 font-sans font-bold text-sm border-b border-zinc-900 pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors">
               すべての事例を見る <ArrowUpRight size={16} />
             </a>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
             {works.map((work, idx) => (
               <div key={work.id} className={`group cursor-pointer ${idx % 2 === 1 ? 'md:translate-y-16' : ''}`}>
                 <div className="relative overflow-hidden aspect-[4/3] mb-6 shadow-xl bg-zinc-200">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 duration-500"></div>
                    <img src={work.imageUrl} alt={work.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute bottom-0 left-0 bg-white/95 backdrop-blur px-6 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20 w-full border-t border-brand-gold">
                       <span className="text-brand-gold text-xs font-bold tracking-widest font-sans block mb-1">VIEW DETAILS</span>
                    </div>
                 </div>
                 <div className="flex justify-between items-start border-t border-zinc-300 pt-4">
                   <div>
                     <h3 className="text-2xl font-bold group-hover:text-brand-gold transition-colors font-serif text-zinc-900">{work.title}</h3>
                     <p className="text-zinc-500 font-sans text-xs mt-2 tracking-wide uppercase">{work.category}</p>
                   </div>
                   <div className="w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all">
                      <ArrowUpRight size={18} />
                   </div>
                 </div>
               </div>
             ))}
           </div>
           
           <div className="mt-24 text-center md:hidden">
              <button className="bg-zinc-900 text-white px-8 py-4 w-full font-bold">もっと見る</button>
           </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-24 bg-white border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-3xl font-serif font-bold mb-16 text-zinc-900">施工までの流れ</h2>
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-zinc-200 md:left-1/2 md:-ml-[1px]"></div>
            
            {[
              { step: "01", title: "現地調査・診断", text: "専門スタッフが建物の劣化状況を詳細にチェックします。ドローンによる屋根点検も可能です。" },
              { step: "02", title: "プランのご提案", text: "診断結果に基づき、最適な塗料と工法をご提案。お見積書は明細まで細かく記載し、ご説明します。" },
              { step: "03", title: "ご契約・色決め", text: "プランにご納得いただけましたらご契約。カラーシミュレーションで完成イメージを共有します。" },
              { step: "04", title: "近隣ご挨拶・着工", text: "工事前には近隣の方々へ粗品を持ってご挨拶に伺います。足場設置から工事が始まります。" },
              { step: "05", title: "完了検査・お引渡し", text: "お客様立会いのもと最終チェックを行い、問題がなければお引渡し。保証書を発行いたします。" },
            ].map((item, idx) => (
              <div key={idx} className={`relative flex items-start mb-12 md:mb-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} md:justify-between group`}>
                <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full bg-white border-2 border-brand-gold flex items-center justify-center text-brand-gold font-bold z-10 shrink-0 shadow-lg">
                  {item.step}
                </div>
                <div className={`ml-6 md:ml-0 md:w-[45%] ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'} pl-4 md:pl-0`}>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2 font-serif group-hover:text-brand-gold transition-colors">{item.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed font-sans">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-24 bg-zinc-50 relative overflow-hidden border-t border-zinc-200">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-zinc-200/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif text-zinc-900">Ready for Transformation?</h2>
          <p className="text-zinc-600 mb-12 text-lg font-sans">
            本物の塗装を求める方へ。<br/>
            まずは無料の現地調査・お見積りから始めましょう。<br/>
            <span className="text-xs text-zinc-500 mt-2 block">※強引な営業は私たちの美学に反するため、一切行いません。</span>
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
             <div className="bg-white text-zinc-900 p-8 rounded-sm text-center shadow-xl hover:translate-y-[-5px] transition-transform cursor-pointer border border-zinc-100">
                <Phone size={32} className="mx-auto mb-4 text-brand-gold" />
                <h3 className="text-xl font-bold mb-2">お電話でのお問い合わせ</h3>
                <p className="text-2xl font-bold tracking-widest font-sans mb-1">0120-123-456</p>
                <p className="text-xs text-zinc-500">受付時間 9:00 - 18:00 (水曜定休)</p>
             </div>
             <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-sm text-center shadow-xl hover:bg-zinc-800 transition-colors cursor-pointer group">
                <Mail size={32} className="mx-auto mb-4 text-zinc-400 group-hover:text-brand-gold transition-colors" />
                <h3 className="text-xl font-bold mb-2 text-white">Webからのお問い合わせ</h3>
                <p className="text-sm text-zinc-400 mb-4">24時間受付中・資料請求もこちら</p>
                <span className="inline-block border-b border-brand-gold text-brand-gold pb-1 text-sm font-bold tracking-wider">フォームを開く</span>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-400 py-16 font-sans text-sm">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
           <div className="md:col-span-1">
             <div className="text-white text-2xl font-bold tracking-widest mb-4">YUTAKA</div>
             <p className="leading-relaxed text-xs">
               株式会社ユタカホーム<br/>
               東京都世田谷区塗装町 1-2-3<br/>
               建設業許可 東京都知事 (般-00) 第00000号
             </p>
           </div>
           <div>
             <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Services</h4>
             <ul className="space-y-2 text-xs">
               <li><a href="#" className="hover:text-white transition-colors">外壁塗装</a></li>
               <li><a href="#" className="hover:text-white transition-colors">屋根塗装</a></li>
               <li><a href="#" className="hover:text-white transition-colors">防水工事</a></li>
               <li><a href="#" className="hover:text-white transition-colors">内装リフォーム</a></li>
             </ul>
           </div>
           <div>
             <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Company</h4>
             <ul className="space-y-2 text-xs">
               <li><a href="#" className="hover:text-white transition-colors">私たちについて</a></li>
               <li><a href="#" className="hover:text-white transition-colors">スタッフ紹介</a></li>
               <li><a href="#" className="hover:text-white transition-colors">施工事例</a></li>
               <li><a href="#" className="hover:text-white transition-colors">採用情報</a></li>
             </ul>
           </div>
           <div>
             <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Area</h4>
             <div className="flex gap-2 items-start text-xs">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                <p>世田谷区、目黒区、渋谷区、横浜市北部、川崎市中部など<br/>※詳細エリアはお問い合わせください</p>
             </div>
           </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-xs">
           <p>&copy; 2024 YUTAKA HOME CO.,LTD. All Rights Reserved.</p>
           <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           </div>
        </div>
      </footer>
    </div>
  );
};