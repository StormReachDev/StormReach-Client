// Imports:
import { UploadState } from '@/types/Stores';
import { create } from 'zustand';

export const useUploadStore = create<UploadState>((set) => ({
  imageUrl: '',
  publicId: '',
  setImageUrl: (url) => set({ imageUrl: url }),
  setPublicId: (id) => set({ publicId: id }),
  clearImage: () => set({ imageUrl: '', publicId: '' }),
}));
