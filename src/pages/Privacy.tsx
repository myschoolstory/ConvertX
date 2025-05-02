import React from 'react';

export const Privacy: React.FC = () => {
  return (
    <main className="flex-grow container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-6">Last updated: March 15, 2024</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 mb-6">
            ConvertX processes your images directly in your browser. We do not store, collect, or transmit your images to any servers. The conversion process happens entirely on your device.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600 mb-6">
            We use essential cookies and local storage only for maintaining your session and preferences. No personal information is collected or stored.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Data Security</h2>
          <p className="text-gray-600 mb-6">
            Your privacy and security are our top priorities. Since all processing happens locally in your browser, your images never leave your device during the conversion process.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Third-Party Services</h2>
          <p className="text-gray-600 mb-6">
            We do not integrate with any third-party services that collect user data. Our service operates independently and locally within your browser.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Updates to This Policy</h2>
          <p className="text-gray-600 mb-6">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Contact Us</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about this privacy policy, please contact us at privacy@convertx.com.
          </p>
        </div>
      </div>
    </main>
  );
};