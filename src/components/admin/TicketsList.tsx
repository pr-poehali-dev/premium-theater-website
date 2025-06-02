import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Ticket } from "@/types/theater";
import Icon from "@/components/ui/icon";

interface TicketsListProps {
  tickets: Ticket[];
  onDelete: (ticketId: string) => void;
}

const TicketsList = ({ tickets, onDelete }: TicketsListProps) => {
  return (
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
                onClick={() => onDelete(ticket.id)}
              >
                <Icon name="Trash" size={14} />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TicketsList;
