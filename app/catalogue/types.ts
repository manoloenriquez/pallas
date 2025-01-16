import { BlocksContent } from "@strapi/blocks-react-renderer";

export interface ProductData {
  id: number;
  documentId: string;
  Description: BlocksContent; // Adjust type based on your actual data structure
  Name: string;
  Category: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  CoverImage: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: any; // Because we only have [Object] in the sample
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
  Images: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: any; // Because we only have [Object] in the sample
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }[];
  slug: string;
}
