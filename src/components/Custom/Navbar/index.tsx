'use client';

// Imports:
import ButtonWithIcon from '@/components/Generics/ButtonWithIcon';
import Wrapper from '@/components/Generics/Wrapper';
import { Button } from '@/components/UI/button';
import navItems from '@/constants/Nav';
import { commonArrowIcon, logo } from '@/constants/Paths';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiMiniBars3BottomRight } from 'react-icons/hi2';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen((prev) => !prev);
  }

  return (
    <Wrapper className="max-w-full w-full bg-core-black text-neutral-800 px-5 py-2 sm:px-[60px] sm:py-5 flex justify-between items-center">
      <Logo />
      <DesktopNav />
      <DesktopCTA />
      <MobileMenuToggle onClick={toggleMobileMenu} />
      <MobileNav isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
      {isMobileMenuOpen && <MobileOverlay onClick={toggleMobileMenu} />}
    </Wrapper>
  );
}

function Logo() {
  return (
    <div className="w-6/12 sm:w-3/12 overflow-hidden">
      <Image
        src={logo.image}
        alt={logo.alt}
        width={500}
        height={500}
        className="object-cover w-4/6"
      />
    </div>
  );
}

function DesktopNav() {
  return (
    <div className="hidden w-6/12 overflow-hidden lg:flex justify-center space-x-10 text-xl font-semibold">
      {navItems.map((item) => (
        <Link
          key={item.title}
          href={item.path}
          className="hover:text-primary transition-colors duration-200"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}

function DesktopCTA() {
  return (
    <div className="w-3/12 overflow-hidden hidden lg:flex justify-end">
      <ButtonWithIcon
        rightIcon={
          <Image
            src={commonArrowIcon.icon}
            alt={commonArrowIcon.iconAlt}
            width={25}
            height={25}
          />
        }
        className="bg-primary text-core-white text-xl font-semibold p-5"
      >
        Sign up
      </ButtonWithIcon>
    </div>
  );
}

function MobileMenuToggle({ onClick }: { onClick: () => void }) {
  return (
    <Button
      size="icon"
      className="lg:hidden flex flex-col justify-center items-center size-8"
      onClick={onClick}
    >
      <HiMiniBars3BottomRight />
    </Button>
  );
}

function MobileNav({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`lg:hidden fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-neutral-800 text-core-black flex flex-col justify-center space-y-10 px-10 transition-transform duration-300 ease-in-out z-50 text-xl font-semibold ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {navItems.map((item) => (
        <Link
          key={item.title}
          href={item.path}
          className="py-4 hover:text-primary transition-colors duration-200"
          onClick={onClose}
        >
          {item.title}
        </Link>
      ))}

      <ButtonWithIcon
        rightIcon={
          <Image
            src={commonArrowIcon.icon}
            alt={commonArrowIcon.iconAlt}
            width={20}
            height={20}
          />
        }
        className="bg-primary text-core-white p-5 w-full"
        onClick={onClose}
      >
        Sign up
      </ButtonWithIcon>
    </div>
  );
}

function MobileOverlay({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
      onClick={onClick}
    />
  );
}
