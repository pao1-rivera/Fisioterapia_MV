export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  symptoms: string[];
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  condition: string;
  quote: string;
  rating: number;
  imageSeed: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: {
    label: string;
    value: string;
    icon?: string;
  }[];
}
