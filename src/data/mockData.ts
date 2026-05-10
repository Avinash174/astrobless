export interface Astrologer {
  id: string;
  name: string;
  image: string;
  experience: number;
  rating: number;
  price: number;
  languages: string[];
  specialties: string[];
  concerns: string[];
  online: boolean;
  about: string;
  reviewsCount: number;
}

export const astrologers: Astrologer[] = [
  {
    id: '1',
    name: 'Acharya Vamsi',
    image: 'https://i.pravatar.cc/300?u=1',
    experience: 12,
    rating: 4.9,
    price: 25,
    languages: ['Hindi', 'English'],
    specialties: ['Vedic', 'Vastu', 'Numerology'],
    concerns: ['career', 'marriage', 'finance', 'education'],
    online: true,
    about: 'Acharya Vamsi is a renowned Vedic astrologer with over 12 years of experience. He specializes in career, marriage, and financial consultations.',
    reviewsCount: 1240
  },
  {
    id: '2',
    name: 'Pandit Rajesh',
    image: 'https://i.pravatar.cc/300?u=2',
    experience: 15,
    rating: 4.8,
    price: 30,
    languages: ['Hindi', 'Marathi'],
    specialties: ['Vedic', 'Face Reading'],
    concerns: ['love', 'marriage', 'health', 'legal'],
    online: true,
    about: 'Pandit Rajesh has helped thousands of people find their path through ancient wisdom and precise calculations.',
    reviewsCount: 2100
  },
  {
    id: '3',
    name: 'Astro Sneha',
    image: 'https://i.pravatar.cc/300?u=3',
    experience: 8,
    rating: 4.7,
    price: 20,
    languages: ['Hindi', 'English', 'Gujarati'],
    specialties: ['Tarot', 'Psychic'],
    concerns: ['love', 'career', 'foreign'],
    online: false,
    about: 'Astro Sneha combines intuition with tarot cards to provide deep insights into your personal life and future.',
    reviewsCount: 850
  },
  {
    id: '4',
    name: 'Guru Daksh',
    image: 'https://i.pravatar.cc/300?u=4',
    experience: 20,
    rating: 5.0,
    price: 50,
    languages: ['Hindi', 'Sanskrit'],
    specialties: ['Vedic', 'Palmistry', 'Nadi'],
    concerns: ['marriage', 'legal', 'finance', 'health'],
    online: true,
    about: 'Guru Daksh is an expert in Nadi astrology and Palmistry, providing life-changing remedies for all problems.',
    reviewsCount: 3500
  },
  {
    id: '5',
    name: 'Ma Devi',
    image: 'https://i.pravatar.cc/300?u=5',
    experience: 18,
    rating: 4.9,
    price: 35,
    languages: ['Hindi', 'Bengali'],
    specialties: ['Vedic', 'Vastu'],
    concerns: ['marriage', 'health', 'legal'],
    online: true,
    about: 'Ma Devi provides profound spiritual guidance and Vastu remedies for a harmonious life.',
    reviewsCount: 1800
  },
  {
    id: '6',
    name: 'Astro Kabir',
    image: 'https://i.pravatar.cc/300?u=6',
    experience: 10,
    rating: 4.6,
    price: 15,
    languages: ['Hindi', 'English', 'Punjabi'],
    specialties: ['Numerology', 'Lal Kitab'],
    concerns: ['career', 'finance', 'education'],
    online: true,
    about: 'Astro Kabir is an expert in Lal Kitab and Numerology, offering simple and effective remedies.',
    reviewsCount: 920
  },
  {
    id: '7',
    name: 'Pandit Anant',
    image: 'https://i.pravatar.cc/300?u=7',
    experience: 25,
    rating: 4.9,
    price: 45,
    languages: ['Hindi', 'Sanskrit', 'English'],
    specialties: ['Vedic', 'K P Astrology'],
    concerns: ['marriage', 'career', 'finance', 'legal'],
    online: false,
    about: 'With over two decades of practice, Pandit Anant specializes in K P Astrology and Vedic rituals.',
    reviewsCount: 4200
  },
  {
    id: '8',
    name: 'Astro Meera',
    image: 'https://i.pravatar.cc/300?u=8',
    experience: 6,
    rating: 4.8,
    price: 18,
    languages: ['Hindi', 'English'],
    specialties: ['Tarot', 'Angel Cards'],
    concerns: ['love', 'health', 'education'],
    online: true,
    about: 'Astro Meera uses Angel cards and Tarot to bring light to your darkest hours.',
    reviewsCount: 600
  },
  {
    id: '9',
    name: 'Swami Vishwa',
    image: 'https://i.pravatar.cc/300?u=9',
    experience: 30,
    rating: 5.0,
    price: 60,
    languages: ['Hindi', 'Telugu', 'Tamil'],
    specialties: ['Nadi', 'Palmistry'],
    concerns: ['health', 'marriage', 'legal', 'foreign'],
    online: true,
    about: 'Swami Vishwa is a legendary Nadi astrologer from the lineage of Agastya.',
    reviewsCount: 5500
  },
  {
    id: '10',
    name: 'Astro Aryan',
    image: 'https://i.pravatar.cc/300?u=10',
    experience: 5,
    rating: 4.5,
    price: 12,
    languages: ['Hindi', 'English'],
    specialties: ['Western', 'Horoscope'],
    concerns: ['career', 'love', 'education'],
    online: true,
    about: 'Astro Aryan brings a modern western perspective to traditional astrology.',
    reviewsCount: 450
  },
  {
    id: '11',
    name: 'Acharya Radha',
    image: 'https://i.pravatar.cc/300?u=11',
    experience: 14,
    rating: 4.9,
    price: 28,
    languages: ['Hindi', 'Gujarati'],
    specialties: ['Vedic', 'Gemology'],
    concerns: ['finance', 'marriage', 'health'],
    online: true,
    about: 'Acharya Radha is an expert in Gemology and Vedic astrology, providing precious stone remedies.',
    reviewsCount: 1560
  },
  {
    id: '12',
    name: 'Pandit Somnath',
    image: 'https://i.pravatar.cc/300?u=12',
    experience: 22,
    rating: 4.7,
    price: 32,
    languages: ['Hindi', 'Odia'],
    specialties: ['Vedic', 'Prashna'],
    concerns: ['legal', 'finance', 'marriage'],
    online: false,
    about: 'Pandit Somnath excels in Prashna Kundli, giving answers to your immediate life questions.',
    reviewsCount: 2800
  },
  {
    id: '13',
    name: 'Astro Zara',
    image: 'https://i.pravatar.cc/300?u=13',
    experience: 7,
    rating: 4.6,
    price: 16,
    languages: ['English', 'French'],
    specialties: ['Tarot', 'Psychic Reading'],
    concerns: ['love', 'career', 'foreign'],
    online: true,
    about: 'Astro Zara provides intuitive psychic readings and tarot guidance for international clients.',
    reviewsCount: 780
  },
  {
    id: '14',
    name: 'Guru Ishwar',
    image: 'https://i.pravatar.cc/300?u=14',
    experience: 28,
    rating: 4.9,
    price: 55,
    languages: ['Hindi', 'Kannada', 'English'],
    specialties: ['Vedic', 'Palmistry'],
    concerns: ['marriage', 'career', 'health', 'legal'],
    online: true,
    about: 'Guru Ishwar is a master of Palmistry and Vedic charts with global recognition.',
    reviewsCount: 3900
  },
  {
    id: '15',
    name: 'Astro Vidya',
    image: 'https://i.pravatar.cc/300?u=15',
    experience: 9,
    rating: 4.8,
    price: 22,
    languages: ['Hindi', 'English'],
    specialties: ['Numerology', 'Vastu'],
    concerns: ['finance', 'education', 'marriage'],
    online: true,
    about: 'Astro Vidya combines Numerology and Vastu to bring prosperity to your home and business.',
    reviewsCount: 1100
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    comment: 'The prediction was surprisingly accurate. Acharya Vamsi guided me through a difficult career phase.',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Patel',
    comment: 'Instant chat feature is amazing. Got my questions answered within minutes. Highly recommended!',
    rating: 5
  }
];

export const zodiacSigns = [
  { name: 'Aries', date: 'Mar 21 - Apr 19', icon: '♈', element: 'Fire', prediction: 'A day of high energy and new beginnings. Your leadership skills will shine in professional projects.' },
  { name: 'Taurus', date: 'Apr 20 - May 20', icon: '♉', element: 'Earth', prediction: 'Focus on financial stability today. A long-term investment might show positive signs.' },
  { name: 'Gemini', date: 'May 21 - Jun 20', icon: '♊', element: 'Air', prediction: 'Communication is your key to success today. An important conversation will bring clarity to a relationship.' },
  { name: 'Cancer', date: 'Jun 21 - Jul 22', icon: '♋', element: 'Water', prediction: 'Trust your intuition. Home and family matters require your gentle attention today.' },
  { name: 'Leo', date: 'Jul 23 - Aug 22', icon: '♌', element: 'Fire', prediction: 'Your charisma is at its peak. It is a great time to pitch new ideas or start creative ventures.' },
  { name: 'Virgo', date: 'Aug 23 - Sep 22', icon: '♍', element: 'Earth', prediction: 'Attention to detail will save the day. Organize your workspace for better productivity.' },
  { name: 'Libra', date: 'Sep 23 - Oct 22', icon: '♎', element: 'Air', prediction: 'Balance and harmony are within reach. A fair resolution to a conflict is likely today.' },
  { name: 'Scorpio', date: 'Oct 23 - Nov 21', icon: '♏', element: 'Water', prediction: 'A deep transformation is occurring. Embrace changes as they lead to spiritual growth.' },
  { name: 'Sagittarius', date: 'Nov 22 - Dec 21', icon: '♐', element: 'Fire', prediction: 'Adventure calls! Expand your horizons through learning or planning a future trip.' },
  { name: 'Capricorn', date: 'Dec 22 - Jan 19', icon: '♑', element: 'Earth', prediction: 'Hard work pays off. Your disciplined approach will get noticed by those who matter.' },
  { name: 'Aquarius', date: 'Jan 20 - Feb 18', icon: '♒', element: 'Air', prediction: 'Your innovative ideas are your greatest asset. Network with like-minded individuals today.' },
  { name: 'Pisces', date: 'Feb 19 - Mar 20', icon: '♓', element: 'Water', prediction: 'Dream big but stay grounded. Your creative energy is perfectly aligned for artistic pursuits.' },
];

export const HOROSCOPES = [
  {
    sign: 'Aries',
    date: 'Mar 21 - Apr 19',
    emoji: '♈',
    color: 'from-red-500 to-orange-500',
    message: "A surge of creative energy will help you tackle long-standing projects today. Trust your instincts in financial matters."
  },
  {
    sign: 'Taurus',
    date: 'Apr 20 - May 20',
    emoji: '♉',
    color: 'from-emerald-500 to-teal-500',
    message: "Focus on grounding yourself today. A connection with nature or a simple home-cooked meal will bring much-needed clarity."
  },
  {
    sign: 'Gemini',
    date: 'May 21 - Jun 20',
    emoji: '♊',
    color: 'from-blue-400 to-cyan-400',
    message: "Your communication skills are peak today. It's the perfect time to express your feelings or pitch a new idea at work."
  },
  {
    sign: 'Cancer',
    date: 'Jun 21 - Jul 22',
    emoji: '♋',
    color: 'from-slate-400 to-slate-600',
    message: "Emotional intelligence is your superpower today. Pay attention to the subtle needs of those around you."
  },
  {
    sign: 'Leo',
    date: 'Jul 23 - Aug 22',
    emoji: '♌',
    color: 'from-yellow-400 to-amber-600',
    message: "The spotlight finds you today. Use this visibility to lead and inspire others with your unique vision."
  },
  {
    sign: 'Virgo',
    date: 'Aug 23 - Sep 22',
    emoji: '♍',
    color: 'from-green-500 to-emerald-700',
    message: "Organization brings peace. Clearing your physical space will clear your mental space for new opportunities."
  },
  {
    sign: 'Libra',
    date: 'Sep 23 - Oct 22',
    emoji: '♎',
    color: 'from-pink-400 to-rose-400',
    message: "Harmony is restored in your relationships today. Seek balance and you will find unexpected joy."
  },
  {
    sign: 'Scorpio',
    date: 'Oct 23 - Nov 21',
    emoji: '♏',
    color: 'from-purple-600 to-indigo-800',
    message: "Deep transformation is occurring. Trust the process of letting go to make room for powerful new beginnings."
  },
  {
    sign: 'Sagittarius',
    date: 'Nov 22 - Dec 21',
    emoji: '♐',
    color: 'from-orange-500 to-red-600',
    message: "Adventure awaits! Whether mental or physical, exploring new horizons will bring profound wisdom."
  },
  {
    sign: 'Capricorn',
    date: 'Dec 22 - Jan 19',
    emoji: '♑',
    color: 'from-stone-600 to-stone-800',
    message: "Your discipline is your greatest asset today. Consistent effort toward your goals will yield significant results."
  },
  {
    sign: 'Aquarius',
    date: 'Jan 20 - Feb 18',
    emoji: '♒',
    color: 'from-indigo-400 to-blue-600',
    message: "Innovation is in the air. Your eccentric ideas will find a supportive audience if you dare to share them."
  },
  {
    sign: 'Pisces',
    date: 'Feb 19 - Mar 20',
    emoji: '♓',
    color: 'from-cyan-500 to-blue-500',
    message: "Dreams provide the roadmap today. Pay close attention to your intuition and inner world."
  }
];

export const consultationCategories = [
  { id: 'love', name: 'Love & Relation', icon: '❤️', slug: 'love-and-relationship' },
  { id: 'career', name: 'Career & Jobs', icon: '💼', slug: 'career-and-jobs' },
  { id: 'marriage', name: 'Marriage', icon: '💍', slug: 'marriage' },
  { id: 'finance', name: 'Wealth & Finance', icon: '💰', slug: 'wealth-and-finance' },
  { id: 'health', name: 'Health', icon: '🏥', slug: 'health' },
  { id: 'education', name: 'Education', icon: '🎓', slug: 'education' },
  { id: 'legal', name: 'Legal Matters', icon: '⚖️', slug: 'legal-matters' },
  { id: 'foreign', name: 'Foreign Travel', icon: '✈️', slug: 'foreign-travel' },
];

export const shopProducts = [
  {
    id: '1',
    name: 'Natural Blue Sapphire',
    image: 'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&w=400&auto=format&fit=crop',
    price: 15999,
    category: 'Gemstones',
    rating: 4.9
  },
  {
    id: '2',
    name: '5 Mukhi Rudraksha',
    image: 'https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?q=80&w=400&auto=format&fit=crop',
    price: 499,
    category: 'Spiritual',
    rating: 4.8
  },
  {
    id: '3',
    name: 'Amethyst Crystal Grid',
    image: 'https://images.unsplash.com/photo-1567606117528-7dec51ee6611?q=80&w=400&auto=format&fit=crop',
    price: 2499,
    category: 'Crystals',
    rating: 5.0
  }
];

export const academyCourses = [
  {
    id: '1',
    title: 'Vedic Astrology Fundamentals',
    instructor: 'Acharya Vamsi',
    image: 'https://images.unsplash.com/photo-1532983330958-4b32bc9bb07d?q=80&w=400&auto=format&fit=crop',
    duration: '12 Weeks',
    price: 4999,
    students: 1200
  },
  {
    id: '2',
    title: 'Tarot Reading Mastery',
    instructor: 'Astro Sneha',
    image: 'https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?q=80&w=400&auto=format&fit=crop',
    duration: '8 Weeks',
    price: 3499,
    students: 850
  }
];

export const blogPosts = [
  {
    id: '1',
    title: 'Mercury Retrograde: What It Means for You',
    excerpt: 'Discover how the upcoming Mercury retrograde will impact your communication and travel plans.',
    image: 'https://images.unsplash.com/photo-1614732414444-af9613f3f1a3?q=80&w=400&auto=format&fit=crop',
    date: 'May 10, 2024',
    author: 'Acharya Vamsi',
    category: 'Planetary Transits'
  },
  {
    id: '2',
    title: 'Understanding Your Moon Sign',
    excerpt: 'Your moon sign reveals your inner emotional world. Learn how to calculate and interpret it.',
    image: 'https://images.unsplash.com/photo-1532667449560-72a95c8d381b?q=80&w=400&auto=format&fit=crop',
    date: 'May 08, 2024',
    author: 'Astro Sneha',
    category: 'Basics'
  },
  {
    id: '3',
    title: '5 Crystals for Daily Protection',
    excerpt: 'Carry these energized crystals to shield your aura from negative vibrations throughout the day.',
    image: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=400&auto=format&fit=crop',
    date: 'May 05, 2024',
    author: 'Pandit Rajesh',
    category: 'Remedies'
  }
];

export const faqs = [
  {
    question: "How accurate are the predictions?",
    answer: "Our astrologers are vetted through a rigorous 4-step process and have over 10+ years of experience. While astrology provides guidance based on planetary positions, your actions and karma also play a significant role in shaping your destiny."
  },
  {
    question: "Is my consultation private and secure?",
    answer: "Absolutely. We use enterprise-grade encryption for all chats and calls. Your personal details and consultation history are strictly confidential and never shared with third parties."
  },
  {
    question: "What if I am not satisfied with the session?",
    answer: "We strive for 100% satisfaction. If you are unhappy with your consultation, please reach out to our 24/7 support team within 2 hours of the session, and we will resolve it, which may include a refund to your wallet."
  },
  {
    question: "How do I book a consultation?",
    answer: "Simply browse our 'Elite Council' of astrologers, check their availability, and click on 'Chat' or 'Call'. You'll be connected instantly if they are online, or you can schedule a session for later."
  }
];

export const newsLogos = [
  { name: "The Times of India", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/The_Times_of_India_logo.svg/512px-The_Times_of_India_logo.svg.png" },
  { name: "Hindustan Times", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Hindustan_Times_logo.svg/512px-Hindustan_Times_logo.svg.png" },
  { name: "Economic Times", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Economic_Times_logo.svg/512px-The_Economic_Times_logo.svg.png" },
  { name: "NDTV", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/NDTV_logo.svg/512px-NDTV_logo.svg.png" }
];

