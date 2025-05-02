import React from 'react';

export const Terms: React.FC = () => {
  return (
    <main className="flex-grow container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-6">Last updated: March 15, 2024</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-6">
            By accessing and using ConvertX, you accept and agree to be bound by the terms and conditions of this agreement.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Use License</h2>
          <p className="text-gray-600 mb-6">
            ConvertX grants you a personal, non-exclusive, non-transferable license to use our service for converting WebP images to PNG format.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Restrictions</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>You may not use this service for any illegal purposes</li>
            <li>You may not attempt to reverse engineer the service</li>
            <li>You may not use the service in any way that could damage or overburden it</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Disclaimer</h2>
          <p className="text-gray-600 mb-6">
            The service is provided "as is" without any warranties, expressed or implied. We do not guarantee that the service will be uninterrupted or error-free.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Limitation of Liability</h2>
          <p className="text-gray-600 mb-6">
            ConvertX shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Changes to Terms</h2>
          <p className="text-gray-600 mb-6">
            We reserve the right to modify these terms at any time. Your continued use of the service following any changes constitutes acceptance of those changes.
          </p>
        </div>
      </div>
    </main>
  );
};