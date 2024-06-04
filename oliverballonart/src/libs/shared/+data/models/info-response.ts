export interface Info {
  title: string;
  info: InfoItem[];
  urlLink1: Link;
  urlLink2: Link;
  uid: string | null;
}

interface InfoItem {
  text: string;
  type: string;
  spans: [];
}

interface Link {
  link_type: string;
  url: string;
  target: string;
}
