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

    actions: {
      deleteTransaction: {
        actionHeading: 'Delete This Transaction?',
        actionBody:
          'This will permanently remove the selected credit adjustment from the transaction history. This action cannot be undone.',
        actionText: 'Delete Transaction',
        key: 'deleteTransaction',
      },

      deleteCustomer: {
        actionHeading: 'Delete This Customer?',
        actionBody:
          'This will permanently remove the customer and their appointment history. This action cannot be undone.',
        actionText: 'Delete Customer',
        key: 'deleteCustomer',
      },

      deleteMember: {
        actionHeading: 'Delete This Team Member?',
        actionBody:
          'This action will permanently remove the appointment and its record from the system. This cannot be undone.',
        actionText: 'Delete Team Member',
        key: 'deleteMember',
      },

      deleteAppointment: {
        actionHeading: 'Delete This Appointment?',
        actionBody:
          'This action will permanently remove the appointment and its record from the system. This cannot be undone.',
        actionText: 'Delete Appointment',
        key: 'deleteAppointment',
      },

      approveDispute: {
        actionHeading: 'Approve This Dispute?',
        actionBody:
          'The customer will receive a credit, and a $25 dispute fee will be automatically applied to their account.',
        actionText: 'Approve Dispute',
        key: 'approveDispute',
      },

      denyDispute: {
        actionHeading: 'Deny This Dispute?',
        actionBody:
          "The customer's request will be closed without issuing a credit. Please ensure all lead details are thoroughly verified beforehand.",
        actionText: 'Deny Dispute',
        key: 'denyDispute',
      },

      deleteDispute: {
        actionHeading: 'Delete This Dispute Request?',
        actionBody:
          'This will permanently remove the dispute from the system and it will no longer appear in the dispute history or reports.',
        actionText: 'Delete Dispute',
        key: 'deleteDispute',
      },
    },

    addTeam: {
      trigger: 'Team Member',
      heading: 'Add New Team Member',
      form: {
        name: {
          label: 'Name',
          id: 'teamMemberName',
          placeholder: 'e.g. Sarah Smith',
        },

        role: {
          label: 'Select Role',
          id: 'teamMemberRole',
          defaultValue: 'salesAgent',
        },

        email: {
          label: 'Email',
          id: 'teamMemberEmail',
          placeholder: 'e.g. sarah@stormreach.com',
        },

        phone: {
          label: 'Phone Number',
          id: 'teamMemberPhone',
          placeholder: 'e.g. +1 234 567 8900',
        },

        timeZone: {
          label: 'Timezone',
          id: 'teamMemberTimezone',
          defaultValue: 'America/New_York',
        },

        addCustomers: {
          label: 'Assigned Customers',
          id: 'teamMemberAssignedCustomers',
          fallbackLabel: 'Select from customer list (optional)',
        },

        submitButton: {
          text: 'Add Team Member',
        },

        alert: {
          text: 'Sales Agents are assigned via Customers module only.',
        },
      },
    },

    editTeam: {
      heading: 'Edit Team Member',
      form: {
        name: {
          label: 'Name',
          id: 'editTeamMemberName',
          placeholder: 'e.g. Sarah Smith',
        },

        role: {
          label: 'Select Role',
          id: 'editTeamMemberRole',
          defaultValue: 'salesAgent',
        },

        email: {
          label: 'Email',
          id: 'editTeamMemberEmail',
          placeholder: 'e.g. sarah@stormreach.com',
        },

        phone: {
          label: 'Phone Number',
          id: 'editTeamMemberPhone',
          placeholder: 'e.g. +1 234 567 8900',
        },

        timeZone: {
          label: 'Timezone',
          id: 'editTeamMemberTimezone',
          defaultValue: 'America/New_York',
        },

        addCustomers: {
          label: 'Assigned Customers',
          id: 'editTeamMemberAssignedCustomers',
          fallbackLabel: 'Select from customer list (optional)',
        },

        selectStatus: {
          label: 'Account Status',
          id: 'editTeamMemberAccountStatus',
        },

        submitButton: {
          text: 'Save Details',
        },

        alert: {
          text: 'Sales Agents are assigned via Customers module only.',
        },
      },
    },

    addAppointment: {
      trigger: 'Appointment',
      heading: 'Add New Appointment',
      form: {
        name: {
          label: 'Select Customer',
          id: 'customerName',
          placeholder: 'e.g. John Doe',
        },

        homeOwnerName: {
          label: 'Home Owner',
          id: 'homeOwnerName',
          placeholder: 'e.g. Emily Johnson',
        },

        homeOwnerPhone: {
          label: 'Home Owner Phone',
          id: 'homeOwnerPhone',
          placeholder: 'e.g. +1 234 567 8900',
        },

        homeOwnerAddress: {
          label: 'Home Owner Address',
          id: 'homeOwnerAddress',
          placeholder: 'e.g. 123 Main St, City, State',
        },

        timeZone: {
          label: 'Timezone',
          id: 'appointmentTimezone',
          defaultValue: 'America/New_York',
        },

        appointmentDate: {
          label: 'Appointment Date',
          id: 'appointmentDate',
          placeholder: 'e.g. 01/01/2025',
          defaultValue: new Date().toISOString().split('T')[0],
        },

        appointmentTime: {
          label: 'Appointment Time',
          id: 'appointmentTime',
          placeholder: 'e.g. 10:00 AM',
          defaultValue: '10:00 AM',
        },

        activeLeaks: {
          label: 'Active Leaks',
          id: 'activeLeaks',
          placeholder: 'e.g. Yes or No',
        },

        roofAge: {
          label: 'Roof Age (Years)',
          id: 'roofAge',
          placeholder: 'e.g. 10',
        },

        insuranceProvider: {
          label: 'Insurance Provider',
          id: 'insuranceProvider',
          placeholder: 'e.g. State Farm',
        },

        submitButton: {
          text: 'Add Appointment',
        },
      },
    },

    editAppointment: {
      heading: 'Edit Appointment',
      form: {
        name: {
          label: 'Select Customer',
          id: 'editCustomerName',
          placeholder: 'e.g. John Doe',
        },

        homeOwnerName: {
          label: 'Home Owner',
          id: 'editHomeOwnerName',
          placeholder: 'e.g. Emily Johnson',
        },

        homeOwnerPhone: {
          label: 'Home Owner Phone',
          id: 'editHomeOwnerPhone',
          placeholder: 'e.g. +1 234 567 8900',
        },

        homeOwnerAddress: {
          label: 'Home Owner Address',
          id: 'editHomeOwnerAddress',
          placeholder: 'e.g. 123 Main St, City, State',
        },

        timeZone: {
          label: 'Timezone',
          id: 'editAppointmentTimezone',
          defaultValue: 'America/New_York',
        },

        appointmentDate: {
          label: 'Appointment Date',
          id: 'editAppointmentDate',
          placeholder: 'e.g. 01/01/2025',
          defaultValue: new Date().toLocaleDateString(),
        },

        appointmentTime: {
          label: 'Appointment Time',
          id: 'editAppointmentTime',
          placeholder: 'e.g. 10:00 AM',
          defaultValue: '10:00 AM',
        },

        activeLeaks: {
          label: 'Active Leaks',
          id: 'editActiveLeaks',
          placeholder: 'e.g. Yes or No',
        },

        roofAge: {
          label: 'Roof Age (Years)',
          id: 'editRoofAge',
          placeholder: 'e.g. 10',
        },

        insuranceProvider: {
          label: 'Insurance Provider',
          id: 'editInsuranceProvider',
          placeholder: 'e.g. State Farm',
        },

        appointmentStatus: {
          label: 'Appointment Status',
          id: 'editAppointmentStatus',
        },

        submitButton: {
          text: 'Save Details',
        },
      },
    },

    account: {
      paused: {
        heading: 'Your Account is Paused',
        body: 'Your account is currently paused. Please contact support to reactivate your account.',
        buttons: {
          contactSupport: {
            text: 'Contact Support',
          },

          logout: {
            text: 'Logout',
          },
        },
      },

      flagged: {
        heading: 'Your Account is Flagged',
        body: 'Your account has been flagged for review. Please contact support for more information.',
        buttons: {
          contactSupport: {
            text: 'Contact Support',
          },

          logout: {
            text: 'Logout',
          },
        },
      },
    },

    disputeAppointment: {
      heading: 'Dispute Appointment?',
      body: 'Tell us why this appointment didn’t meet your expectations so we can review and resolve it quickly.',
      form: {
        reason: {
          id: 'disputeReason',
          label: 'Reason',
          fallbackLabel: 'Select reason e.g. Invalid address',
        },

        buttons: {
          cancel: {
            text: 'Cancel',
          },

          disputeAppointment: {
            text: 'Dispute Appointment',
          },
        },
      },
    },

    completeAppointment: {
      key: 'completeAppointment',
      heading: 'Complete Appointment?',
      body: 'Once you complete the appointment, it will be marked as done and cannot be undone.',
      buttons: {
        cancel: {
          text: 'Cancel',
        },

        completeAppointment: {
          text: 'Complete Appointment',
        },
      },
    },
  },

  admin: {
    dashboard: {
      notifications: {
        heading: 'Notifications',
        message: 'You have no new notifications.',
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
            title: 'Flagged Customers',
            value: '40',
            percentage: '20%',
            action: 'two',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1749062858/bulb_gnshzj.png',
            imageAlt: 'Lightbulb',
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

          {
            title: 'Low Credit Customers',
            value: '5',
            percentage: '10%',
            action: 'two',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1749062858/timer_gohbqz.png',
            imageAlt: 'Timer',
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

      statistics: {
        heading: 'Disputes & Appointments',
        disputeAnalytics: {
          key: 'admin-pie-analytics',
          heading: 'Disputes',
          subHeading: 'Handled',
          labels: ['Handled', 'Pending', 'Denied'],
          colors: ['#34C759', '#007AFF', '#FF3B30'],
        },

        appointmentAnalytics: {
          key: 'admin-bar-analytics',
          heading: 'Appointments',
          subHeading: 'Fulfilled',
          labels: [
            'Appointments Disputed',
            'Appointments Scheduled',
            'Appointments Completed',
          ],
          colors: ['#FF3B30', '#007AFF', '#34C759'],
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

    creditsAndTransactions: {
      summary: {
        heading: 'Summary Metrics',
        cards: [
          {
            title: 'Total Credits Issued',
            value: '100',
            percentage: '32%',
            action: 'two',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1749062858/briefcase_enhofg.png',
            imageAlt: 'Briefcase',
          },

          {
            title: 'Total Appointment Credits',
            value: '40',
            percentage: '20%',
            action: 'two',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1749062858/bulb_gnshzj.png',
            imageAlt: 'Lightbulb',
          },

          {
            title: 'Total Dispute Credits',
            value: '5',
            percentage: '10%',
            action: 'two',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1749062858/timer_gohbqz.png',
            imageAlt: 'Timer',
          },

          {
            title: 'Auto-Reloads Triggered',
            value: '15',
            percentage: '10%',
            action: 'one',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1749062858/target_ukk84k.png',
            imageAlt: 'Target',
          },
        ],
      },

      overview: {
        heading: 'Credits & Transactions Overview',
      },
    },

    teamManagement: {
      summary: {
        heading: 'Summary Metrics',
      },

      overview: {
        heading: 'Team Overview',
      },
    },

    appointmentLog: {
      summary: {
        heading: 'Summary Metrics',
        cards: [
          {
            title: 'Appointments Booked',
            value: '100',
            percentage: '32%',
            action: 'two',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1749062858/briefcase_enhofg.png',
            imageAlt: 'Briefcase',
          },

          {
            title: 'Appointments Completed',
            value: '40',
            percentage: '20%',
            action: 'two',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1749062858/bulb_gnshzj.png',
            imageAlt: 'Lightbulb',
          },

          {
            title: 'Appointments Pending',
            value: '5',
            percentage: '10%',
            action: 'two',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1749062858/timer_gohbqz.png',
            imageAlt: 'Timer',
          },

          {
            title: 'Appointments Disputed',
            value: '15',
            percentage: '10%',
            action: 'one',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1749062858/target_ukk84k.png',
            imageAlt: 'Target',
          },
        ],
      },

      overview: {
        heading: 'Appointments Overview',
      },
    },

    disputes: {
      summary: {
        heading: 'Summary Metrics',
        cards: [
          {
            title: 'Total Disputes',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1749062858/briefcase_enhofg.png',
            imageAlt: 'Briefcase',
          },

          {
            title: 'Approved Disputes',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1749062858/bulb_gnshzj.png',
            imageAlt: 'Lightbulb',
          },

          {
            title: 'Pending Disputes',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1749062858/timer_gohbqz.png',
            imageAlt: 'Timer',
          },

          {
            title: 'Denied Disputes',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1749062858/target_ukk84k.png',
            imageAlt: 'Target',
          },
        ],
      },

      overview: {
        heading: 'Disputes Overview',
      },
    },
  },

  cutomer: {
    onboarding: {
      form: {
        companyName: {
          label: 'Company Name',
          id: 'onboardingCompanyName',
          placeholder: 'e.g. RoofCo Inc.',
        },

        businessAddress: {
          label: 'Business Address',
          id: 'onboardingBusinessAddress',
          placeholder: 'e.g. 123 Main St, City, State',
        },

        uploadLogo: {
          label: 'Upload Logo (png / jpg / jpeg)',
          id: 'onboardingUploadLogo',
          placeholder: 'Click to upload your company logo',
        },

        contactName: {
          label: 'Contact Name',
          id: 'onboardingContactName',
          placeholder: 'e.g. Emily Johnson',
        },

        contactPhone: {
          label: 'Contact Phone',
          id: 'onboardingContactPhone',
          placeholder: 'e.g. +1 234 567 8900',
        },

        zipCode: {
          label: 'Zip Code',
          id: 'onboardingZipCode',
          placeholder: 'e.g. 44001',
        },

        appointmentsPerDay: {
          label: 'Maximum Appointments Per Day',
          id: 'onboardingAppointmentsPerDay',
          placeholder: 'e.g. 5',
        },

        nextButton: {
          text: 'Next',
        },

        prevButton: {
          text: 'Previous Step',
        },

        doneButton: {
          text: 'Done',
        },
      },
    },

    dashboard: {
      summary: {
        heading: 'Summary Metrics',
        cards: [
          {
            title: 'Total Credits Issued',
            value: '100',
            percentage: '32%',
            action: 'two',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1749062858/briefcase_enhofg.png',
            imageAlt: 'Briefcase',
          },

          {
            title: 'Appointments Completed',
            value: '40',
            percentage: '20%',
            action: 'two',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1749062858/bulb_gnshzj.png',
            imageAlt: 'Lightbulb',
          },

          {
            title: 'Appointments Scheduled',
            value: '5',
            percentage: '10%',
            action: 'two',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1749062858/timer_gohbqz.png',
            imageAlt: 'Timer',
          },

          {
            title: 'Appointments Disputed',
            value: '15',
            percentage: '10%',
            action: 'one',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1753038255/flag_v82ucm.png',
            imageAlt: 'Flag',
          },
        ],
      },

      statistics: {
        heading: 'Credits & Appointments',
        creditAnalytics: {
          key: 'roofer-pie-analytics',
          heading: 'Credits',
          subHeading: 'Remaining',
          labels: ['Used', 'Remaining'],
          colors: ['#34C759', '#007AFF'],
        },
        appointmentAnalytics: {
          key: 'roofer-bar-analytics',
          heading: 'Appointments',
          subHeading: 'Fulfilled',
          labels: [
            'Appointments Disputed',
            'Appointments Scheduled',
            'Appointments Completed',
          ],
          colors: ['#FF3B30', '#007AFF', '#34C759'],
        },
      },
    },

    appointments: {
      heading: 'Appointments Overview',
    },

    billingsAndPlans: {
      summary: {
        heading: 'Summary Metrics',
        cards: [
          {
            title: 'Current Plan',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1749062858/briefcase_enhofg.png',
            imageAlt: 'Briefcase',
          },

          {
            title: 'Total Credits Issued',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1749062858/bulb_gnshzj.png',
            imageAlt: 'Lightbulb',
          },

          {
            title: 'Total Credits Remaining',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1749062858/timer_gohbqz.png',
            imageAlt: 'Timer',
          },

          {
            title: 'Total Credits Used',
            imageSrc:
              'https://res.cloudinary.com/doozfybsm/image/upload/v1753025842/Check_rx80vo.png',
            imageAlt: 'Check',
          },
        ],
      },

      overview: {
        heading: 'Billings & Plans Overview',
      },
    },
  },
};

export default stormyContent;
