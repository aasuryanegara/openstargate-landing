
import React from "react";

// Translations for each language
const translations = {
  en: {
    welcome: "✨ Welcome to OpenStarGate",
    intro: `In a world where artificial intelligence governs the pulse of civilization, OpenStarGate emerges from a legendary super-intelligence laboratory as a beacon of transformation. Born from the collaboration between elite blockchain developers and visionary scientists, OpenStarGate is not just a platform — it is an AI entity, a decentralized oracle of prediction, and the guardian of transparent wealth.
Our Mission: To redefine entertainment, finance, and fairness by combining the power of AI prediction algorithms with blockchain transparency.`,
    visionTitle: "🔮 Our vision",
    vision: `The OpenStarGate saga has only just begun.
We envision a world where everyone can participate in a digital economy that is fair, transparent and rewarding. OpenStarGate is more than just a guessing game. It is the beginning of the “Fortune Economy of Lucky Intelligence”.
Our roadmap includes
* developing various decentralized games (strategy, prediction, education)
* promoting decentralized values globally
* and allowing players to gain wealth while having fun
By transforming prediction into a way of life, OpenStarGate enables users to find their own rhythm in an unpredictable world.`,
    tokenTitle: "🌟 Token Model: OPS & OPSUSDT",
    token: `OPS Token: The native utility token representing the spirit of OpenStarGate.
* Minted fairly through user interaction, not controlled by institutions
* A symbol of wealth, luck, and wisdom
OPSUSDT Token: A stable game reward token
* Given as mining credit even upon game loss
* Fuels continued participation and long-term engagement
Game Design Highlights:
* Most users have a high probability of correct prediction
* Even loss contributes value (token mining credit)
* Players define how they play without compromising expected returns`,
    economyTitle: "🔷 Sustainable Economic Model",
    economy: `OpenStarGate’s economic framework is designed to achieve long-term stability through the following key mechanisms:

✔ Price-driven model – unlocking conditions are directly linked to price performance.

✔ Strong liquidity support – tiered liquidity enhances market depth and reduces volatility.

✔ Game integration token demand – $OPS is deeply embedded in the OpenStarGate ecosystem, continuously driving buying pressure.

✔ Optimized issuance schedule – structured token unlocking mechanism prevents oversupply.

Through a strong market protection strategy, OpenStarGate ensures that the ecosystem is stable, fair, and sustainable, creating long-term value and wealth for all participants.`,
    faqTitle: "❓ Frequently Asked Questions",
    faqs: [
      {
        q: "Q1: Is OpenStarGate fair?",
        a: "Yes. All predictions and results are transparent tamper-proof data and can be audited at any time.",
      },
      {
        q: "Q2: What is the role of OPS tokens?",
        a: "The value of OPS grows with time and users. Its value is unlimited and can be used for gaming, earning money and participating in governance, etc.",
      },
      {
        q: "Q3: Can I still make money even if I lose?",
        a: "Yes. In a special case, even if you lose a game, you can still get OPSUSDT as mining capital, turning losses into future gains.",
      },
      {
        q: "Q4: How do I join?",
        a: "Register through our app or website to start playing with USDT immediately.",
      },
      {
        q: "Q5: Is OpenStarGate sustainable?",
        a: "Of course. A small fee is charged to support research and development and infrastructure to continuously train the OpenStarGate AI.",
      },
    ],
    teamTitle: "🧑‍💻 Meet the Core Team",
    team: `Dr. Zeon – Founder & Chief AI Architect
Ex-NASA machine learning scientist and creator of the prediction logic behind OpenStarGate’s intelligence.
Lina Owei – COO & Tokenomics Designer
Blockchain economist and token strategist who designed OPS’s fair minting and reward structure.
Kevin Suharto – Head of Community & Partnerships
with years of experience in building communities across Asia and LATAM.
OpenStarGate (AI) – Lead Game Designer
The AI persona behind the games, trained on thousands of blockchain datasets and probability theories.`,
    beginTitle: "✨ Begin Your Journey",
    begin: `OpenStarGate is ready to take you beyond the limits of games. Explore the future of entertainment, economics, and evolution 
Dare to predict. Dare to win. Dare to open the star gate.`
  },
  id: {
    welcome: "✨ Selamat datang di OpenStarGate",
    intro: `Di dunia di mana kecerdasan buatan mengendalikan nadi peradaban, OpenStarGate muncul dari laboratorium super-intelejen legendaris sebagai mercusuar perubahan. Lahir dari kolaborasi antara pengembang blockchain elit dan ilmuwan visioner, OpenStarGate bukan sekadar platform — ini adalah entitas AI, oracle prediksi terdesentralisasi, dan penjaga kekayaan yang transparan.
Misi Kami: Mendefinisikan ulang hiburan, keuangan, dan keadilan dengan menggabungkan kekuatan algoritma prediksi AI dan transparansi blockchain.`,
    visionTitle: "🔮 Visi Kami",
    vision: `Kisah OpenStarGate baru saja dimulai.
Kami membayangkan dunia di mana semua orang dapat berpartisipasi dalam ekonomi digital yang adil, transparan, dan menguntungkan. OpenStarGate lebih dari sekadar permainan tebak-tebakan. Ini adalah awal dari "Ekonomi Keberuntungan Kecerdasan".
Roadmap kami meliputi
* mengembangkan berbagai game terdesentralisasi (strategi, prediksi, edukasi)
* mempromosikan nilai-nilai desentralisasi ke seluruh dunia
* dan memungkinkan pemain memperoleh kekayaan sambil bersenang-senang
Dengan mengubah prediksi menjadi gaya hidup, OpenStarGate membantu pengguna menemukan irama mereka sendiri di dunia yang tak terduga.`,
    tokenTitle: "🌟 Model Token: OPS & OPSUSDT",
    token: `Token OPS: Token utilitas asli yang merepresentasikan semangat OpenStarGate.
* Dicetak secara adil melalui interaksi pengguna, tidak dikontrol institusi
* Simbol kekayaan, keberuntungan, dan kebijaksanaan
Token OPSUSDT: Token hadiah permainan yang stabil
* Diberikan sebagai kredit penambangan bahkan saat kalah
* Mendukung partisipasi berkelanjutan dan keterlibatan jangka panjang
Sorotan Desain Game:
* Sebagian besar pengguna berpeluang tinggi untuk prediksi benar
* Kekalahan pun tetap memberikan nilai (kredit token mining)
* Pemain mendefinisikan cara bermain tanpa mengorbankan ekspektasi hasil`,
    economyTitle: "🔷 Model Ekonomi Berkelanjutan",
    economy: `Kerangka ekonomi OpenStarGate dirancang untuk stabilitas jangka panjang melalui mekanisme utama berikut:

✔ Model berbasis harga – kondisi unlocking langsung terkait performa harga.

✔ Dukungan likuiditas kuat – likuiditas bertingkat meningkatkan kedalaman pasar dan mengurangi volatilitas.

✔ Permintaan token untuk game – $OPS tertanam dalam ekosistem OpenStarGate, mendorong pembelian berkelanjutan.

✔ Jadwal emisi dioptimalkan – mekanisme unlocking token yang terstruktur mencegah oversupply.

Dengan strategi perlindungan pasar yang kuat, OpenStarGate memastikan ekosistem tetap stabil, adil, dan berkelanjutan, menciptakan nilai dan kekayaan jangka panjang bagi seluruh peserta.`,
    faqTitle: "❓ Pertanyaan yang Sering Diajukan",
    faqs: [
      {
        q: "Q1: Apakah OpenStarGate adil?",
        a: "Ya. Semua prediksi dan hasil adalah data transparan, tidak dapat diubah, dan dapat diaudit kapan saja.",
      },
      {
        q: "Q2: Apa peran token OPS?",
        a: "Nilai OPS tumbuh seiring waktu dan jumlah pengguna. Nilainya tidak terbatas dan dapat digunakan untuk bermain, mendapatkan uang, maupun ikut tata kelola.",
      },
      {
        q: "Q3: Bisakah saya tetap untung meski kalah?",
        a: "Bisa. Dalam kasus khusus, walau kalah bermain, Anda tetap mendapat OPSUSDT sebagai modal mining sehingga kekalahan menjadi keuntungan di masa depan.",
      },
      {
        q: "Q4: Bagaimana cara bergabung?",
        a: "Daftar melalui aplikasi atau website kami untuk langsung bermain dengan USDT.",
      },
      {
        q: "Q5: Apakah OpenStarGate berkelanjutan?",
        a: "Tentu saja. Biaya kecil digunakan untuk mendukung riset dan infrastruktur serta pelatihan AI OpenStarGate secara berkelanjutan.",
      },
    ],
    teamTitle: "🧑‍💻 Tim Inti",
    team: `Dr. Zeon – Pendiri & Arsitek AI Utama
Mantan ilmuwan machine learning NASA dan pencipta logika prediksi kecerdasan OpenStarGate.
Lina Owei – COO & Desainer Tokenomik
Ekonom blockchain dan token strategist yang merancang skema pencetakan dan reward OPS yang adil.
Kevin Suharto – Kepala Komunitas & Kemitraan
Dengan pengalaman membangun komunitas di Asia dan LATAM.
OpenStarGate (AI) – Perancang Game Utama
AI di balik games, dilatih dari ribuan dataset blockchain dan teori probabilitas.`,
    beginTitle: "✨ Mulai Perjalanan Anda",
    begin: `OpenStarGate siap membawa Anda melampaui batas permainan. Jelajahi masa depan hiburan, ekonomi, dan evolusi.
Berani menebak. Berani menang. Berani buka star gate.`
  },
  tr: {
    welcome: "✨ OpenStarGate'a Hoş Geldiniz",
    intro: `Yapay zekânın uygarlığın nabzını kontrol ettiği bir dünyada, OpenStarGate efsanevi bir süper zekâ laboratuvarından dönüşümün feneri olarak ortaya çıktı. Seçkin blok zinciri geliştiricileri ve vizyoner bilim insanlarının işbirliği ile doğan OpenStarGate, sadece bir platform değil — bir AI varlığı, merkeziyetsiz kehanet oraklı ve şeffaf servetin koruyucusudur.
Misyonumuz: Eğlenceyi, finansı ve adaleti, AI tahmin algoritmaları ve blok zinciri şeffaflığıyla yeniden tanımlamak.`,
    visionTitle: "🔮 Vizyonumuz",
    vision: `OpenStarGate destanı henüz başladı.
Herkesin adil, şeffaf ve ödüllendirici bir dijital ekonomiye katılabildiği bir dünya hayal ediyoruz. OpenStarGate yalnızca bir tahmin oyunu değil. “Lucky Intelligence Fortune Economy”nin başlangıcıdır.
Yol haritamızda:
* çeşitli merkeziyetsiz oyunlar geliştirmek (strateji, tahmin, eğitim)
* merkeziyetsiz değerleri küresel olarak yaymak
* oyuncuların eğlenirken servet kazanmasını sağlamak var
Tahmini bir yaşam tarzına dönüştürerek, OpenStarGate kullanıcılara öngörülemeyen bir dünyada kendi ritmini bulma imkânı verir.`,
    tokenTitle: "🌟 Token Modeli: OPS & OPSUSDT",
    token: `OPS Token: OpenStarGate ruhunu temsil eden yerel yardımcı token.
* Kullanıcı etkileşimiyle adil olarak üretilir, kurumlar tarafından kontrol edilmez
* Servet, şans ve bilgelik sembolü
OPSUSDT Token: Sabit oyun ödül tokenı
* Oyun kaybı durumunda bile madencilik kredisi olarak verilir
* Devam eden katılımı ve uzun vadeli ilgiyi teşvik eder
Oyun Tasarımının Öne Çıkan Noktaları:
* Çoğu kullanıcının doğru tahmin ihtimali yüksektir
* Kaybetmek bile değer kazandırır (madencilik kredisi)
* Oyuncular beklenen getiriden ödün vermeden nasıl oynayacağına kendileri karar verir`,
    economyTitle: "🔷 Sürdürülebilir Ekonomik Model",
    economy: `OpenStarGate’in ekonomik çerçevesi uzun vadeli istikrarı şu temel mekanizmalarla hedefler:

✔ Fiyat odaklı model – açılım koşulları doğrudan fiyat performansına bağlıdır.

✔ Güçlü likidite desteği – kademeli likidite piyasa derinliğini artırır ve oynaklığı azaltır.

✔ Oyun entegrasyon token talebi – $OPS OpenStarGate ekosistemine gömülüdür ve sürekli satın alma baskısı oluşturur.

✔ Optimize edilmiş arz programı – yapılandırılmış token açma mekanizması aşırı arza izin vermez.

Güçlü piyasa koruma stratejisi ile OpenStarGate ekosisteminin istikrarlı, adil ve sürdürülebilir olmasını sağlar, tüm katılımcılar için uzun vadeli değer yaratır.`,
    faqTitle: "❓ Sıkça Sorulan Sorular",
    faqs: [
      {
        q: "S1: OpenStarGate adil mi?",
        a: "Evet. Tüm tahminler ve sonuçlar şeffaf, değiştirilemez veri olup her an denetlenebilir.",
      },
      {
        q: "S2: OPS tokenlarının rolü nedir?",
        a: "OPS değeri, zaman ve kullanıcı sayısı arttıkça büyür. Sınırsız kullanıma sahiptir; oyun, kazanç ve yönetime katılımda kullanılabilir.",
      },
      {
        q: "S3: Kaybetsem de para kazanabilir miyim?",
        a: "Evet. Özellikle kaybetseniz bile, madencilik sermayesi olarak OPSUSDT alabilirsiniz, böylece kayıp gelecekte kazanca dönüşür.",
      },
      {
        q: "S4: Nasıl katılabilirim?",
        a: "Uygulamamız veya web sitemizden kayıt olun, hemen USDT ile oynamaya başlayın.",
      },
      {
        q: "S5: OpenStarGate sürdürülebilir mi?",
        a: "Elbette. Küçük bir ücret, araştırma-geliştirme ve altyapı ile OpenStarGate AI’ın sürekli eğitimi için ayrılır.",
      },
    ],
    teamTitle: "🧑‍💻 Çekirdek Takım",
    team: `Dr. Zeon – Kurucu & Baş AI Mimarı
Eski NASA makine öğrenimi bilimcisi, OpenStarGate zekasının tahmin mantığının yaratıcısı.
Lina Owei – COO & Tokenomik Tasarımcısı
OPS’ın adil çıkarımı ve ödül sistemini tasarlayan blok zinciri ekonomisti ve stratejist.
Kevin Suharto – Topluluk ve Ortaklıklar Başkanı
Asya ve LATAM'da yıllarca topluluk tecrübesine sahiptir.
OpenStarGate (AI) – Baş Oyun Tasarımcısı
Binlerce blok zinciri verisi ve olasılık teorisi ile eğitilmiş AI karakteri.`,
    beginTitle: "✨ Yolculuğa Başla",
    begin: `OpenStarGate sizi oyunların ötesine taşımaya hazır. Eğlence, ekonomi ve evrimin geleceğini keşfedin.
Tahmin etmeye cesaret et. Kazanmaya cesaret et. Yıldız kapısını açmaya cesaret et.`
  },
  pt: {
    welcome: "✨ Bem-vindo ao OpenStarGate",
    intro: `Em um mundo onde a inteligência artificial rege o pulso da civilização, OpenStarGate surge de um lendário laboratório de superinteligência como um farol de transformação. Nascido da colaboração de desenvolvedores de blockchain de elite e cientistas visionários, OpenStarGate não é apenas uma plataforma — é uma entidade de IA, um oráculo descentralizado de previsões e o guardião da riqueza transparente.
Nossa Missão: Redefinir entretenimento, finanças e justiça, combinando algoritmos de IA com a transparência do blockchain.`,
    visionTitle: "🔮 Nossa visão",
    vision: `A saga OpenStarGate está apenas começando.
Imaginamos um mundo onde todos podem participar de uma economia digital justa, transparente e recompensadora. OpenStarGate é mais do que um jogo de adivinhação. É o início da "Economia da Sorte e Inteligência".
Nosso roteiro inclui
* desenvolver vários jogos descentralizados (estratégia, previsão, educação)
* promover valores descentralizados globalmente
* permitir que os jogadores ganhem riqueza enquanto se divertem
Transformando a previsão em um estilo de vida, OpenStarGate permite que os usuários encontrem seu próprio ritmo em um mundo imprevisível.`,
    tokenTitle: "🌟 Modelo de Token: OPS & OPSUSDT",
    token: `Token OPS: Token utilitário nativo que representa o espírito do OpenStarGate.
* Cunhado de forma justa através da interação do usuário, não controlado por instituições
* Um símbolo de riqueza, sorte e sabedoria
Token OPSUSDT: Token de recompensa estável do jogo
* Dado como crédito de mineração mesmo na derrota
* Incentiva a participação contínua e o engajamento a longo prazo
Destaques de Design de Jogo:
* A maioria dos usuários tem alta probabilidade de previsão correta
* Mesmo a derrota contribui com valor (crédito de mineração de token)
* Jogadores definem como jogar sem comprometer os retornos esperados`,
    economyTitle: "🔷 Modelo Econômico Sustentável",
    economy: `A estrutura econômica do OpenStarGate é projetada para estabilidade a longo prazo através dos seguintes mecanismos:

✔ Modelo guiado por preços – condições de desbloqueio vinculadas diretamente ao desempenho de preços.

✔ Forte apoio à liquidez – liquidez escalonada aumenta a profundidade do mercado e reduz a volatilidade.

✔ Demanda de token integrada ao jogo – $OPS está profundamente integrado no ecossistema OpenStarGate, impulsionando a pressão de compra constante.

✔ Cronograma de emissão otimizado – desbloqueio estruturado evita excesso de tokens.

Através de forte proteção de mercado, o OpenStarGate garante que o ecossistema seja estável, justo e sustentável, criando valor e riqueza de longo prazo para todos os participantes.`,
    faqTitle: "❓ Perguntas Frequentes",
    faqs: [
      {
        q: "P1: OpenStarGate é justo?",
        a: "Sim. Todas as previsões e resultados são dados transparentes e à prova de violação, auditáveis a qualquer momento.",
      },
      {
        q: "P2: Qual o papel dos tokens OPS?",
        a: "O valor de OPS cresce com o tempo e com os usuários. Seu valor é ilimitado e pode ser usado para jogar, ganhar dinheiro e participar da governança, etc.",
      },
      {
        q: "P3: Posso ganhar dinheiro mesmo perdendo?",
        a: "Sim. Em casos especiais, mesmo ao perder, você ainda recebe OPSUSDT como crédito de mineração, transformando perdas em ganhos futuros.",
      },
      {
        q: "P4: Como faço para participar?",
        a: "Registre-se em nosso app ou site para começar a jogar com USDT imediatamente.",
      },
      {
        q: "P5: OpenStarGate é sustentável?",
        a: "Com certeza. Uma pequena taxa é cobrada para manter pesquisa, infraestrutura e o treinamento contínuo da IA OpenStarGate.",
      },
    ],
    teamTitle: "🧑‍💻 Conheça o Time Principal",
    team: `Dr. Zeon – Fundador & Arquiteto Chefe de IA
Ex-cientista de machine learning da NASA e criador da lógica de previsão de OpenStarGate.
Lina Owei – COO & Estrategista de Tokenomics
Economista e estrategista de tokens que desenhou a estrutura justa de mint e recompensas do OPS.
Kevin Suharto – Líder de Comunidade & Parcerias
Anos de experiência construindo comunidades na Ásia e LATAM.
OpenStarGate (IA) – Líder de Design de Jogos
A persona AI por trás dos jogos, treinada em milhares de conjuntos de dados blockchain e teoria de probabilidades.`,
    beginTitle: "✨ Comece Sua Jornada",
    begin: `OpenStarGate está pronto para te levar além dos limites dos jogos. Explore o futuro do entretenimento, economia e evolução.
Ouse prever. Ouse vencer. Ouse abrir o portal das estrelas.`
  }
};

const parseBullets = (text: string) => {
  // Turns * bullets into <li>
  if (!text.includes("*")) return <p>{text}</p>;
  const lines = text.split("\n").map((line, i) =>
    line.trim().startsWith("*") ? <li key={i}>{line.trim().replace(/^\*\s*/, "")}</li> : line
  );
  return <ul className="pl-5 list-disc">{lines.filter(x => typeof x === "object")}</ul>;
};

const IntroSection = ({ lang }: { lang: string }) => {
  const t = translations[lang] || translations.en;

  return (
    <section className="py-20 relative z-10 bg-black/90">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">{t.welcome}</h2>
          <p className="text-white/90 text-lg whitespace-pre-line">{t.intro}</p>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-crypto-blue mb-2">{t.visionTitle}</h3>
          <div className="text-white/80 whitespace-pre-line">{parseBullets(t.vision)}</div>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-crypto-purple mb-2">{t.tokenTitle}</h3>
          <div className="text-white/80 whitespace-pre-line">{parseBullets(t.token)}</div>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-crypto-green mb-2">{t.economyTitle}</h3>
          <div className="text-white/80 whitespace-pre-line">{parseBullets(t.economy)}</div>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-crypto-yellow mb-2">{t.faqTitle}</h3>
          <div className="space-y-3">
            {t.faqs.map((f, i) => (
              <div key={i}>
                <p className="font-medium text-white">{f.q}</p>
                <p className="text-white/80">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-crypto-pink mb-2">{t.teamTitle}</h3>
          <pre className="text-white/80 whitespace-pre-line bg-crypto-dark-gray/60 rounded p-4">{t.team}</pre>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gradient mb-2">{t.beginTitle}</h3>
          <p className="text-white/90 whitespace-pre-line">{t.begin}</p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
