const TheaterFooter = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 py-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-3">
              Контакты
            </h3>
            <p className="text-white/70 text-sm mb-1">
              г. Москва, ул. Театральная, 1
            </p>
            <p className="text-white/70 text-sm mb-1">+7 (495) 123-45-67</p>
            <p className="text-white/70 text-sm">info@theater.ru</p>
          </div>

          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-3">
              Режим работы
            </h3>
            <p className="text-white/70 text-sm mb-1">Вторник - Воскресенье</p>
            <p className="text-white/70 text-sm mb-1">19:00 - 22:00</p>
            <p className="text-white/70 text-sm">Понедельник - выходной</p>
          </div>

          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-3">
              Социальные сети
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                className="text-white/70 hover:text-amber-400 transition-colors"
              >
                ВКонтакте
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-amber-400 transition-colors"
              >
                Telegram
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-amber-400 transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-white/50 text-sm">
            © 2024 Театр. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default TheaterFooter;
