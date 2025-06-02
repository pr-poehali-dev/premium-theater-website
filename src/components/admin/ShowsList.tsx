import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Show } from "@/types/theater";
import Icon from "@/components/ui/icon";

interface ShowsListProps {
  shows: Show[];
  onEdit: (show: Show) => void;
  onDelete: (showId: string) => void;
}

const ShowsList = ({ shows, onEdit, onDelete }: ShowsListProps) => {
  return (
    <div className="grid gap-4">
      {shows.map((show) => (
        <Card key={show.id}>
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{show.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{show.description}</p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>{new Date(show.date).toLocaleDateString("ru-RU")}</span>
                  <span>{show.time}</span>
                  <span>{show.price}₽</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onEdit(show)}
                >
                  <Icon name="Edit" size={14} />
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => onDelete(show.id)}
                >
                  <Icon name="Trash" size={14} />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ShowsList;
