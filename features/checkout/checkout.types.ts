export type CheckoutInput = {
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    address: {
      addressStreet: string;
      addressDistrict: string;
      addressNumber: string;      
      addressComp: string | null;
      city: string;
      state: string;
      zipCode: string;
    };
  };
  card: {
    cardNumber: string;
    cardCvv: string;
    cardExpDate: string;
    cardName: string;
  };
  order: {
    name: string;
    image: string;
    price: number;
  };
};
