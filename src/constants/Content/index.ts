// Imports:
import { imagePaths } from '../Paths/Images';

const stormyContent = {
  login: {
    heading: 'Login',
    subHeading: 'Secure access for internal team members only.',
    form: {
      email: {
        label: 'Enter Your Email Address',
        id: 'email',
      },

      password: {
        label: 'Enter Your Password',
        id: 'password',
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
    subHeading:
      'No worries — enter your email below and we’ll send you a secure link to reset your password.',
    form: {
      email: {
        label: 'Enter Your Email Address',
        id: 'forgotPasswordEmail',
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
    subHeading: 'Enter a strong password you haven’t used before.',
    form: {
      newPassword: {
        label: 'Enter Your New password',
        id: 'resetPasswordNew',
      },

      confirmPassword: {
        label: 'Confirm Your New password',
        id: 'resetPasswordConfirm',
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

    changePassword: {
      heading: 'Change Password',
      form: {
        currentPassword: {
          label: 'Enter Your Current Password',
          id: 'currentPassword',
        },

        newPassword: {
          label: 'Enter Your New Password',
          id: 'newPassword',
        },

        confirmPassword: {
          label: 'Confirm Your New Password',
          id: 'confirmPassword',
        },

        submitButton: {
          text: 'Update Password',
        },
      },
    },

    addCustomer: {
      trigger: 'Customer',
      heading: 'Add New Customer',
      form: {
        name: {
          label: 'Name',
          id: 'customerName',
          placeholder: 'e.g. John Doe',
        },

        email: {
          label: 'Email',
          id: 'customerEmail',
          placeholder: 'e.g. john@roofco.com',
        },

        phone: {
          label: 'Phone Number',
          id: 'customerPhone',
          placeholder: 'e.g. +1 234 567 8900',
        },

        companyName: {
          label: 'Company Name',
          id: 'customerCompanyName',
          placeholder: 'e.g. RoofCo',
        },

        billingAddress: {
          label: 'Billing Address',
          id: 'customerBillingAddress',
          placeholder: 'e.g. 123 Main St, City, State',
        },

        zipCode: {
          label: 'Zip Code',
          id: 'customerZipCode',
          placeholder: 'e.g. 44001',
        },

        planType: {
          label: 'Plan Type',
          id: 'customerPlanType',
          defaultValue: 'strike10',
        },

        timeZone: {
          label: 'Timezone',
          id: 'customerTimezone',
          defaultValue: 'America/New_York',
        },

        addAgents: {
          label: 'Add Agents',
          id: 'customerAddAgents',
          fallbackLabel: 'No agents selected',
        },

        card: {
          label: 'Card Details',
          id: 'customerCardDetails',
        },

        submitButton: {
          text: 'Add Customer',
        },
      },
    },

    editCustomer: {
      heading: 'Edit Customer',
      form: {
        name: {
          label: 'Name',
          id: 'editCustomerName',
          placeholder: 'e.g. John Doe',
        },

        email: {
          label: 'Email',
          id: 'editCustomerEmail',
          placeholder: 'e.g. john@roofco.com',
        },

        phone: {
          label: 'Phone Number',
          id: 'editCustomerPhone',
          placeholder: 'e.g. +1 234 567 8900',
        },

        companyName: {
          label: 'Company Name',
          id: 'editCustomerCompanyName',
          placeholder: 'e.g. RoofCo',
        },

        billingAddress: {
          label: 'Billing Address',
          id: 'editCustomerBillingAddress',
          placeholder: 'e.g. 123 Main St, City, State',
        },

        zipCode: {
          label: 'Zip Code',
          id: 'editCustomerZipCode',
          placeholder: 'e.g. 44001',
        },

        planType: {
          label: 'Plan Type',
          id: 'editCustomerPlanType',
          defaultValue: 'strike10',
        },

        timeZone: {
          label: 'Timezone',
          id: 'editCustomerTimezone',
          defaultValue: 'America/New_York',
        },

        addAgents: {
          label: 'Add Agents',
          id: 'editCustomerAddAgents',
          fallbackLabel: 'No agents selected',
        },

        selectStatus: {
          label: 'Account Status',
          id: 'editCustomerAccountStatus',
        },

        submitButton: {
          text: 'Save Details',
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

    settings: {
      headingOne: 'Account Settings',
      headingTwo: 'Platform Preferences',
      subHeading: 'Change Password',
      form: {
        name: {
          label: 'Name',
          id: 'settingsName',
        },

        email: {
          label: 'Email',
          id: 'settingsEmail',
        },

        phone: {
          label: 'Phone Number',
          id: 'settingsPhone',
        },

        timeZone: {
          label: 'Timezone',
          id: 'settingsTimezone',
        },

        disputeFeeAmount: {
          label: 'Dispute Fee Amount',
          id: 'settingsDisputeFeeAmount',
        },

        submitButton: {
          text: 'Save',
        },
      },
    },

    customers: {
      summary: {
        heading: 'Summary Metrics',
      },

      overview: {
        heading: 'Overview',
      },
    },
  },
};

export default stormyContent;
