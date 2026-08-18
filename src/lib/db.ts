import fs from 'fs';
import path from 'path';
import {
  User,
  Lead,
  SiteVisit,
  FranchiseApplication,
  LocationData,
  WorkspaceTypeData,
  FranchiseModelData,
  FranchiseTermData,
  MediaVideoData,
  BlogPostData,
  TestimonialData,
  FAQData,
  SiteSettings,
} from '@/types';
import {
  INITIAL_SITE_SETTINGS,
  INITIAL_FRANCHISE_MODELS,
  INITIAL_FRANCHISE_TERMS,
  INITIAL_LOCATIONS,
  INITIAL_WORKSPACES,
  INITIAL_MEDIA_VIDEOS,
  INITIAL_BLOG_POSTS,
  INITIAL_TESTIMONIALS,
  INITIAL_FAQS,
} from './constants';
import bcrypt from 'bcryptjs';

interface DatabaseSchema {
  users: User[];
  leads: Lead[];
  siteVisits: SiteVisit[];
  franchiseApplications: FranchiseApplication[];
  locations: LocationData[];
  workspaces: WorkspaceTypeData[];
  franchiseModels: FranchiseModelData[];
  franchiseTerms: FranchiseTermData[];
  mediaVideos: MediaVideoData[];
  blogPosts: BlogPostData[];
  testimonials: TestimonialData[];
  faqs: FAQData[];
  siteSettings: SiteSettings;
  pageContent: Record<string, Record<string, any>>;
}

const DB_FILE_PATH = path.join(process.cwd(), 'prisma', 'data-store.json');

function getInitialDatabase(): DatabaseSchema {
  // Default Super Admin password: "password123"
  const defaultPasswordHash = bcrypt.hashSync('admin123', 10);

  return {
    users: [
      {
        id: 'user-super-admin',
        email: 'admin@yoffices.com',
        name: 'Super Admin',
        role: 'SUPER_ADMIN',
        createdAt: new Date().toISOString(),
      },
    ],
    leads: [
      {
        id: 'lead-demo-1',
        name: 'Arjun Mehta',
        email: 'arjun.mehta@techscale.io',
        phone: '+91 98201 12345',
        company: 'TechScale Innovations',
        service: 'Private Office',
        location: 'Sector 45, Gurugram',
        teamSize: '12-15 seats',
        source: 'Website Form',
        status: 'QUALIFIED',
        notes: 'Requested a private 15-seater lockable cabin with dedicated fiber line.',
        budget: '₹1,20,000 / mo',
        message: 'Looking to move in next month.',
        assignedTo: 'Super Admin',
        lastContactedAt: new Date().toISOString(),
        createdAt: new Date(Date.now() - 3600000 * 24 * 2).toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 'lead-demo-2',
        name: 'Rohan Deshmukh',
        email: 'rohan@deshmukhpartners.com',
        phone: '+91 99887 76655',
        company: 'Deshmukh Legal Advisors',
        service: 'Virtual Office',
        location: 'Sector 32, Gurugram',
        teamSize: '1-3 seats',
        source: 'Virtual Office Page',
        status: 'NEW',
        notes: 'Needs GST registration support & mailing address.',
        budget: '₹20,000 / yr',
        message: 'Require Haryana GST registration documents urgently.',
        assignedTo: null,
        lastContactedAt: null,
        createdAt: new Date(Date.now() - 3600000 * 6).toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 'lead-demo-3',
        name: 'Sunita Rao',
        email: 'sunita.rao@investcap.in',
        phone: '+91 97112 33445',
        company: 'Capital Matrix',
        service: 'Franchise Opportunity',
        location: 'Gurugram',
        teamSize: null,
        source: 'Franchise Calculator',
        status: 'CONTACTED',
        notes: 'Interested in purchasing 2 Cabin Units (₹50 Lakhs total principal).',
        budget: '₹50,00,000',
        message: 'Please send draft agreement and security cheque process details.',
        assignedTo: 'Super Admin',
        lastContactedAt: new Date().toISOString(),
        createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
    siteVisits: [
      {
        id: 'visit-demo-1',
        name: 'Deepak Chopra',
        email: 'deepak@prismventures.in',
        phone: '+91 98111 22334',
        company: 'Prism Ventures',
        teamSize: '8 seats',
        workspaceType: 'Private Office',
        location: 'Sector 45, Gurugram',
        preferredDate: '2026-08-25',
        preferredTime: '11:30 AM',
        message: 'Would like to view the 8-seater cabin and cafeteria.',
        status: 'SCHEDULED',
        notes: 'Confirmed via WhatsApp.',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
    franchiseApplications: [
      {
        id: 'franchise-app-1',
        name: 'Sunita Rao',
        phone: '+91 97112 33445',
        email: 'sunita.rao@investcap.in',
        city: 'Gurugram / New Delhi',
        investmentRange: '₹25,00,000 - ₹50,00,000',
        preferredModel: 'Cabin Model (8 Seater / 3+1)',
        hasProperty: true,
        propertySize: '3,200 sq.ft',
        propertyLocation: 'Golf Course Road, Gurgaon',
        message: 'Interested in partnering for a commercial cabin franchise with Yoffices.',
        status: 'QUALIFIED',
        notes: 'Sent initial agreement deck.',
        createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
    locations: INITIAL_LOCATIONS,
    workspaces: INITIAL_WORKSPACES,
    franchiseModels: INITIAL_FRANCHISE_MODELS,
    franchiseTerms: INITIAL_FRANCHISE_TERMS,
    mediaVideos: INITIAL_MEDIA_VIDEOS,
    blogPosts: INITIAL_BLOG_POSTS,
    testimonials: INITIAL_TESTIMONIALS,
    faqs: INITIAL_FAQS,
    siteSettings: INITIAL_SITE_SETTINGS,
    pageContent: {
      home: {
        hero: {
          headline: 'Work Better. Grow Faster.',
          subheadline:
            'Premium flexible workspaces, turnkey private offices, and asset-backed business solutions engineered for modern enterprises in Gurgaon.',
          primaryCtaText: 'Explore Workspaces',
          primaryCtaLink: '/workspaces',
          secondaryCtaText: 'Book a Site Visit',
          secondaryCtaLink: '/book-a-visit',
          franchiseCtaText: 'Explore Franchise Opportunity →',
          franchiseCtaLink: '/franchise',
        },
      },
    },
  };
}

function ensureDirectoryExistence(filePath: string) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

export function readDb(): DatabaseSchema {
  try {
    if (!fs.existsSync(DB_FILE_PATH)) {
      const initialData = getInitialDatabase();
      ensureDirectoryExistence(DB_FILE_PATH);
      fs.writeFileSync(DB_FILE_PATH, JSON.stringify(initialData, null, 2), 'utf-8');
      return initialData;
    }
    const raw = fs.readFileSync(DB_FILE_PATH, 'utf-8');
    return JSON.parse(raw) as DatabaseSchema;
  } catch (err) {
    console.error('Error reading database file, returning default:', err);
    return getInitialDatabase();
  }
}

export function writeDb(data: DatabaseSchema): void {
  try {
    ensureDirectoryExistence(DB_FILE_PATH);
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing database file:', err);
  }
}

// Database helper functions
export const db = {
  // Leads
  getLeads: () => readDb().leads,
  getLeadById: (id: string) => readDb().leads.find((l) => l.id === id) || null,
  createLead: (data: Omit<Lead, 'id' | 'createdAt' | 'updatedAt' | 'status'> & { status?: Lead['status'] }) => {
    const database = readDb();
    const newLead: Lead = {
      ...data,
      id: `lead-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      status: data.status || 'NEW',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    database.leads.unshift(newLead);
    writeDb(database);
    return newLead;
  },
  updateLead: (id: string, updates: Partial<Lead>) => {
    const database = readDb();
    const index = database.leads.findIndex((l) => l.id === id);
    if (index === -1) return null;
    database.leads[index] = {
      ...database.leads[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    writeDb(database);
    return database.leads[index];
  },
  deleteLead: (id: string) => {
    const database = readDb();
    database.leads = database.leads.filter((l) => l.id !== id);
    writeDb(database);
    return true;
  },

  // Site Visits
  getSiteVisits: () => readDb().siteVisits,
  createSiteVisit: (data: Omit<SiteVisit, 'id' | 'createdAt' | 'updatedAt' | 'status'>) => {
    const database = readDb();
    const newVisit: SiteVisit = {
      ...data,
      id: `visit-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      status: 'SCHEDULED',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    database.siteVisits.unshift(newVisit);
    // Also create a lead entry
    const newLead: Lead = {
      id: `lead-visit-${Date.now()}`,
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      service: `Site Visit (${data.workspaceType || 'General'})`,
      location: data.location,
      teamSize: data.teamSize,
      source: 'Book a Visit Page',
      status: 'NEW',
      priority: 'MEDIUM',
      notes: `Preferred Date: ${data.preferredDate} at ${data.preferredTime}. ${data.message || ''}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    database.leads.unshift(newLead);
    writeDb(database);
    return newVisit;
  },
  updateSiteVisit: (id: string, updates: Partial<SiteVisit>) => {
    const database = readDb();
    const index = database.siteVisits.findIndex((v) => v.id === id);
    if (index === -1) return null;
    database.siteVisits[index] = {
      ...database.siteVisits[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    writeDb(database);
    return database.siteVisits[index];
  },

  // Franchise Applications
  getFranchiseApplications: () => readDb().franchiseApplications,
  createFranchiseApplication: (data: Omit<FranchiseApplication, 'id' | 'createdAt' | 'updatedAt' | 'status'>) => {
    const database = readDb();
    const newApp: FranchiseApplication = {
      ...data,
      id: `fapp-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      status: 'NEW',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    database.franchiseApplications.unshift(newApp);
    // Also create a lead entry
    const newLead: Lead = {
      id: `lead-fapp-${Date.now()}`,
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: 'Franchise Application',
      location: data.city,
      source: 'Franchise Apply Page',
      status: 'NEW',
      priority: 'HIGH',
      budget: data.investmentRange,
      notes: `Preferred Model: ${data.preferredModel}. Has Property: ${data.hasProperty ? 'Yes' : 'No'} (${data.propertySize || 'N/A'}). ${data.message || ''}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    database.leads.unshift(newLead);
    writeDb(database);
    return newApp;
  },
  updateFranchiseApplication: (id: string, updates: Partial<FranchiseApplication>) => {
    const database = readDb();
    const index = database.franchiseApplications.findIndex((a) => a.id === id);
    if (index === -1) return null;
    database.franchiseApplications[index] = {
      ...database.franchiseApplications[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    writeDb(database);
    return database.franchiseApplications[index];
  },

  // Locations
  getLocations: () => readDb().locations.filter((l) => l.published),
  getAllLocations: () => readDb().locations,
  getLocationBySlug: (slug: string) => {
    const list = readDb().locations;
    return (
      list.find(
        (l) =>
          l.slug === slug ||
          l.id === slug ||
          l.slug.replace('gurgaon-', '') === slug.replace('gurgaon-', '') ||
          slug.includes('45') && l.slug.includes('45') ||
          slug.includes('32') && l.slug.includes('32')
      ) || null
    );
  },
  saveLocation: (location: LocationData) => {
    const database = readDb();
    const index = database.locations.findIndex((l) => l.id === location.id || l.slug === location.slug);
    if (index >= 0) {
      database.locations[index] = location;
    } else {
      database.locations.push(location);
    }
    writeDb(database);
    return location;
  },
  deleteLocation: (id: string) => {
    const database = readDb();
    database.locations = database.locations.filter((l) => l.id !== id);
    writeDb(database);
    return true;
  },

  // Workspaces
  getWorkspaces: () => readDb().workspaces.filter((w) => w.published),
  getAllWorkspaces: () => readDb().workspaces,
  getWorkspaceBySlug: (slug: string) => {
    const list = readDb().workspaces;
    return list.find((w) => w.slug === slug || w.id === slug || w.slug.replace(/-/g, '') === slug.replace(/-/g, '')) || null;
  },
  saveWorkspace: (ws: WorkspaceTypeData) => {
    const database = readDb();
    const index = database.workspaces.findIndex((w) => w.id === ws.id || w.slug === ws.slug);
    if (index >= 0) {
      database.workspaces[index] = ws;
    } else {
      database.workspaces.push(ws);
    }
    writeDb(database);
    return ws;
  },

  // Franchise Models
  getFranchiseModels: () => readDb().franchiseModels.filter((m) => m.active),
  getAllFranchiseModels: () => readDb().franchiseModels,
  getFranchiseModelBySlug: (slug: string) => readDb().franchiseModels.find((m) => m.slug === slug) || null,
  saveFranchiseModel: (model: FranchiseModelData) => {
    const database = readDb();
    const index = database.franchiseModels.findIndex((m) => m.id === model.id || m.slug === model.slug);
    if (index >= 0) {
      database.franchiseModels[index] = model;
    } else {
      database.franchiseModels.push(model);
    }
    writeDb(database);
    return model;
  },

  // Franchise Terms
  getFranchiseTerms: () => readDb().franchiseTerms.sort((a, b) => a.order - b.order),
  saveFranchiseTerms: (terms: FranchiseTermData[]) => {
    const database = readDb();
    database.franchiseTerms = terms;
    writeDb(database);
    return terms;
  },

  // Media Videos
  getMediaVideos: () => readDb().mediaVideos.filter((v) => v.published),
  getAllMediaVideos: () => readDb().mediaVideos,
  getMediaVideoBySlug: (slug: string) => readDb().mediaVideos.find((v) => v.slug === slug) || null,
  saveMediaVideo: (video: MediaVideoData) => {
    const database = readDb();
    const index = database.mediaVideos.findIndex((v) => v.id === video.id || v.slug === video.slug);
    if (index >= 0) {
      database.mediaVideos[index] = video;
    } else {
      database.mediaVideos.unshift(video);
    }
    writeDb(database);
    return video;
  },
  deleteMediaVideo: (id: string) => {
    const database = readDb();
    database.mediaVideos = database.mediaVideos.filter((v) => v.id !== id);
    writeDb(database);
    return true;
  },

  // Blog Posts
  getBlogPosts: () => readDb().blogPosts.filter((p) => p.published),
  getAllBlogPosts: () => readDb().blogPosts,
  getBlogPostBySlug: (slug: string) => readDb().blogPosts.find((p) => p.slug === slug) || null,
  saveBlogPost: (post: BlogPostData) => {
    const database = readDb();
    const index = database.blogPosts.findIndex((p) => p.id === post.id || p.slug === post.slug);
    if (index >= 0) {
      database.blogPosts[index] = post;
    } else {
      database.blogPosts.unshift(post);
    }
    writeDb(database);
    return post;
  },
  deleteBlogPost: (id: string) => {
    const database = readDb();
    database.blogPosts = database.blogPosts.filter((p) => p.id !== id);
    writeDb(database);
    return true;
  },

  // Testimonials
  getTestimonials: () => readDb().testimonials.filter((t) => t.published),
  getAllTestimonials: () => readDb().testimonials,
  saveTestimonials: (testimonials: TestimonialData[]) => {
    const database = readDb();
    database.testimonials = testimonials;
    writeDb(database);
    return testimonials;
  },

  // FAQs
  getFAQs: () => readDb().faqs.filter((f) => f.published),
  getAllFAQs: () => readDb().faqs,
  saveFAQs: (faqs: FAQData[]) => {
    const database = readDb();
    database.faqs = faqs;
    writeDb(database);
    return faqs;
  },

  // Site Settings
  getSiteSettings: () => readDb().siteSettings,
  updateSiteSettings: (settings: Partial<SiteSettings>) => {
    const database = readDb();
    database.siteSettings = { ...database.siteSettings, ...settings };
    writeDb(database);
    return database.siteSettings;
  },

  // Page Content
  getPageContent: (pageKey: string) => readDb().pageContent[pageKey] || {},
  updatePageContent: (pageKey: string, sectionKey: string, content: any) => {
    const database = readDb();
    if (!database.pageContent[pageKey]) {
      database.pageContent[pageKey] = {};
    }
    database.pageContent[pageKey][sectionKey] = content;
    writeDb(database);
    return database.pageContent[pageKey];
  },
};
