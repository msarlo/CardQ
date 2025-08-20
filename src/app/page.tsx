'use client'
import React from 'react';
import ChampionshipBanner from './components/championshipBanner';

export default function home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl text-black font-bold mb-4">A MAIOR PLATAFORMA DE CAMPEONATOS</h1>
      <p className="text-lg text-gray-700">OS maiores nerds do Brasil</p>
      <ChampionshipBanner
        imageUrl="/images/vava.jpg"
        title="Torneio Valorant"
        game="Valorant"
        date="2025-09-12"
        buttonText="Participar"
        onRegister={() => console.log('inscrito')}
      />
    </div>
  );
}