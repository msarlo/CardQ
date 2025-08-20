import React from 'react';


interface HeaderProps {
  title: string;
  children?: React.ReactNode;
}

function Header({ title, children }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-red-600 text-white flex items-center px-6 shadow z-50">
      <h1 className="text-lg font-semibold">{title}</h1>
      <div className="ml-4 flex-1">{children}</div>
    </header>
  );
}

export default Header;