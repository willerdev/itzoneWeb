// src/types/firebase.ts

// Posts Collection
export interface Post {
  title: string;
  category: string;
  subcategory: string;
  brand: string;
  price: string;
  location: string;
  description: string;
  negotiable: boolean;
  delivery: 'free' | 'charged';
  condition: 'new' | 'like-new' | 'good' | 'fair';
  images: string[];
  userId: string;
  userName: string;
  createdAt: string;
  status: 'active' | 'sold' | 'deleted';
}

// Users Collection
export interface User {
  name: string;
  email: string;
  createdAt: string;
  avatar?: string;
  phone?: string;
  rating?: number;
  reviewCount?: number;
}

// Reviews Collection
export interface Review {
  userId: string;
  targetUserId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

// Chats Collection
export interface Chat {
  participants: string[];
  lastMessage: string;
  lastMessageTime: string;
  postId?: string;
}

// Messages Collection (subcollection of Chats)
export interface Message {
  senderId: string;
  content: string;
  createdAt: string;
  read: boolean;
}
