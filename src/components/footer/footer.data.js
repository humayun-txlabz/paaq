import Chat from 'assets/widget/chat.svg';
import Community from 'assets/widget/community.svg';
import Github from 'assets/widget/github.svg';

export default {
  widgets: [
    {
      id: 1,
      iconSrc: Chat,
      altText: 'Community',
      title: 'Join the Community',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
    },
    {
      id: 2,
      iconSrc: Community,
      altText: 'Chat',
      title: 'Chat Communication',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
    },
    {
      id: 3,
      iconSrc: Github,
      altText: 'Github',
      title: 'Github Access',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
    },
  ],
  menuItemHeading: [
    'Company',
    'Features',
    'Trust',
    'Connect',
    'Follow Us'
  ],
  menuItem: [
    [
      {
        path: '/',
        label: 'About Us',
      },
      {
        path: '/',
        label: 'Careers & culture',
      },
      {
        path: '/',
        label: 'Blog',
      }
    ],
    [
      {
        path: '/',
        label: 'Skills',
      },
      {
        path: '/',
        label: 'Ask Button',
      },
      {
        path: '/',
        label: 'Set price',
      },
      {
        path: '/',
        label: 'And more...',
      }
    ],
    [
      {
        path: '/',
        label: 'Community guidelines',
      },
      {
        path: '/',
        label: 'Privacy policy',
      },
      {
        path: '/',
        label: 'Eula policy',
      },
      {
        path: '/',
        label: 'Terms of use',
      }
    ],
    [
      {
        path: '/',
        label: 'Help center',
      },
      {
        path: '/',
        label: 'F&Qs',
      },
      {
        path: '/',
        label: 'Blogs',
      },
      {
        path: '/',
        label: 'Cookies Policy',
      }
    ],
    [
      {
        path: '/',
        label: 'Instagram',
      },
      {
        path: '/',
        label: 'Twitter',
      },
      {
        path: '/',
        label: 'Linkedin',
      },
      {
        path: '/',
        label: 'Medium',
      },
      {
        path: '/',
        label: 'Contact',
      },
    ],
  ],
};
