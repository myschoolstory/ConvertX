import React from 'react';
import { FileUploader } from '../components/FileUploader';

export const Home: React.FC = () => {
  return (
    <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Image to PNG Converter</h1>
          <p className="text-xl text-gray-600">Convert your WebP, JPG, and JPEG images to PNG format with ease</p>
        </div>
        <FileUploader />
      </div>
    </main>
  );
};