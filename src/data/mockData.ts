export interface Astrologer {
  id: string;
  name: string;
  image: string;
  experience: number;
  rating: number;
  price: number;
  languages: string[];
  specialties: string[];
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
    specialties: ['Kundli', 'Face Reading'],
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
    online: true,
    about: 'Guru Daksh is an expert in Nadi astrology and Palmistry, providing life-changing remedies for all problems.',
    reviewsCount: 3500
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
  { name: 'Aries', date: 'Mar 21 - Apr 19', icon: '♈' },
  { name: 'Taurus', date: 'Apr 20 - May 20', icon: '♉' },
  { name: 'Gemini', date: 'May 21 - Jun 20', icon: '♊' },
  { name: 'Cancer', date: 'Jun 21 - Jul 22', icon: '♋' },
  { name: 'Leo', date: 'Jul 23 - Aug 22', icon: '♌' },
  { name: 'Virgo', date: 'Aug 23 - Sep 22', icon: '♍' },
  { name: 'Libra', date: 'Sep 23 - Oct 22', icon: '♎' },
  { name: 'Scorpio', date: 'Oct 23 - Nov 21', icon: '♏' },
  { name: 'Sagittarius', date: 'Nov 22 - Dec 21', icon: '♐' },
  { name: 'Capricorn', date: 'Dec 22 - Jan 19', icon: '♑' },
  { name: 'Aquarius', date: 'Jan 20 - Feb 18', icon: '♒' },
  { name: 'Pisces', date: 'Feb 19 - Mar 20', icon: '♓' },
];

