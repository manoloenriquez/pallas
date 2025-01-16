"use client";

export default function myImageLoader({ src, width, quality }) {
  return `${src}`.replaceAll(" ", "%20");
}
