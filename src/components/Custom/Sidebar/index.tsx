'use client';

// Imports:
import Wrapper from '@/components/Generics/Wrapper';
import { sidebarItems } from '@/constants/Sidebar';
import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/stores/useSidebarStore';
import { Typography } from '@material-tailwind/react';
import UserIcon from '../UserIcon';

export default function Sidebar() {
  return (
    <Wrapper className="space-y-10 h-full">
      <UserIcon />
      <SidebarNav />
    </Wrapper>
  );
}

function SidebarNav() {
  const { activeItem, setActiveItem } = useSidebarStore();

  return (
    <ul className="size-full space-y-3 overflow-hidden">
      {sidebarItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeItem === item.label;

        return (
          <li
            className={cn(
              'py-[10px] px-4 rounded-lg flex items-center gap-3 cursor-pointer',
              {
                'bg-primary': isActive,
                'hover:bg-input': !isActive,
              }
            )}
            key={item.label}
            onClick={() => setActiveItem(item.label)}
          >
            <Icon className="size-8 text-core-white" />
            <Typography
              variant="lead"
              className="text-lg font-bold text-core-white w-full"
            >
              {item.label}
            </Typography>
          </li>
        );
      })}
    </ul>
  );
}
