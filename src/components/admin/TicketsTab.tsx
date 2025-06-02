import { Ticket } from "@/types/theater";
import TicketsList from "./TicketsList";

interface TicketsTabProps {
  tickets: Ticket[];
  onDelete: (ticketId: string) => void;
}

const TicketsTab = ({ tickets, onDelete }: TicketsTabProps) => {
  return <TicketsList tickets={tickets} onDelete={onDelete} />;
};

export default TicketsTab;
