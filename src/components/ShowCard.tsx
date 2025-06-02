import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import BookingDialog from "./BookingDialog";
import { Show } from "@/types/theater";
import Icon from "@/components/ui/icon";

interface ShowCardProps {
  show: Show;
}

const ShowCard = ({ show }: ShowCardProps) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-amber-500/50 transition-all duration-300 group overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          <img
            src={
              show.image ||
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
            }
            alt={show.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute top-4 right-4 bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
            {show.price}₽
          </div>
        </div>

        <CardContent className="p-6">
          <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
            {show.title}
          </h3>

          <p className="text-white/70 text-sm mb-4 line-clamp-2">
            {show.description}
          </p>

          <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
            <div className="flex items-center gap-1">
              <Icon name="Calendar" size={14} />
              <span>{new Date(show.date).toLocaleDateString("ru-RU")}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="Clock" size={14} />
              <span>{show.time}</span>
            </div>
          </div>

          <Button
            onClick={() => setIsBookingOpen(true)}
            className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-black hover:from-amber-400 hover:to-yellow-400 font-semibold"
          >
            Купить билет
          </Button>
        </CardContent>
      </Card>

      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="max-w-2xl">
          <BookingDialog show={show} onClose={() => setIsBookingOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ShowCard;
