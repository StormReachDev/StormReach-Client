// Imports:
import { imagePaths } from '../Paths/Images';

const stormyContent = {
  login: {
    heading: 'Login',
    subheading: 'Secure access for internal team members only.',
    form: {
      email: {
        label: 'Enter Your Email Address',
      },

      password: {
        label: 'Enter Your Password',
      },

      submitButton: {
        text: 'Login',
      },

      forgotPassword: {
        text: 'Forgot Your Password?',
        linkText: 'Reset here',
      },
    },
  },

  forgotPassword: {
    heading: 'Forgot Your Password?',
    subheading:
      'No worries — enter your email below and we’ll send you a secure link to reset your password.',
    form: {
      email: {
        label: 'Enter Your Email Address',
      },

      submitButton: {
        text: 'Send Reset Link',
      },

      backToLogin: {
        text: 'Remember your credentials?',
        linkText: 'Login here',
      },
    },
  },

  resetPassword: {
    heading: 'Create a New Password',
    subheading: 'Enter a strong password you haven’t used before.',
    form: {
      newPassword: {
        label: 'Enter Your New password',
      },

      confirmPassword: {
        label: 'Confirm Your New password',
      },

      submitButton: {
        text: 'Done',
      },
    },
  },

  slides: [
    {
      image: imagePaths.carousel.first.src,
      alt: imagePaths.carousel.first.alt,
      text: 'Track customers, manage disputes, and keep appointments flowing.',
    },

    {
      image: imagePaths.carousel.second.src,
      alt: imagePaths.carousel.second.alt,
      text: 'From credit balances to agent activity — manage everything in one place.',
    },

    {
      image: imagePaths.carousel.third.src,
      alt: imagePaths.carousel.third.alt,
      text: 'Assign agents, review leads, and handle client needs in seconds.',
    },
  ],

  mobile: {
    comingSoon: {
      heading: 'We’re Cooking Up Mobile Version!',
      body: 'Soon, you’ll be able to manage appointments, credits, and disputes on the go — right from your phone.',
      button: {
        alt: 'Mobile Development Notice',
      },
    },
  },

  modal: {
    logout: {
      heading: 'Confirm Logout?',
      body: 'You’ll be signed out of the admin panel. You can log in again anytime to continue managing StormReach.',
      buttons: {
        cancel: {
          text: 'Cancel',
        },

        confirm: {
          text: 'Confirm',
        },
      },
    },
  },

  admin: {
    dashboard: {
      notifications: {
        heading: 'Notifications',
      },

      customers: {
        heading: 'Customers Summary',
        cards: [
          {
            title: 'Active Customers',
            value: '150',
            percentage: '32%',
            action: 'two',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1749062858/briefcase_enhofg.png',
            imageAlt: 'Briefcase',
          },

          {
            title: 'New Customers This Week',
            value: '40',
            percentage: '20%',
            action: 'two',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1749062858/bulb_gnshzj.png',
            imageAlt: 'Lightbulb',
          },

          {
            title: 'Low Credit Customers',
            value: '5',
            percentage: '10%',
            action: 'two',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1749062858/timer_gohbqz.png',
            imageAlt: 'Timer',
          },

          {
            title: 'Paused Accounts',
            value: '15',
            percentage: '10%',
            action: 'one',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1749062858/target_ukk84k.png',
            imageAlt: 'Target',
          },
        ],
      },

      teams: {
        heading: 'Teams Summary',
        cards: [
          {
            title: 'Active Telemarketers',
            value: '25',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1749041953/telemarketer_eux20j.png',
            imageAlt: 'Telemarketer',
          },

          {
            title: 'Active Sales Agents',
            value: '12',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1749041953/agent_sgfycm.png',
            imageAlt: 'Sales Agent',
          },

          {
            title: 'Active Managers',
            value: '6',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1749041954/manager_jfofkr.png',
            imageAlt: 'Manager',
          },

          {
            title: 'Active Admins',
            value: '1',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1749041953/admin_kbftn6.png',
            imageAlt: 'Admin',
          },
        ],
      },

      disputesAndAppointments: {
        heading: 'Disputes & Appointments',
        disputeMetrics: {
          heading: 'Disputes',
          subHeading: 'Handled',
        },

        appointmentMetrics: {
          heading: 'Appointments',
          subHeading: 'Fulfilled',
        },
      },
    },
  },
};

export default stormyContent;
