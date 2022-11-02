import React from "react";
import Image from "next/image";
import friendsIcon from "../facebook-backend/assets/friends.png";
import groupsIcon from "..facebook-backend/assets/groups.png";
import marketIcon from "../facebook-backendassets/marketplace.png";
import memoriesIcon from "../facebook-backend/assets/memories.png";
import watchIcon from "../facebook-backend/assets/watch.png";
import dropdownIcon from "../facebook-backend/assets/dropdown.png";

// /Users/macbookpro/Desktop/BC/solana-projects/facebook-solana/app/facebook-sol/facebook-backend/assets/friends.png
// /Users/macbookpro/Desktop/BC/solana-projects/facebook-solana/app/facebook-sol/facebook-backend/static/static.js
export const sidebarData = [
  {
    icon: friendsIcon,
    title: `Friends`,
  },
  {
    icon: groupsIcon,
    title: `Groups`,
  },
  {
    icon: marketplace,
    title: `Marketplace`,
  },
  {
    icon: watchIcon,
    title: `Watch`,
  },
  {
    icon: memoriesIcon,
    title: `Memories`,
  },
  {
    icon: dropdownIcon,
    title: `See more`,
  },
];
