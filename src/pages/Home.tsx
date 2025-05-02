import React from 'react';
import { FileUploader } from '../components/FileUploader';

export const Home: React.FC = () => {
  return (
    <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-sm overflow-hidden">
        <FileUploader />
      </div>
    </main>
  );
};