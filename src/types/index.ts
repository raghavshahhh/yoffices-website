export type Role = 'ADMIN' | 'SUPERADMIN' | 'SUPER_ADMIN' | 'STAFF';

export type LeadStatus =
  | 'NEW'
  | 'CONTACTED'
  | 'QUALIFIED'
  | 'FOLLOW_UP'
  | 'CONVERTED'
  | 'CLOSED'
  | 'NOT_INTERESTED';

export type LeadPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';

export type SiteVisitStatus =
  | 'SCHEDULED'
  | 'CONFIRMED'
  | 'COMPLETED'
  | 'RESCHEDULED'
  | 'CANCELLED'
  | 'NO_SHOW';

export type FranchiseStatus =
  | 'NEW'
  | 'CONTACTED'
  | 'QUALIFIED'
  | 'NDA_SENT'
  | 'MEETING_SCHEDULED'
  | 'AGREEMENT_SHARED'
  | 'CONVERTED'
  | 'CLOSED';

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
  createdAt: string;
  updatedAt?: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string | null;
  service: string;
  workspaceType?: string | null;
  location?: string | null;
  teamSize?: string | null;
  budget?: string | null;
  message?: string | null;
  status: LeadStatus;
  priority?: LeadPriority;
  source: string;
  notes?: string | null;
  assignedTo?: string | null;
  lastContactedAt?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface SiteVisit {
  id: string;
  leadId?: string | null;
  name: string;
  email: string;
  phone: string;
  company?: string | null;
  workspaceType?: string | null;
  location: string;
  teamSize?: string | null;
  preferredDate: string;
  preferredTime: string;
  message?: string | null;
  status: SiteVisitStatus;
  notes?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface FranchiseApplication {
  id: string;
  leadId?: string | null;
  name: string;
  email: string;
  phone: string;
  city: string;
  investmentRange: string;
  preferredModel: string;
  hasProperty: boolean;
  propertyLocation?: string | null;
  propertySize?: string | null;
  experience?: string | null;
  message?: string | null;
  status: FranchiseStatus;
  notes?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface LocationData {
  id: string;
  slug: string;
  name: string;
  city: string;
  area: string;
  workspaceAddress: string;
  corporateAddress?: string | null;
  photos: string[];
  mapEmbedUrl: string;
  googleMapsUrl: string;
  workspaceTypes: string[];
  amenities: string[];
  startingPrice?: string;
  status: string;
  published: boolean;
  order: number;
}

export interface WorkspaceTypeData {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  startingPrice: string;
  priceUnit: string;
  idealFor?: string;
  features: string[];
  heroImage: string;
  gallery?: string[];
  published: boolean;
  order: number;
}

export interface FranchiseModelData {
  id: string;
  slug: string;
  name: string;
  subtitle?: string;
  shortDesc: string;
  description: string;
  principal: number;
  monthlyRental: number;
  annualRental: number;
  threeYearRental: number;
  statedTotal: number;
  termYears: number;
  chequesCount: number;
  disbursementFrequency: string;
  highlights: string[];
  features?: string[];
  isFeatured?: boolean;
  active?: boolean;
  idealFor: string;
  published: boolean;
  order: number;
}

export interface FranchiseTermData {
  id: string;
  stepNumber?: number;
  title: string;
  subtitle?: string;
  description: string;
  category: string;
  order: number;
}

export interface MediaVideoData {
  id: string;
  title: string;
  slug: string;
  youtubeUrl: string;
  youtubeId: string;
  thumbnail: string;
  description: string;
  category: string;
  isFeatured: boolean;
  published?: boolean;
  publishedAt: string;
}

export interface BlogPostData {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  category: string;
  tags: string[];
  readTime: string;
  published: boolean;
  publishedAt: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface TestimonialData {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  workspaceType: string;
  avatar: string;
  featured: boolean;
  published: boolean;
}

export interface FAQData {
  id: string;
  category: string;
  question: string;
  answer: string;
  order: number;
  published: boolean;
}

export interface SiteSettings {
  companyName: string;
  tagline: string;
  phone: string;
  whatsappNumber: string;
  whatsappDefaultMsg: string;
  email: string;
  corporateAddress: string;
  operationalAddress: string;
  officeHours: string;
  disclaimerText: string;
  bannerEnabled: boolean;
  bannerText: string;
  bannerLink: string;
  socialLinks: {
    linkedin: string;
    instagram: string;
    youtube: string;
    facebook: string;
  };
}
