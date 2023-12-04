
export interface MovieModel {
  id: number;
  title: string;
  description?: string;
  rating?: number;
  duration?: string;
  genre?: string;
  releasedDate: Date;
  trailerLink: string;
  image?: string
}
