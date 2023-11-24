export interface Coin {
  uuid: string;
  symbol: string;
  name: string;
  iconUrl: string;
  marketCap: string;
  price: string;
  change: string;
  rank: number;
  ["24hVolume"]: string;
}

export interface Article {
  url: string;
  title: string;
  description: string;
  thumbnail: string;
  createdAt: string;
}
