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
      { id: 'hero-title', label: 'Hero Title', type: 'text', value: 'Transform Your Athletic Dreams Into College Reality' },
      { id: 'hero-subtitle', label: 'Hero Subtitle', type: 'textarea', value: 'Discover the proven Game 12 system that has helped thousands of student-athletes secure college scholarships and achieve their academic dreams.' },
      { id: 'hero-image', label: 'Hero Background Image', type: 'image', value: '/src/assets/hero-recruiting.jpg' },
      { id: 'stats-experience', label: 'Years Experience', type: 'text', value: '31+' },
      { id: 'stats-athletes', label: 'Athletes Guided', type: 'text', value: '5,000+' },
      { id: 'stats-success', label: 'Success Rate', type: 'text', value: '95%' },
      { id: 'stats-scholarships', label: 'Scholarships Earned', type: 'text', value: '$50M+' },
      { id: 'authority-title', label: 'Authority Section Title', type: 'text', value: 'Why Choose Thomas Anderson?' },
      { id: 'authority-subtitle', label: 'Authority Section Subtitle', type: 'textarea', value: 'Three decades of proven results, innovative strategies, and personalized guidance that transforms potential into performance.' },
      { id: 'book-title', label: 'Book Title', type: 'text', value: 'Dream Big, Play Hard' },
      { id: 'book-description', label: 'Book Description', type: 'textarea', value: 'The definitive guide to college recruiting success, featuring the complete Game 12 system and real-world strategies that have transformed thousands of student-athletes\' futures.' },
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