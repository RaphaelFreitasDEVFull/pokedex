export interface List {
  count: number;
  next: string;
  previous: any;
  results: PokeInfo[];
}

export interface PokeInfo {
  name: string;
  url: string;
}
