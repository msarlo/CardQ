'use client'
import React from 'react';
import Image from 'next/image';

interface ChampionshipBannerProps {
  imageUrl: string;
  title: string;
  game: string;
  date: string | Date;
  buttonText?: string;
  onRegister?: () => void;
  className?: string;
  imageAlt?: string;
}

function formatDate(date: string | Date) {
  const d = typeof date === 'string' ? new Date(date) : date;
  if (isNaN(d.getTime())) return '';
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(d);
}

const ChampionshipBanner: React.FC<ChampionshipBannerProps> = ({
  imageUrl,
  title,
  game,
  date,
  buttonText = 'Inscreva-se',
  onRegister,
  className = '',
  imageAlt = title
}) => {
  return (
    <div className={`relative flex w-80 flex-col overflow-hidden rounded-xl bg-white text-gray-700 shadow-md ${className}`}>
      <div className="h-40 w-full overflow-hidden relative">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="320px"
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h5 className="text-lg font-semibold leading-snug">{title}</h5>
        <div className="text-sm text-gray-500 flex flex-col gap-0.5">
          <span><span className="font-medium text-gray-600">Jogo:</span> {game}</span>
          <span><span className="font-medium text-gray-600">Data:</span> {formatDate(date)}</span>
        </div>
        <button
          type="button"
          onClick={() => onRegister?.()}
          className="mt-2 inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50"
          disabled={!onRegister}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ChampionshipBanner;
