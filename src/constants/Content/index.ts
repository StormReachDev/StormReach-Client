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
};

export default stormyContent;
