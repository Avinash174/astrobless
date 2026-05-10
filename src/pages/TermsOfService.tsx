import React, { useState, useEffect } from 'react';
import StaticPage from '../components/StaticPage';

const TermsOfService: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const content = [
    {
      heading: 'Usage Terms',
      text: 'By accessing AstroBless, you agree to be bound by these terms of service. Our services are intended for entertainment and spiritual guidance purposes. While our experts strive for accuracy, astrological predictions should not be used as a substitute for professional legal, medical, or financial advice.'
    },
    {
      heading: 'Consultation Rules',
      text: 'Users must maintain respectful behavior during live sessions. Any form of harassment or inappropriate content will lead to immediate account suspension without refund. Consultations are billed per minute or per session as indicated.'
    },
    {
      heading: 'Account Security',
      text: 'You are responsible for maintaining the confidentiality of your account credentials. AstroBless is not liable for any loss resulting from unauthorized access to your account due to negligence.'
    },
    {
      heading: 'Refund Policy',
      text: 'Refunds are provided if a technical issue on our end prevents a scheduled consultation. Please contact support within 24 hours of the incident for a review of your case.'
    }
  ];

  return (
    <StaticPage 
      title="Terms of Service" 
      subtitle="Standard guidelines for a harmonious experience on our platform." 
      loading={loading}
      content={content} 
    />
  );
};

export default TermsOfService;
