'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Gift, Percent, Users, Calendar } from 'lucide-react';

const offers = [
  {
    icon: Percent,
    title: 'Summer Discount',
    description: 'Get 30% off on all courses during summer season',
    discount: '30%',
    validity: 'Valid till June 30, 2026',
  },
  {
    icon: Users,
    title: 'Group Enrollment',
    description: 'Special rates for groups of 5 or more students',
    discount: 'Up to 40%',
    validity: 'Year-round offer',
  },
  {
    icon: Gift,
    title: 'Referral Program',
    description: 'Earn rewards for every student you refer',
    discount: '20% Bonus',
    validity: 'Ongoing',
  },
  {
    icon: Calendar,
    title: 'Early Bird Offer',
    description: 'Register early and get exclusive benefits',
    discount: '25%',
    validity: 'Batch-specific',
  },
];

export default function OffersPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-emerald-50 to-cyan-50 dark:from-slate-900/50 dark:to-slate-950/50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
          >
            Exclusive <span className="gradient-text">Offers & Discounts</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            Avail amazing discounts and offers on our premium courses
          </motion.p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offers.map((offer, index) => {
              const Icon = offer.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass rounded-xl p-8 border border-slate-200/60 dark:border-white/10 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/10 group-hover:to-cyan-500/10 transition-all duration-300" />

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <Icon className="w-10 h-10 text-emerald-500" />
                      <span className="text-4xl font-bold gradient-text">{offer.discount}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-3">{offer.title}</h3>
                    <p className="text-foreground/70 mb-6">{offer.description}</p>

                    <div className="flex items-center gap-2 text-sm text-cyan-500 font-semibold">
                      <Calendar className="w-4 h-4" />
                      {offer.validity}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-6 button-gradient text-sm"
                    >
                      Claim Now
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Terms Section */}
      <section className="section-padding bg-slate-50 dark:bg-slate-950/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-8 border border-slate-200/60 dark:border-white/10"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Terms & Conditions</h2>
            <div className="space-y-4 text-foreground/70">
              <p>• Offers are valid for new enrollments only</p>
              <p>• Discounts cannot be combined with other promotional offers</p>
              <p>• Refund policy applies as per standard terms</p>
              <p>• Validity period for each offer is mentioned separately</p>
              <p>• For any queries, contact our support team at theuniverse0311institute@gmail.com</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
