import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Show } from "@/types/theater";
import ShowForm from "@/components/ShowForm";
import ShowsList from "./ShowsList";

interface ShowsTabProps {
  shows: Show[];
  editingShow: Show | null;
  onSave: (showData: Omit<Show, "id">) => void;
  onEdit: (show: Show) => void;
  onCancelEdit: () => void;
  onDelete: (showId: string) => void;
}

const ShowsTab = ({
  shows,
  editingShow,
  onSave,
  onEdit,
  onCancelEdit,
  onDelete,
}: ShowsTabProps) => {
  return (
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
            onSave={onSave}
            onCancel={onCancelEdit}
          />
        </CardContent>
      </Card>
      <ShowsList shows={shows} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
};

export default ShowsTab;
