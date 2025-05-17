import accordionItems from '../FAQ';
import navItems from '../Nav';
import pricingPlans from '../Pricing';

const stormyLanding = {
  hero: {
    heading: 'Get Qualified Roofing Appointments',
    description:
      'StormReach connects storm restoration contractors with ready-to-talk homeowners using live cold calls. No lead lists, just real appointments — set and confirmed for you.',
    btnTextOne: 'Get started for free',
    btnTextTwo: 'See our pricing',
  },
  testimonials: [
    {
      heading: 'Tyler M., Owner, Titan Roofing Co.',
      description:
        '“We used to burn money on shared leads that never converted. With StormReach, we closed 6 installs in our first two weeks”',
      duration: '2 weeks ago',
    },
    {
      heading: 'Maria R., Sales Manager, Elevate Exteriors',
      description:
        '"I\'m not tech-savvy at all, but setting up StormReach took less than 10 minutes. The map targeting is incredibly simple."',
      duration: '1 month ago',
    },
    {
      heading: 'Jason L., Project Lead, RapidShield Restoration',
      description:
        '“The pay-as-you-go model fits our workflow perfectly. I love how we actually pay only when we get a booked appointment”',
      duration: '2 months ago',
    },
  ],
  seeHowItWorks: {
    targetYourArea: {
      heading: '1. Target your area',
      description:
        'Your entire health story in one place — physical, mental, emotional. Integrates wearables, labs, notes, symptoms, and reflections.',
    },
    weCallForYou: {
      heading: '2. We call for you',
      description:
        'AI that connects the dots across your data — spotting early risks, patterns, and opportunities for intervention before symptoms escalate.',
    },
    youGetBooked: {
      heading: '3. You get booked',
      description:
        'Real doctors with full context — no repeating yourself, no generic advice. On-demand consults guided by your Medical Passport.',
    },
  },
  whyStormReach: {
    heading: 'Why StormReach',
    appointmentsDelivered: {
      heading: 'Appointments Delivered',
      description: '4000+',
    },
    showRateAverage: {
      heading: 'Show Rate Average',
      description: '85%',
    },
    avgFulfillment: {
      heading: 'Avg Fulfillment',
      description: '3-Day',
    },
    happyCustomers: {
      heading: 'Happy Customers',
      description: '250',
    },
    features: [
      'Designed specifically for insurance-based storm jobs',
      "Get credits or replacements if a lead doesn't qualify",
      'Pause, cancel, or scale anytime — total flexibility',
      "Our trained agents do the outreach so you don't have to",
    ],
  },
  pricing: {
    heading: 'Pricing',
    pricingPlans,
  },
  faq: {
    heading: "Don't Let Questions Hold You Back.",
    description:
      "Here are the most common questions we hear from roofing pros just like you — from how appointments are booked to what makes StormReach different. We're laying it all out so you can get started with confidence.",
    btnText: 'Sign up now',
    accordionItems,
  },
  footer: {
    upper: {
      heading: 'Real Homeowners. Real Appointments. Zero Guesswork.',
      description:
        'StormReach delivers qualified roofing appointments straight to your calendar — no shared leads, no guessing, no wasted time.',
      btnText: 'Talk to our team',
    },
    lower: {
      description:
        'Whether your institution needs alignment acceleration, brand differentiation, or program innovation, TFS provides the strategic insights and execution needed to achieve sustainable growth.',
      navigation: {
        heading: 'Navigation',
        items: navItems,
      },
      contact: {
        heading: 'Contact',
        email: 'hey@storm.com',
        phone: '+(92) 334 555-0120',
        location: 'Texas, United States',
      },
    },
  },
};

export default stormyLanding;
