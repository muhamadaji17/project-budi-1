import React from "react";
import { MessageCircle } from "lucide-react";
import { InstagramIcon, YoutubeIcon, TikTokIcon } from "../atoms/SocialIcons";

export function SocialLinks({ className = "", iconSize = "w-4 h-4" }) {
  const socials = [
    {
      name: "Instagram",
      icon: InstagramIcon,
      href: "https://instagram.com",
      hoverColor: "hover:text-pink-600",
    },
    {
      name: "TikTok",
      icon: TikTokIcon,
      href: "https://tiktok.com",
      hoverColor: "hover:text-black",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/6281234567890",
      hoverColor: "hover:text-green-500",
    },
    {
      name: "YouTube",
      icon: YoutubeIcon,
      href: "https://youtube.com",
      hoverColor: "hover:text-red-600",
    },
  ];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socials.map((item) => {
        const IconComponent = item.icon;
        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 transition-colors ${item.hoverColor} hover:bg-gray-200`}
          >
            <IconComponent className={iconSize} />
          </a>
        );
      })}
    </div>
  );
}
