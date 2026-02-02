import {
  DiscordLogoIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  LinkIcon,
  MediumLogoIcon,
  XLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { USER } from "./user";

export const SOCIALS = [
  {
    title: "Github",
    url: `https://github.com/${USER.username}`,
    icon: GithubLogoIcon,
    hoverColor: "#24292f",
  },
  {
    title: "Medium",
    url: `https://medium.com/@${USER.username}`,
    icon: MediumLogoIcon,
    hoverColor: "#00ab6c",
  },
  {
    title: "X",
    url: `https://x.com/${USER.username}`,
    icon: XLogoIcon,
    hoverColor: "#0f1419",
  },
  {
    title: "LinkedIn",
    url: `https://www.linkedin.com/in/${USER.username}`,
    icon: LinkedinLogoIcon,
    hoverColor: "#0a66c2",
  },
  {
    title: "YouTube",
    url: `https://www.youtube.com/@${USER.username}`,
    icon: YoutubeLogoIcon,
    hoverColor: "#f43f5e",
  },
  {
    title: "Discord",
    url: `https://discord.com/invite/YY9TTn7x`,
    icon: DiscordLogoIcon,
    hoverColor: "#5865f2",
  },
  {
    title: "Instagram",
    url: `https://www.instagram.com/${USER.username}`,
    icon: InstagramLogoIcon,
    hoverColor: "#e4405f",
  },
  {
    title: "Peerlist",
    url: `https://peerlist.io/${USER.username}`,
    icon: LinkIcon,
    hoverColor: "#00b386",
  },
];
