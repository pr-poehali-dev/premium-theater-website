import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AdminPanel from "./AdminPanel";
import Icon from "@/components/ui/icon";

const TheaterHeader = () => {
  return (
    <header className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
              <Icon name="Drama" className="text-black" size={20} />
            </div>
            <h1 className="text-2xl font-bold text-white font-serif">Театр</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#shows"
              className="text-white/80 hover:text-white transition-colors"
            >
              Спектакли
            </a>
            <a
              href="#about"
              className="text-white/80 hover:text-white transition-colors"
            >
              О театре
            </a>
            <a
              href="#contacts"
              className="text-white/80 hover:text-white transition-colors"
            >
              Контакты
            </a>
          </nav>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="text-white/60 hover:text-white"
              >
                <Icon name="Settings" size={16} />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <AdminPanel />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
};

export default TheaterHeader;
