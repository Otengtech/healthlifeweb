import React from 'react';

const PolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 bg-gray-900">
      <div className="w-full max-w-4xl p-8 md:p-12">
        <h1 className="text-3xl font-bold text-green-500 mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-300 mb-4">
          Welcome to HealthLife! We value your privacy and want to make it clear that this website does <strong>not collect any personal information</strong> from our users. You can browse our content safely and securely.
        </p>

        <h2 className="text-2xl font-semibold text-green-500 mt-6 mb-3">
          Cookies and Analytics
        </h2>
        <p className="text-gray-300 mb-4">
          HealthLife may use <strong>cookies</strong> or third-party services such as Google Analytics and Google AdSense to enhance your experience and deliver relevant content. No personal data is collected.
        </p>

        <h2 className="text-2xl font-semibold text-green-500 mt-6 mb-3">
          Third-Party Services
        </h2>
        <p className="text-gray-300 mb-4">
          Our website may include links, ads, or features from third-party services. These services may collect anonymous data or use cookies. We are not responsible for their practices, and we encourage you to review their policies.
        </p>

        <h2 className="text-2xl font-semibold text-green-500 mt-6 mb-3">
          Content for Informational Purposes
        </h2>
        <p className="text-gray-300 mb-4">
          All content on HealthLife is for general informational purposes only. It is <strong>not a substitute for professional medical advice, diagnosis, or treatment</strong>. Always consult a qualified healthcare professional for medical concerns.
        </p>

        <h2 className="text-2xl font-semibold text-green-500 mt-6 mb-3">
          Security
        </h2>
        <p className="text-gray-300 mb-4">
          While we do not collect personal information, we maintain our website using up-to-date security standards to protect the integrity of our content and prevent unauthorized access.
        </p>

        <h2 className="text-2xl font-semibold text-green-500 mt-6 mb-3">
          Updates to This Policy
        </h2>
        <p className="text-gray-300 mb-4">
          HealthLife may update this Privacy Policy periodically. All updates will be reflected on this page. We recommend checking back occasionally to stay informed.
        </p>

        <h2 className="text-2xl font-semibold text-green-500 mt-6 mb-3">
          External Links
        </h2>
        <p className="text-gray-300 mb-4">
          Our site may contain links to other websites. HealthLife is not responsible for the content or privacy practices of external websites. Please review their respective policies.
        </p>
      </div>
    </div>
  );
};

export default PolicyPage;
