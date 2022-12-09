export interface SanityProps {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: SanityType;
  _updatedAt: string;
}

export enum SanityType {
  Featured = 'featured',
}
