export type EventCard = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
};

export type BoardPost = {
  id: string;
  topic: string;
  title: string;
  author: string;
  imageHint: string;
};

export type CalendarItem = {
  id: string;
  dateLabel: string;
  items: Array<{ title: string; time: string; color: string }>;
};

export type ChatMessage = {
  id: string;
  user: string;
  timeAgo: string;
  text: string;
};

export const events: EventCard[] = [
  {
    id: "morning-chat",
    title: "Morning Chat",
    subtitle: "Group check in and announcements",
    description: "A calm place to connect and start the day together.",
    color: "#4AA3DF"
  },
  {
    id: "ican-learn",
    title: "I Can Learn",
    subtitle: "Every day is a chance to grow",
    description: "Discover something new with simple prompts and support.",
    color: "#8A6DE9"
  },
  {
    id: "tabata",
    title: "Morning Tabata",
    subtitle: "Movement and energy",
    description: "Short accessible movement session with options.",
    color: "#7A69E0"
  },
  {
    id: "art",
    title: "Art Club",
    subtitle: "Create together",
    description: "Art prompts and share your work with the crew.",
    color: "#49C2B0"
  }
];

export const boardPosts: BoardPost[] = [
  {
    id: "post-1",
    topic: "GARDEN",
    title: "Basic yoga chair stretches",
    author: "Ms.Christine and B Man",
    imageHint: "Yoga poster"
  },
  {
    id: "post-2",
    topic: "COMMUNITY",
    title: "Mac and cheese our version",
    author: "Sejin",
    imageHint: "Cooking"
  },
  {
    id: "post-3",
    topic: "COMMUNITY",
    title: "Game day win",
    author: "Jay",
    imageHint: "Gaming"
  },
  {
    id: "post-4",
    topic: "MOVEMENT",
    title: "Steps goal hit",
    author: "Laura",
    imageHint: "Fitness"
  }
];

export const calendarItems: CalendarItem[] = [
  {
    id: "day-1",
    dateLabel: "7 January, Wednesday",
    items: [
      { title: "Chair yoga", time: "9:30 9:45 AM", color: "#8CC9D6" },
      { title: "Wednesday Chat Cafe", time: "9:45 10:15 AM", color: "#8CC9D6" },
      { title: "Music", time: "11:00 AM 12:00 PM", color: "#8CC9D6" }
    ]
  },
  {
    id: "day-2",
    dateLabel: "8 January, Thursday",
    items: [
      { title: "Tapping", time: "9:30 9:45 AM", color: "#C9A35A" },
      { title: "Thursday Chat Cafe", time: "9:45 10:15 AM", color: "#C9A35A" },
      { title: "Art movement", time: "11:00 AM 12:00 PM", color: "#C9A35A" }
    ]
  },
  {
    id: "day-3",
    dateLabel: "9 January, Friday",
    items: [
      { title: "Friday Chat Cafe", time: "9:30 10:15 AM", color: "#7F87D6" },
      { title: "Friday", time: "11:00 AM 12:15 PM", color: "#7F87D6" }
    ]
  }
];

export const chatMessages: ChatMessage[] = [
  { id: "m1", user: "Puneet", timeAgo: "2 hrs ago", text: "so happy josh" },
  { id: "m2", user: "Jeffrey", timeAgo: "2 hrs ago", text: "That’s great" },
  { id: "m3", user: "Laura", timeAgo: "3 hrs ago", text: "That’s awesome Josh!" },
  {
    id: "m4",
    user: "Joshua",
    timeAgo: "2 d ago",
    text: "Great news this month I’ll be securing passport for Canada 🇨🇦"
  }
];
