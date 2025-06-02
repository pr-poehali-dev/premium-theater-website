import { useState } from "react";
import { Button } from "@/components/ui/button";

const ADMIN_PASSWORD = "sam3114950";

interface AdminLoginProps {
  onLogin: () => void;
}

const AdminLogin = ({ onLogin }: AdminLoginProps) => {
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      onLogin();
      setPassword("");
    } else {
      alert("Неверный пароль");
    }
  };

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
};

export default AdminLogin;
