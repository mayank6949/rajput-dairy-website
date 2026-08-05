export type PageRoute = 
  | 'home'
  | 'about'
  | 'products'
  | 'manufacturing'
  | 'gallery'
  | 'reviews'
  | 'faq'
  | 'contact'
  | 'bulk-orders'
  | 'careers'
  | 'blog'
  | 'privacy-policy'
  | 'terms'
  | 'desi-ghee-varanasi'
  'paneer-varanasi';
export interface Product {
  id: string;
  name: string;
  category: 'Ghee' | 'Paneer' | 'Khowa' | 'Butter & Cream' | 'Curd';
  shortDescription: string;
  fullDescription: string;
  image: string;
  isSignature?: boolean;
  highlights: string[];
  storage: string;
  bestUses: string[];
  texture: string;
  preparationMethod: string;
  freshness: string;
}

export interface Review {
  id: string;
  author: string;
  role?: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  isVerified?: boolean;
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Products' | 'Delivery' | 'Bulk Orders' | 'Quality' | 'Payments';
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  content: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Desi Ghee' | 'Paneer' | 'Khowa' | 'Butter & Cream' | 'Curd' | 'Store' | 'Packaging' | 'Production';
  image: string;
  caption: string;
}

export interface ManufacturingStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  details: string[];
}
