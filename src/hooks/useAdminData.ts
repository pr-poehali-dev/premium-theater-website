import { useState, useEffect } from "react";
import { Show, Ticket } from "@/types/theater";
import {
  getShows,
  saveShow,
  deleteShow,
  getTickets,
  deleteTicket,
} from "@/utils/storage";

export const useAdminData = () => {
  const [shows, setShows] = useState<Show[]>([]);
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const loadData = () => {
    setShows(getShows());
    setTickets(getTickets());
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSaveShow = (
    showData: Omit<Show, "id">,
    editingShow?: Show | null,
  ) => {
    const show = editingShow
      ? { ...showData, id: editingShow.id }
      : { ...showData, id: Date.now().toString() };

    saveShow(show);
    setShows(getShows());
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

  return {
    shows,
    tickets,
    handleSaveShow,
    handleDeleteShow,
    handleDeleteTicket,
  };
};
