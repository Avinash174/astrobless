import React, { useState, useEffect } from 'react';
import StaticPage from '../components/StaticPage';

const RefundPolicy: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const content = [
    {
      heading: 'Eligibility for Refunds',
      text: 'We take our users\' satisfaction seriously. You are eligible for a refund if:\n• A technical failure on our platform prevented the session from occurring.\n• The astrologer failed to join the session within the scheduled time.\n• There were significant connectivity issues originating from our servers.'
    },
    {
      heading: 'Non-Refundable Situations',
      text: 'Refunds are generally not provided for:\n• Dissatisfaction with the nature of the astrological prediction.\n• Personal disagreements with the expert\'s guidance.\n• Sessions that were completed successfully without technical interruptions.'
    },
    {
      heading: 'How to Request',
      text: 'To request a refund, go to the "Support" section and submit a ticket within 24 hours of the session. Please include the session ID and a brief description of the issue. Our team will review the chat/call logs and respond within 48 hours.'
    },
    {
      heading: 'Wallet Balance',
      text: 'Approved refunds are credited back to your AstroBless Wallet instantly. Please note that promotional or bonus credits added by the platform are non-refundable and cannot be withdrawn to a bank account.'
    }
  ];

  return (
    <StaticPage 
      title="Refund Policy" 
      subtitle="Ensuring a fair and transparent experience for all our seekers." 
      loading={loading}
      content={content} 
    />
  );
};

export default RefundPolicy;
