import React from 'react';

export type DesignPattern = 'A' | 'B' | 'C';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface WorkItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}