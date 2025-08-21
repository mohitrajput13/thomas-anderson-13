import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface PageContent {
  id: string;
  title: string;
  fields: ContentField[];
}

export interface ContentField {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'image';
  value: string;
}

// Initial content structure based on existing pages
const initialContent: PageContent[] = [
  {
    id: 'home',
    title: 'Home Page',
    fields: [
      // Hero Section
      { id: 'hero-title', label: 'Hero Title', type: 'text', value: 'Transform Your Athletic Dreams Into College Reality' },
      { id: 'hero-subtitle', label: 'Hero Subtitle', type: 'textarea', value: 'Discover the proven Game 12 system that has helped thousands of student-athletes secure college scholarships and achieve their academic dreams.' },
      { id: 'hero-image', label: 'Hero Background Image', type: 'image', value: '/src/assets/hero-recruiting.jpg' },
      
      // About Section
      { id: 'about-heading', label: 'About Heading', type: 'text', value: 'About Thomas Anderson' },
      { id: 'about-description', label: 'About Description', type: 'textarea', value: 'With over three decades of experience in college recruiting, I have dedicated my career to helping student-athletes achieve their academic and athletic dreams through proven strategies and personalized guidance.' },
      { id: 'about-image', label: 'About Image', type: 'image', value: '/src/assets/about-thomas.jpg' },
      
      // Services Section
      { id: 'services-heading', label: 'Services Section Heading', type: 'text', value: 'Our Services' },
      { id: 'service1-icon', label: 'Service 1 Icon/Image', type: 'image', value: '/src/assets/service-mentorship.jpg' },
      { id: 'service1-title', label: 'Service 1 Title', type: 'text', value: 'Personal Mentorship' },
      { id: 'service1-description', label: 'Service 1 Description', type: 'textarea', value: 'One-on-one guidance tailored to your unique athletic and academic goals.' },
      { id: 'service2-icon', label: 'Service 2 Icon/Image', type: 'image', value: '/src/assets/service-recruiting.jpg' },
      { id: 'service2-title', label: 'Service 2 Title', type: 'text', value: 'Recruiting Strategy' },
      { id: 'service2-description', label: 'Service 2 Description', type: 'textarea', value: 'Comprehensive recruiting plans designed to maximize your scholarship opportunities.' },
      { id: 'service3-icon', label: 'Service 3 Icon/Image', type: 'image', value: '/src/assets/service-game12.jpg' },
      { id: 'service3-title', label: 'Service 3 Title', type: 'text', value: 'Game 12 System' },
      { id: 'service3-description', label: 'Service 3 Description', type: 'textarea', value: 'Access to our proven Game 12 methodology that has helped thousands succeed.' },
      
      // Stats Section
      { id: 'stats-experience', label: 'Years Experience', type: 'text', value: '31+' },
      { id: 'stats-athletes', label: 'Athletes Guided', type: 'text', value: '5,000+' },
      { id: 'stats-success', label: 'Success Rate', type: 'text', value: '95%' },
      { id: 'stats-scholarships', label: 'Scholarships Earned', type: 'text', value: '$50M+' },
      
      // Testimonials Section
      { id: 'testimonials-heading', label: 'Testimonials Heading', type: 'text', value: 'What Our Athletes Say' },
      { id: 'testimonial1-text', label: 'Testimonial 1 Text', type: 'textarea', value: 'Thomas\'s guidance was instrumental in helping me secure a full scholarship. His expertise and personalized approach made all the difference.' },
      { id: 'testimonial1-author', label: 'Testimonial 1 Author', type: 'text', value: 'Sarah Johnson' },
      { id: 'testimonial1-image', label: 'Testimonial 1 Author Image', type: 'image', value: '/src/assets/testimonial1.jpg' },
      { id: 'testimonial2-text', label: 'Testimonial 2 Text', type: 'textarea', value: 'The Game 12 system opened doors I never knew existed. I\'m now playing at my dream college with a full ride.' },
      { id: 'testimonial2-author', label: 'Testimonial 2 Author', type: 'text', value: 'Michael Rodriguez' },
      { id: 'testimonial2-image', label: 'Testimonial 2 Author Image', type: 'image', value: '/src/assets/testimonial2.jpg' },
      { id: 'testimonial3-text', label: 'Testimonial 3 Text', type: 'textarea', value: 'Professional, knowledgeable, and results-driven. Thomas exceeded all our expectations.' },
      { id: 'testimonial3-author', label: 'Testimonial 3 Author', type: 'text', value: 'Jennifer Williams' },
      { id: 'testimonial3-image', label: 'Testimonial 3 Author Image', type: 'image', value: '/src/assets/testimonial3.jpg' },
      
      // Footer Section
      { id: 'footer-contact-phone', label: 'Contact Phone', type: 'text', value: '(555) 123-4567' },
      { id: 'footer-contact-email', label: 'Contact Email', type: 'text', value: 'thomas@recruitingexpert.com' },
      { id: 'footer-contact-address', label: 'Contact Address', type: 'textarea', value: '123 Championship Drive\nSuite 456\nSports City, SC 12345' },
      { id: 'footer-social-facebook', label: 'Facebook URL', type: 'text', value: 'https://facebook.com/thomasandersonrecruiting' },
      { id: 'footer-social-twitter', label: 'Twitter URL', type: 'text', value: 'https://twitter.com/thomasrecruiting' },
      { id: 'footer-social-linkedin', label: 'LinkedIn URL', type: 'text', value: 'https://linkedin.com/in/thomasandersonrecruiting' },
      { id: 'footer-social-instagram', label: 'Instagram URL', type: 'text', value: 'https://instagram.com/thomasrecruiting' },
      { id: 'footer-text', label: 'Footer Text', type: 'textarea', value: '© 2024 Thomas Anderson Recruiting. All rights reserved. Transforming athletic dreams into college reality.' },
    ]
  },
  {
    id: 'about',
    title: 'About Page',
    fields: [
      { id: 'hero-title', label: 'Hero Title', type: 'text', value: 'About Thomas Anderson' },
      { id: 'hero-subtitle', label: 'Hero Subtitle', type: 'textarea', value: 'With over three decades of experience in college recruiting, I\'ve dedicated my career to helping student-athletes achieve their academic and athletic dreams.' },
      { id: 'mission-title', label: 'Mission Title', type: 'text', value: 'My Story & Mission' },
      { id: 'mission-description', label: 'Mission Description', type: 'textarea', value: 'My passion for college recruiting began when I realized that talented student-athletes were missing opportunities simply because they didn\'t understand the process.' },
    ]
  },
  {
    id: 'services',
    title: 'Services Page',
    fields: [
      { id: 'hero-title', label: 'Hero Title', type: 'text', value: 'Personalized Mentorship Program' },
      { id: 'hero-subtitle', label: 'Hero Subtitle', type: 'textarea', value: 'Transform your college recruiting journey with our comprehensive, personalized mentorship program designed specifically for ambitious student-athletes.' },
      { id: 'process-title', label: 'Process Section Title', type: 'text', value: 'Our 3-Stage Success Process' },
      { id: 'stage1-title', label: 'Stage 1 Title', type: 'text', value: 'Assessment' },
      { id: 'stage2-title', label: 'Stage 2 Title', type: 'text', value: 'Strategy' },
      { id: 'stage3-title', label: 'Stage 3 Title', type: 'text', value: 'Execution' },
    ]
  },
  {
    id: 'contact',
    title: 'Contact Page',
    fields: [
      { id: 'hero-title', label: 'Hero Title', type: 'text', value: 'Get In Touch' },
      { id: 'hero-subtitle', label: 'Hero Subtitle', type: 'textarea', value: 'Ready to transform your recruiting journey? Let\'s start the conversation about your college athletic dreams.' },
      { id: 'office-phone', label: 'Office Phone', type: 'text', value: '(555) 123-4567' },
      { id: 'office-email', label: 'Office Email', type: 'text', value: 'thomas@recruitingexpert.com' },
      { id: 'office-address', label: 'Office Address', type: 'textarea', value: '123 Championship Drive\nSuite 456\nSports City, SC 12345' },
    ]
  },
  {
    id: 'media',
    title: 'Media Page',
    fields: [
      { id: 'hero-title', label: 'Hero Title', type: 'text', value: 'Media Hub' },
      { id: 'hero-subtitle', label: 'Hero Subtitle', type: 'textarea', value: 'Access comprehensive educational resources including podcasts, articles, videos, and speaking events designed to guide you through your college recruiting journey.' },
      { id: 'podcast-title', label: 'Podcast Title', type: 'text', value: 'Recruiting Unplugged Podcast' },
      { id: 'blog-title', label: 'Blog Title', type: 'text', value: 'Off the Record Blog' },
      { id: 'video-title', label: 'Video Series Title', type: 'text', value: 'Video Training Series' },
    ]
  },
  {
    id: 'book',
    title: 'Book Page',
    fields: [
      { id: 'book-title', label: 'Book Title', type: 'text', value: 'Dream Big, Play Hard' },
      { id: 'book-subtitle', label: 'Book Subtitle', type: 'textarea', value: 'The Complete Guide to College Recruiting Success' },
      { id: 'book-description', label: 'Book Description', type: 'textarea', value: 'Unlock the secrets of college recruiting with the proven Game 12 system. This comprehensive guide provides step-by-step strategies, real success stories, and insider insights that have helped thousands of student-athletes secure scholarships and achieve their dreams.' },
      { id: 'book-rating', label: 'Book Rating', type: 'text', value: '4.9/5 Stars' },
    ]
  }
];

interface ContentContextType {
  content: PageContent[];
  updateField: (pageId: string, fieldId: string, value: string) => void;
  getPageContent: (pageId: string) => PageContent | undefined;
  getFieldValue: (pageId: string, fieldId: string) => string;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<PageContent[]>(initialContent);

  const updateField = (pageId: string, fieldId: string, value: string) => {
    setContent(prevContent =>
      prevContent.map(page =>
        page.id === pageId
          ? {
              ...page,
              fields: page.fields.map(field =>
                field.id === fieldId ? { ...field, value } : field
              )
            }
          : page
      )
    );
  };

  const getPageContent = (pageId: string) => {
    return content.find(page => page.id === pageId);
  };

  const getFieldValue = (pageId: string, fieldId: string) => {
    const page = getPageContent(pageId);
    const field = page?.fields.find(f => f.id === fieldId);
    return field?.value || '';
  };

  return (
    <ContentContext.Provider value={{ content, updateField, getPageContent, getFieldValue }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};