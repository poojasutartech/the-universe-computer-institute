import { useState, useEffect } from 'react';
import { X, Gift, TrendingDown } from 'lucide-react';

const offers = [
  {
    id: 1,
    title: '50% OFF - Summer Special',
    description: 'Get 50% discount on all courses this summer. Limited time offer!',
    discount: '50%',
    code: 'SUMMER50'
  },
  {
    id: 2,
    title: 'Refer & Earn - ₹500 Bonus',
    description: 'Refer a friend and both of you get ₹500 discount on next course.',
    discount: '₹500',
    code: 'REFER500'
  },
  {
    id: 3,
    title: 'Bundle Deal - 3 Courses',
    description: 'Buy any 3 courses together and get 30% off on total amount.',
    discount: '30%',
    code: 'BUNDLE30'
  },
];

export default function OffersModal({ isOpen, onClose }) {
  const [currentOffer, setCurrentOffer] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const offer = offers[currentOffer];

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 fade-in">
      <div className="card-glow max-w-md w-full p-8 relative scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-sky-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <Gift className="w-6 h-6 text-sky-600 animate-bounce" />
          <h2 className="text-2xl font-bold text-foreground">Special Offer!</h2>
        </div>

        <div className="bg-gradient-main rounded-xl p-6 text-white mb-6">
          <p className="text-sm opacity-90 mb-2">Get this exclusive discount:</p>
          <p className="text-4xl font-bold mb-2">{offer.discount}</p>
          <p className="text-lg font-semibold">{offer.title}</p>
        </div>

        <p className="text-foreground/70 mb-6 text-center">{offer.description}</p>

        <div className="bg-sky-50 dark:bg-slate-800 rounded-lg p-4 mb-6 border-2 border-dashed border-sky-300 dark:border-sky-700">
          <p className="text-xs text-foreground/60 mb-2 text-center">Use Code:</p>
          <p className="text-center font-bold text-foreground text-xl tracking-widest">{offer.code}</p>
        </div>

        <button className="button-gradient w-full mb-3">
          Claim Offer Now
        </button>

        <div className="flex gap-2 justify-center">
          {offers.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentOffer(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentOffer ? 'bg-sky-600 w-6' : 'bg-sky-200 dark:bg-slate-700'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
