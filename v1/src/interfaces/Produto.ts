export interface Produto {
  slug: string;
  title: string;
  description: string;
  price: number;
  isFree: boolean;
  type: "component" | "landing_page";
  features: string[];
  details: string;
}
