import { Button } from "@/components/ui/button";

interface AdminHeaderProps {
  onLogout: () => void;
}

const AdminHeader = ({ onLogout }: AdminHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">Админ-панель театра</h2>
      <Button variant="outline" onClick={onLogout}>
        Выйти
      </Button>
    </div>
  );
};

export default AdminHeader;
