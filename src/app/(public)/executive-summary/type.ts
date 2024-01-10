export type Highlight = {
  title: string;
  description: string;
}

export interface EventSummary {
  day: string;
  description: string;
  highlights: Highlight[];
  outcomes: string[];
  caption: string;
  sessions: {
    sectionA: {
      title: string;
      description: string;
    }[];
    sectionAImage: {
      path: string;
    };
    sectionB: {
      title: string;
      description: string;
    }[];
    sectionBImage: string[];
    };
  footer: string;
  email: string;
}
