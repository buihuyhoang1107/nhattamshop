export interface Product {
  id: string;
  name: string;
  title: string;
  rating: number;
  reviewCount: number;
  soldCount: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  isMall: boolean;
  isTopProduct: boolean;
  features: string[];
}

export interface Review {
  id: string;
  userName: string;
  userAvatar: string;
  rating: number;
  itemDetail: string;
  comment: string;
  images: string[];
  date: string;
}

export interface ProductPackage {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  isHot: boolean;
  isSuperDeal: boolean;
  isFreeship: boolean;
  description: string;
}

export interface CustomerInfo {
  fullName: string;
  phone: string;
  address: string;
  province: string;
  district: string;
  ward: string;
  email: string;
}

export interface NavigationTab {
  id: string;
  label: string;
  isActive: boolean;
}

export interface HairProblem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ProductBenefit {
  id: string;
  title: string;
  description: string;
  features: string[];
  images: string[];
}

export interface Certification {
  id: string;
  title: string;
  document: string;
  images: string[];
}
