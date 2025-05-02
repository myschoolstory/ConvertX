import React from 'react';

export const About: React.FC = () => {
  return (
    <main className="flex-grow container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About ConvertX</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            ConvertX is a professional-grade image conversion tool designed to transform WebP images into high-quality PNG format. Our platform combines ease of use with powerful features to meet both casual and professional needs.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            We believe in making professional-grade image conversion accessible to everyone. Our mission is to provide a reliable, efficient, and user-friendly tool that maintains the highest standards of image quality while simplifying the conversion process.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Features</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Professional Lossless Conversion</li>
            <li>Adjustable Compression Settings</li>
            <li>Real-time Preview</li>
            <li>Side-by-side Comparison</li>
            <li>Drag-and-Drop Interface</li>
            <li>Instant Downloads</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why Choose ConvertX?</h2>
          <p className="text-gray-600 mb-6">
            ConvertX stands out for its commitment to quality and user experience. Whether you're a professional photographer, designer, or someone who occasionally needs to convert images, our tool provides the perfect balance of power and simplicity.
          </p>
        </div>
      </div>
    </main>
  );
};