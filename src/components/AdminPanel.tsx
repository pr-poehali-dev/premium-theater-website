import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Show } from "@/types/theater";
import { useAdminData } from "@/hooks/useAdminData";
import AdminLogin from "./admin/AdminLogin";
import AdminHeader from "./admin/AdminHeader";
import ShowsTab from "./admin/ShowsTab";
import TicketsTab from "./admin/TicketsTab";

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<"shows" | "tickets">("shows");
  const [editingShow, setEditingShow] = useState<Show | null>(null);

  const {
    shows,
    tickets,
    handleSaveShow,
    handleDeleteShow,
    handleDeleteTicket,
  } = useAdminData();

  const onSaveShow = (showData: Omit<Show, "id">) => {
    handleSaveShow(showData, editingShow);
    setEditingShow(null);
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="p-6">
      <AdminHeader onLogout={() => setIsAuthenticated(false)} />

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
        <ShowsTab
          shows={shows}
          editingShow={editingShow}
          onSave={onSaveShow}
          onEdit={setEditingShow}
          onCancelEdit={() => setEditingShow(null)}
          onDelete={handleDeleteShow}
        />
      )}

      {activeTab === "tickets" && (
        <TicketsTab tickets={tickets} onDelete={handleDeleteTicket} />
      )}
    </div>
  );
};

export default AdminPanel;
