export interface Painting {
  title: string;
  alt: string;
  description: string;
  year: string;
  width: number;
  height: number;
  scaledWidth?: number;
  scaledHeight?: number;
  surface: string;
  medium: string;
  availability: boolean;
  src: string;
  uid: string | null;
}
