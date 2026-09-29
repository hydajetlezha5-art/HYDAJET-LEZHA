export interface NewsItem {
  id: string;
  title: string;
  category: 'Olimpiada' | 'Aktivitete' | 'Projekte' | 'Ekskursione' | 'Njoftime';
  date: string;
  author: string;
  summary: string;
  content: string;
  image: string;
  readTime: string;
  isFeatured?: boolean;
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  priority: 'urgjente' | 'lartë' | 'normale';
  targetAudience: 'Nxënës' | 'Prindër' | 'Mësues' | 'Të Gjithë';
  content: string;
  fileAttachment?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'shkencore' | 'tik' | 'artistike' | 'nderkombetare';
  categoryLabel: string;
  mentor: string;
  students: string[];
  description: string;
  extendedDescription: string;
  tags: string[];
  image: string;
  hasInteractiveLab?: boolean;
  qrCodeUrl?: string;
  externalUrl?: string;
  status: 'Aktiv' | 'I Përfunduar';
  year: string;
}

export interface Achievement {
  id: string;
  year: number;
  title: string;
  event: string;
  recipient: string;
  level: 'Kombëtare' | 'Ballkanike' | 'Ndërkombëtare' | 'Rajonale';
  type: 'ari' | 'argjend' | 'bronztë' | 'cmim_nderi';
  description: string;
}

export interface StudentClub {
  id: string;
  name: string;
  category: string;
  leader: string;
  membersCount: number;
  meetingSchedule: string;
  description: string;
  highlights: string[];
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'shkolla' | 'aktivitete' | 'projekte' | 'gara' | 'ekskursione' | 'evente';
  categoryLabel: string;
  date: string;
  image: string;
  caption: string;
}

export interface DocumentItem {
  id: string;
  title: string;
  code: string;
  category: 'rregullore' | 'orari' | 'matura' | 'formulare' | 'udhezime';
  categoryLabel: string;
  fileSize: string;
  format: 'PDF' | 'DOCX';
  updateDate: string;
  description: string;
  downloadUrl?: string;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  department: 'Drejtoria' | 'Shkencat e Natyrës' | 'Gjuhë & Letërsi' | 'Shkenca Shoqërore & TIK' | 'Shërbimi Psiko-Social';
  qualifications: string;
  yearsOfExperience: number;
  email: string;
  image?: string;
}
