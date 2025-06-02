const TheaterHero = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-400/20 blur-3xl"></div>

      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-6xl md:text-7xl font-serif font-bold text-white mb-6 animate-fade-in">
          Добро пожаловать
          <br />
          <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
            в мир театра
          </span>
        </h1>

        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in">
          Откройте для себя магию живых выступлений в нашем премиум театре
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <a
            href="#shows"
            className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105"
          >
            Посмотреть спектакли
          </a>
          <a
            href="#about"
            className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
          >
            О нашем театре
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
    </section>
  );
};

export default TheaterHero;
