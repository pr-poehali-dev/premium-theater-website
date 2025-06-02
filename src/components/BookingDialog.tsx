import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Show, Ticket } from "@/types/theater";
import { generateTicket, saveTicket } from "@/utils/storage";
import Icon from "@/components/ui/icon";

interface BookingDialogProps {
  show: Show;
  onClose: () => void;
}

const BookingDialog = ({ show, onClose }: BookingDialogProps) => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [isPurchased, setIsPurchased] = useState(false);
  const [ticket, setTicket] = useState<Ticket | null>(null);

  const seatRows = ["A", "B", "C", "D", "E"];
  const seatsPerRow = 10;

  const handleSeatClick = (seat: string) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat],
    );
  };

  const handlePurchase = () => {
    if (selectedSeats.length === 0 || !customerName || !customerEmail) return;

    const newTicket = generateTicket(
      show,
      selectedSeats,
      customerName,
      customerEmail,
    );
    saveTicket(newTicket);
    setTicket(newTicket);
    setIsPurchased(true);
  };

  if (isPurchased && ticket) {
    return (
      <div className="text-center p-6">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Check" className="text-white" size={24} />
        </div>

        <h2 className="text-2xl font-bold mb-4">Билет успешно приобретён!</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Ваш билет</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-left">
            <p>
              <strong>Код билета:</strong> {ticket.code}
            </p>
            <p>
              <strong>Спектакль:</strong> {ticket.showTitle}
            </p>
            <p>
              <strong>Дата:</strong>{" "}
              {new Date(ticket.showDate).toLocaleDateString("ru-RU")}
            </p>
            <p>
              <strong>Время:</strong> {ticket.showTime}
            </p>
            <p>
              <strong>Места:</strong> {ticket.seats.join(", ")}
            </p>
            <p>
              <strong>Покупатель:</strong> {ticket.customerName}
            </p>
            <p>
              <strong>Общая стоимость:</strong> {ticket.totalPrice}₽
            </p>
          </CardContent>
        </Card>

        <p className="text-sm text-gray-600 mb-4">
          Сохраните код билета. Он потребуется для входа в театр.
        </p>

        <Button onClick={onClose} className="w-full">
          Закрыть
        </Button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Покупка билета: {show.title}</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Выберите места</h3>
        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="text-center mb-4 p-2 bg-gray-800 text-white rounded">
            СЦЕНА
          </div>

          {seatRows.map((row) => (
            <div
              key={row}
              className="flex justify-center items-center gap-2 mb-2"
            >
              <span className="w-6 text-center font-semibold">{row}</span>
              {Array.from({ length: seatsPerRow }, (_, i) => {
                const seatNumber = `${row}${i + 1}`;
                const isSelected = selectedSeats.includes(seatNumber);

                return (
                  <button
                    key={seatNumber}
                    onClick={() => handleSeatClick(seatNumber)}
                    className={`w-8 h-8 rounded-md text-xs font-semibold transition-colors ${
                      isSelected
                        ? "bg-amber-500 text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {selectedSeats.length > 0 && (
          <p className="mt-2 text-sm">
            Выбрано мест: {selectedSeats.join(", ")}
            <span className="font-semibold ml-2">
              Итого: {selectedSeats.length * show.price}₽
            </span>
          </p>
        )}
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1">Ваше имя</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Введите ваше имя"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Введите ваш email"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" onClick={onClose} className="flex-1">
          Отмена
        </Button>
        <Button
          onClick={handlePurchase}
          disabled={
            selectedSeats.length === 0 || !customerName || !customerEmail
          }
          className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-black hover:from-amber-400 hover:to-yellow-400"
        >
          Купить за {selectedSeats.length * show.price}₽
        </Button>
      </div>
    </div>
  );
};

export default BookingDialog;
