import {
  Home,
  Coins,
  Newspaper,
  Rocket,
  LucideLineChart,
  Globe,
  Siren,
} from "lucide-react";

export const NAV_LINKS = [
  { id: 1, title: "Home", href: "/", icon: Home },
  { id: 2, title: "Crypto", href: "/crypto", icon: Coins },
  { id: 3, title: "News", href: "/news", icon: Newspaper },
];

export const POINTS = [
  {
    id: 1,
    title: "Unleash the Power of Crypto at Your Fingertips!",
    icon: Rocket,
    description:
      "Embark on a journey into the future of finance with Blockify, the ultimate crypto companion.",
  },
  {
    id: 2,
    title: "Stay Ahead with Real-Time Insights",
    icon: LucideLineChart,
    description:
      "Experience the thrill of the crypto market in real-time. Blockify provides live price updates, interactive charts, and personalized portfolios, ensuring you're always in the know.",
  },
  {
    id: 3,
    title: "Connect, Explore, and Thrive",
    icon: Globe,
    description:
      "Blockify is more than an app; it's a community. Stay informed with the latest news and insights, and connect with like-minded individuals.",
  },
  {
    id: 4,
    title: "Never Miss a Beat with Custom Alerts",
    icon: Siren,
    description:
      "Set personalized alerts for price movements tailored to your preferences. Blockify ensures you never miss an opportunity, keeping you ahead of the curve in the fast-paced world of crypto.",
  },
];
