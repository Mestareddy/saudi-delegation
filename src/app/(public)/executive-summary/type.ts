export type Highlight = {
  title: string;
  description: string;
}

export interface EventSummary {
  outcomes: string[];
  outcomes2: string[];
  footer: string;
  email: string;
  schedule: {
    day: string
    caption:string,
    event:string[]
  }[],
}
