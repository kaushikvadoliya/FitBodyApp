export type FaqType = {
  id: number;
  description: string;
  title: string;
};

export const faq = {
  general: [
    {
      id: 1,
      title: 'What is GYP App?',
      description:
        'The app is a complete fitness management platform. It allows users to track workouts, monitor nutrition, and book gym sessions directly through their devices.',
    },
    {
      id: 2,
      title: 'Is the app free?',
      description:
        'Basic features are entirely free. You can download the app and use standard tracking tools without paying, though premium plans offer advanced AI features.',
    },
    {
      id: 3,
      title: 'Supported mobile devices?',
      description:
        'Works on iOS and Android. Our software is optimized for all modern smartphones and tablets, ensuring a smooth experience regardless of your specific hardware choice.',
    },
    {
      id: 4,
      title: 'Internet connection required?',
      description:
        'Yes, for most features. While you can view downloaded routines offline, an active connection is necessary to sync data and receive real-time updates from trainers.',
    },
    {
      id: 5,
      title: 'Target audience for GYP?',
      description:
        'Designed for all fitness levels. Whether you are a total beginner or a professional athlete, our tools adapt to your specific goals and training intensity.',
    },
    {
      id: 6,
      title: 'Language options available?',
      description:
        'Supports over ten global languages. You can easily switch your preferred language in the settings menu to navigate the app in your native tongue comfortably.',
    },
  ],
  account: [
    {
      id: 11,
      title: 'How to register?',
      description:
        'Sign up with your email. Simply enter your basic details or use social login options like Google to create your secure personal profile within seconds.',
    },
    {
      id: 12,
      title: 'Forgot my password?',
      description:
        'Reset via the login screen. Click the Forgot Password link to receive a secure reset code in your registered email inbox and regain account access.',
    },
    {
      id: 13,
      title: 'Updating personal profiles?',
      description:
        'Edit details in settings tab. You can update your weight, height, and fitness goals anytime to ensure the AI provides the most accurate workout recommendations.',
    },
    {
      id: 14,
      title: 'Is my data secure?',
      description:
        'We use high-level encryption. Your personal information and health data are protected using industry-standard security protocols to ensure complete privacy and safety at all times.',
    },
    {
      id: 15,
      title: 'Can I delete accounts?',
      description:
        'Yes, via the privacy menu. You can permanently remove your account and all associated data through the settings, though this action cannot be undone once confirmed.',
    },
    {
      id: 16,
      title: 'Syncing multiple devices?',
      description:
        'Cloud sync is always active. Log in on any device to see your updated progress, as all data is safely stored in our secure cloud servers.',
    },
  ],
  service: [
    {
      id: 21,
      title: 'Subscription plan types?',
      description:
        'Choose monthly or yearly billing. We offer various tiers including a Pro version that unlocks custom meal plans and advanced data analytics for serious users.',
    },
    {
      id: 22,
      title: 'How to book classes?',
      description:
        'Select your gym schedule. Use the built-in calendar to find available time slots and reserve your spot in group classes with just a single tap.',
    },
    {
      id: 23,
      title: 'Contacting personal trainers?',
      description:
        'Message via the chat portal. Premium members can communicate directly with certified coaches to receive personalized advice, form corrections, and constant motivation throughout their journey.',
    },
    {
      id: 24,
      title: 'Refund policy details?',
      description:
        'Seven-day money-back guarantee applies. If you are not satisfied with our premium services, contact support within one week for a full refund of your payment.',
    },
    {
      id: 25,
      title: 'Gym owner features?',
      description:
        'Manage members and staff easily. The service includes a specialized dashboard for gym owners to track attendance, process payments, and send mass notifications to members.',
    },
    {
      id: 26,
      title: 'Payment methods accepted?',
      description:
        'All major cards and UPI. We support secure transactions through credit cards, debit cards, and popular digital wallets to make your subscription process quick and easy.',
    },
  ],
};
