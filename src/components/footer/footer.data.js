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
  ],
  menuItem: [
    [
      {
        path: '/',
        label: 'Careers and Culture',
      },
      {
        path: '/',
        label: 'Press & Media',
      },
      {
        path: '/',
        label: 'Brand Guidelines',
      }
    ],
    [
      {
        path: '/',
        label: 'My Skills',
      },
      {
        path: '/',
        label: 'Skill Rating',
      },
      {
        path: '/',
        label: 'Ask Button',
      },
      {
        path: '/',
        label: 'And More...',
      }
    ],
    [
      {
        path: '/',
        label: 'Community Guidelines',
      },
      {
        path: '/',
        label: 'Privacy Policy',
      },
      {
        path: '/',
        label: 'EULA Policy',
      },
      {
        path: '/',
        label: 'Terms of use',
      },
      {
        path: '/',
        label: 'Cookies Policy',
      }
    ],
    [
      {
        path: '/',
        label: 'Contact Us',
      },
      {
        path: '/',
        label: 'Help Center',
      },
      {
        path: '/',
        label: 'Blogs',
      },
      {
        path: '/',
        label: 'FAQ\'s',
      }
    ]
  ],
};
