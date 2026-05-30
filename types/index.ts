export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  duration?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

export interface Platform {
  id: string;
  name: string;
  logo: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}
