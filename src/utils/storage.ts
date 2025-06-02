import { Show, Ticket } from "@/types/theater";

const SHOWS_KEY = "theater_shows";
const TICKETS_KEY = "theater_tickets";

export const getShows = (): Show[] => {
  const stored = localStorage.getItem(SHOWS_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const saveShow = (show: Show): void => {
  const shows = getShows();
  const existingIndex = shows.findIndex((s) => s.id === show.id);

  if (existingIndex >= 0) {
    shows[existingIndex] = show;
  } else {
    shows.push(show);
  }

  localStorage.setItem(SHOWS_KEY, JSON.stringify(shows));
};

export const deleteShow = (showId: string): void => {
  const shows = getShows();
  const filtered = shows.filter((show) => show.id !== showId);
  localStorage.setItem(SHOWS_KEY, JSON.stringify(filtered));
};

export const getTickets = (): Ticket[] => {
  const stored = localStorage.getItem(TICKETS_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const saveTicket = (ticket: Ticket): void => {
  const tickets = getTickets();
  tickets.push(ticket);
  localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
};

export const deleteTicket = (ticketId: string): void => {
  const tickets = getTickets();
  const filtered = tickets.filter((ticket) => ticket.id !== ticketId);
  localStorage.setItem(TICKETS_KEY, JSON.stringify(filtered));
};

export const generateTicket = (
  show: Show,
  seats: string[],
  customerName: string,
  customerEmail: string,
): Ticket => {
  const code = `TH-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;

  return {
    id: Date.now().toString(),
    code,
    showId: show.id,
    showTitle: show.title,
    showDate: show.date,
    showTime: show.time,
    seats,
    customerName,
    customerEmail,
    totalPrice: seats.length * show.price,
    purchaseDate: new Date().toISOString(),
  };
};
