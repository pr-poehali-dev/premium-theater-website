import { useState, useEffect } from "react";
import ShowCard from "./ShowCard";
import { Show } from "@/types/theater";
import { getShows } from "@/utils/storage";

const ShowsGrid = () => {
  const [shows, setShows] = useState<Show[]>([]);

  useEffect(() => {
    setShows(getShows());
  }, []);

  return (
    <section id="shows" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">
            Текущий репертуар
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto"></div>
        </div>

        {shows.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-12 max-w-md mx-auto">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎭</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Скоро здесь появятся спектакли
              </h3>
              <p className="text-white/60">
                Администратор добавит спектакли в ближайшее время
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shows.map((show) => (
              <ShowCard key={show.id} show={show} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ShowsGrid;
