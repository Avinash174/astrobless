import React, { useState, useEffect } from 'react';
import StaticPage from '../components/StaticPage';

const PrivacyPolicy: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const content = [
    {
      heading: 'Data Collection',
      text: 'We collect information you provide directly to us, such as when you create an account, participate in a chat, or request a horoscope. This includes your name, date of birth, time of birth, and location details necessary for celestial calculations.'
    },
    {
      heading: 'How We Use Your Data',
      text: 'Your data is primarily used to generate accurate astrological reports and facilitate consultations. We never sell your personal information to third parties. We use industry-standard encryption to protect your sensitive data during transmission and storage.'
    },
    {
      heading: 'Cookie Policy',
      text: 'We use essential cookies to maintain your session and preference cookies to remember your cosmic settings. You can manage your cookie preferences through your browser settings at any time.'
    },
    {
      heading: 'Your Rights',
      text: 'You have the right to access, correct, or delete your personal data at any time through your account settings. For detailed inquiries, you can reach out to our privacy officer at privacy@example.com.'
    }
  ];

  return (
    <StaticPage 
      title="Privacy Policy" 
      subtitle="Your trust is our most valuable asset. Learn how we protect your cosmic data." 
      loading={loading}
      content={content} 
    />
  );
};

export default PrivacyPolicy;
