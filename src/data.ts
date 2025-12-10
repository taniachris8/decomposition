/**
 * A file that serves as a database
 */

import { v4 as uuidv4 } from "uuid";

export type latestNewsProps = {
  id: string;
  title: string;
  img: string;
};

export type currencyProps = {
  id: string;
  name: string;
  exchange: string;
  rate: number;
  level: string;
};

export type searchLinksProps = {
  id: string;
  name: string;
};

export type weatherInfoProps = {
  img: string;
  degree: string;
  morning: string;
  day: string;
  night: string;
};

export type mostVisitedLinksProps = {
  id: string;
  category: string;
  about: string;
};

export type tvProgramProps = {
  id: string;
  time: string;
  name: string;
  channel: string;
};

export type broadcastProps = {
  id: string;
  img: string;
  name: string;
  channel: string;
};

export const latestNews: latestNewsProps[] = [
  {
    id: uuidv4(),
    title: "Tech Giants Race to Launch Next-Gen AI Chips",
    img: "/fav-icons/icons8-cute-puppy-icon-16.png",
  },
  {
    id: uuidv4(),
    title: "Global Markets Surge Amid Optimistic Forecasts",
    img: "/fav-icons/icons8-cute-approval-icon-16.png",
  },
  {
    id: uuidv4(),
    title: "Scientists Announce Breakthrough in Clean Energy",
    img: "/fav-icons/icons8-cute-kitty-icon-16.png",
  },
  {
    id: uuidv4(),
    title: "New Study Reveals Sharp Decline in Social Media Use",
    img: "/fav-icons/icons8-cute-play-icon-16.png",
  },
  {
    id: uuidv4(),
    title: "Major Airline Unveils Ultra-Fuel-Efficient Fleet",
    img: "/fav-icons/icons8-cute-puppy-icon-16.png",
  },
];

export const currencies: currencyProps[] = [
  {
    id: uuidv4(),
    name: "USD",
    exchange: "MOEX",
    rate: 63.52,
    level: "+0.09",
  },
  {
    id: uuidv4(),
    name: "EUR",
    exchange: "MOEX",
    rate: 63.52,
    level: "+0.14",
  },
  {
    id: uuidv4(),
    name: "НЕФТЬ",
    exchange: "MOEX",
    rate: 64.9,
    level: "+1.63 %",
  },
];

export const searchLinks: searchLinksProps[] = [
  { id: uuidv4(), name: "Video" },
  { id: uuidv4(), name: "Images" },
  { id: uuidv4(), name: "News" },
  { id: uuidv4(), name: "Maps" },
  { id: uuidv4(), name: "Market" },
  { id: uuidv4(), name: "Translator" },
  { id: uuidv4(), name: "Broadcast" },
  { id: uuidv4(), name: "more" },
];

export const weatherInfo: weatherInfoProps = {
  img: "images/icons8-partly-cloudy-day-48.png",
  degree: "+19°",
  morning: "+10",
  day: "+19",
  night: "+13",
};

export const mostVisitedLinks: mostVisitedLinksProps[] = [
  {
    id: uuidv4(),
    category: "Property",
    about: "new styles",
  },
  {
    id: uuidv4(),
    category: "Market",
    about: "lower prices",
  },
  {
    id: uuidv4(),
    category: "BMW.com",
    about: "popular models",
  },
];

export const tvProgramData: tvProgramProps[] = [
  {
    id: uuidv4(),
    time: "02:00",
    name: "Morning Sportlight",
    channel: "CNN",
  },
  {
    id: uuidv4(),
    time: "03:00",
    name: "Cooing in 10 Minutes",
    channel: "BBC",
  },
  {
    id: uuidv4(),
    time: "04:10",
    name: "Fitness Break",
    channel: "7",
  },
];

export const broadcastData: broadcastProps[] = [
  {
    id: uuidv4(),
    img: "/fav-icons/icons8-video-16.png",
    name: "Global Trends",
    channel: "BBC World",
  },
  {
    id: uuidv4(),
    img: "/fav-icons/icons8-video-16.png",
    name: "Tech Today",
    channel: "CNN",
  },
  {
    id: uuidv4(),
    img: "/fav-icons/icons8-video-16.png",
    name: "Morning Vibes",
    channel: "Discovery Life",
  },
];
