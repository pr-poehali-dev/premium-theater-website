export interface Show {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  price: number;
  image?: string;
}

export interface Ticket {
  id: string;
  code: string;
  showId: string;
  showTitle: string;
  showDate: string;
  showTime: string;
  seats: string[];
  customerName: string;
  customerEmail: string;
  totalPrice: number;
  purchaseDate: string;
}
