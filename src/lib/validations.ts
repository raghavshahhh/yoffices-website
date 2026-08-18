import { z } from 'zod';

export const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().optional().nullable(),
  service: z.string().min(1, 'Please select a service'),
  location: z.string().optional().nullable(),
  teamSize: z.string().optional().nullable(),
  budget: z.string().optional().nullable(),
  message: z.string().optional().nullable(),
  source: z.string().default('Website Form'),
});

export const siteVisitSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().optional().nullable(),
  teamSize: z.string().optional().nullable(),
  workspaceType: z.string().optional().nullable(),
  location: z.string().min(1, 'Please select a preferred location'),
  preferredDate: z.string().min(1, 'Please select a date'),
  preferredTime: z.string().min(1, 'Please select a time slot'),
  message: z.string().optional().nullable(),
});

export const franchiseApplicationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  city: z.string().min(2, 'Please enter your city'),
  investmentRange: z.string().min(1, 'Please select your investment range'),
  preferredModel: z.string().min(1, 'Please select a preferred model'),
  hasProperty: z.boolean().default(false),
  propertySize: z.string().optional().nullable(),
  propertyLocation: z.string().optional().nullable(),
  message: z.string().optional().nullable(),
});

export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const locationSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  slug: z.string().min(2, 'Slug is required'),
  city: z.string().min(2, 'City is required'),
  area: z.string().min(2, 'Area is required'),
  workspaceAddress: z.string().min(5, 'Workspace address is required'),
  corporateAddress: z.string().optional().nullable(),
  photos: z.array(z.string()).default([]),
  mapEmbedUrl: z.string().min(5, 'Map embed URL is required'),
  googleMapsUrl: z.string().min(5, 'Google maps URL is required'),
  workspaceTypes: z.array(z.string()).default([]),
  amenities: z.array(z.string()).default([]),
  startingPrice: z.string().optional().nullable(),
  status: z.string().default('Operational'),
  contactPhone: z.string().optional().nullable(),
  contactEmail: z.string().optional().nullable(),
  published: z.boolean().default(true),
  order: z.number().default(0),
});

export const franchiseModelSchema = z.object({
  slug: z.string().min(2, 'Slug is required'),
  name: z.string().min(2, 'Name is required'),
  subtitle: z.string().optional().nullable(),
  principal: z.number().positive('Principal must be positive'),
  monthlyRental: z.number().positive('Monthly rental must be positive'),
  annualRental: z.number().positive('Annual rental must be positive'),
  threeYearRental: z.number().positive('3-year rental must be positive'),
  statedTotal: z.number().positive('Stated total must be positive'),
  validityYears: z.number().default(3),
  securityChequesCount: z.number().default(3),
  description: z.string().min(5, 'Description is required'),
  features: z.array(z.string()).default([]),
  isFeatured: z.boolean().default(false),
  order: z.number().default(0),
  active: z.boolean().default(true),
});

export const blogPostSchema = z.object({
  title: z.string().min(3, 'Title is required'),
  slug: z.string().min(3, 'Slug is required'),
  excerpt: z.string().min(10, 'Excerpt is required'),
  content: z.string().min(20, 'Content is required'),
  coverImage: z.string().min(5, 'Cover image URL is required'),
  author: z.string().default('Yoffices Editorial Team'),
  category: z.string().min(2, 'Category is required'),
  tags: z.array(z.string()).default([]),
  readTime: z.string().default('5 min read'),
  published: z.boolean().default(true),
  seoTitle: z.string().optional().nullable(),
  seoDescription: z.string().optional().nullable(),
});

export const mediaVideoSchema = z.object({
  title: z.string().min(3, 'Title is required'),
  slug: z.string().min(3, 'Slug is required'),
  youtubeUrl: z.string().min(5, 'YouTube URL is required'),
  youtubeId: z.string().min(2, 'YouTube ID is required'),
  thumbnail: z.string().optional().nullable(),
  description: z.string().min(5, 'Description is required'),
  category: z.string().min(2, 'Category is required'),
  isFeatured: z.boolean().default(false),
  published: z.boolean().default(true),
});
