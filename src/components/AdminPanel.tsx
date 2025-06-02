import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Show, Ticket } from "@/types/theater";
import {
  getShows,
  saveShow,
  deleteShow,
  getTickets,
  deleteTicket,
} from "@/utils/storage";
import ShowForm from "./ShowForm";
import Icon from "@/components/ui/icon";

const ADMIN_PASSWORD = "sam3114950";

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [shows, setShows] = useState<Show[]>([]);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [activeTab, setActiveTab] = useState<"shows" | "tickets">("shows");
  const [editingShow, setEditingShow] = useState<Show | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      setShows(getShows());
      setTickets(getTickets());
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword("");
    } else {
      alert("Неверный пароль");
    }
  };

  const handleSaveShow = (showData: Omit<Show, "id">) => {
    const show = editingShow
      ? { ...showData, id: editingShow.id }
      : { ...showData, id: Date.now().toString() };

    saveShow(show);
    setShows(getShows());
    setEditingShow(null);
  };

  const handleDeleteShow = (showId: string) => {
    if (confirm("Удалить этот спектакль?")) {
      deleteShow(showId);
      setShows(getShows());
    }
  };

  const handleDeleteTicket = (ticketId: string) => {
    if (confirm("Удалить этот билет?")) {
      deleteTicket(ticketId);
      setTickets(getTickets());
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold mb-6">Вход в админ-панель</h2>
        <div className="max-w-sm mx-auto space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
            className="w-full p-3 border rounded-lg"
            onKeyPress={(e) => e.key === "Enter" && handleLogin()}
          />
          <Button onClick={handleLogin} className="w-full">
            Войти
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Админ-панель театра</h2>
        <Button variant="outline" onClick={() => setIsAuthenticated(false)}>
          Выйти
        </Button>
      </div>

      <div className="flex gap-2 mb-6">
        <Button
          variant={activeTab === "shows" ? "default" : "outline"}
          onClick={() => setActiveTab("shows")}
        >
          Спектакли ({shows.length})
        </Button>
        <Button
          variant={activeTab === "tickets" ? "default" : "outline"}
          onClick={() => setActiveTab("tickets")}
        >
          Билеты ({tickets.length})
        </Button>
      </div>

      {activeTab === "shows" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>
                {editingShow ? "Редактировать спектакль" : "Добавить спектакль"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ShowForm
                show={editingShow}
                onSave={handleSaveShow}
                onCancel={() => setEditingShow(null)}
              />
            </CardContent>
          </Card>

          <div className="grid gap-4">
            {shows.map((show) => (
              <Card key={show.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{show.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {show.description}
                      </p>
                      <div className="flex gap-4 text-sm text-gray-500">
                        <span>
                          {new Date(show.date).toLocaleDateString("ru-RU")}
                        </span>
                        <span>{show.time}</span>
                        <span>{show.price}₽</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setEditingShow(show)}
                      >
                        <Icon name="Edit" size={14} />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDeleteShow(show.id)}
                      >
                        <Icon name="Trash" size={14} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === "tickets" && (
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <Card key={ticket.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{ticket.showTitle}</h3>
                    <p className="text-sm text-gray-600">Код: {ticket.code}</p>
                    <p className="text-sm text-gray-600">
                      Покупатель: {ticket.customerName}
                    </p>
                    <p className="text-sm text-gray-600">
                      Email: {ticket.customerEmail}
                    </p>
                    <p className="text-sm text-gray-600">
                      Места: {ticket.seats.join(", ")}
                    </p>
                    <p className="text-sm text-gray-600">
                      Сумма: {ticket.totalPrice}₽
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDeleteTicket(ticket.id)}
                  >
                    <Icon name="Trash" size={14} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
