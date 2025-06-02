import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Show } from "@/types/theater";

interface ShowFormProps {
  show?: Show | null;
  onSave: (show: Omit<Show, "id">) => void;
  onCancel: () => void;
}

const ShowForm = ({ show, onSave, onCancel }: ShowFormProps) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    price: 0,
    image: "",
  });

  useEffect(() => {
    if (show) {
      setFormData({
        title: show.title,
        description: show.description,
        date: show.date,
        time: show.time,
        price: show.price,
        image: show.image || "",
      });
    }
  }, [show]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setFormData({
      title: "",
      description: "",
      date: "",
      time: "",
      price: 0,
      image: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">
          Название спектакля
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, title: e.target.value }))
          }
          className="w-full p-2 border rounded-md"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Описание</label>
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, description: e.target.value }))
          }
          className="w-full p-2 border rounded-md h-24"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Дата</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, date: e.target.value }))
            }
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Время</label>
          <input
            type="time"
            value={formData.time}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, time: e.target.value }))
            }
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Цена билета (₽)
        </label>
        <input
          type="number"
          value={formData.price}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, price: Number(e.target.value) }))
          }
          className="w-full p-2 border rounded-md"
          min="0"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Изображение (URL)
        </label>
        <input
          type="url"
          value={formData.image}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, image: e.target.value }))
          }
          className="w-full p-2 border rounded-md"
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div className="flex gap-3">
        <Button type="submit" className="flex-1">
          {show ? "Обновить" : "Добавить"} спектакль
        </Button>
        {show && (
          <Button type="button" variant="outline" onClick={onCancel}>
            Отмена
          </Button>
        )}
      </div>
    </form>
  );
};

export default ShowForm;
