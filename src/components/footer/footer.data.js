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
        path: '/careers',
        label: 'Careers and Culture',
      },
      {
        path: '/media',
        label: 'Press & Media',
      },
      {
        path: '/brandGuidelines',
        label: 'Brand Guidelines',
      }
    ],
    [
      // {
      //   path: '/features',
      //   label: 'My Skills',
      //   id: 'SectionMySkills'
      // },
      {
        path: '/features',
        label: 'Skill Rating',
        id: 'SectionSetPrice'
      },
      {
        path: '/features',
        label: 'Ask Button',
        id:'SectionPaidMessage'
      },
      {
        path: '/features',
        label: 'Introduction Video',
        id: 'IntroductionVideo'
      },
      {
        path: '/features',
        label: 'My Profession',
        id: 'MyProfession'
      }
    ],
    [
      {
        path: '/communityGuidelines',
        label: 'Community Guidelines',
      },
      {
        path: '/policy',
        label: 'Privacy Policy',
      },
      {
        path: '/eula',
        label: 'EULA Policy',
      },
      {
        path: '/terms',
        label: 'Terms of use',
      },
      {
        path: '/cookies',
        label: 'Cookies Policy',
      }
    ],
    [
      {
        path: '/contactUs',
        label: 'Contact Us',
      },
      {
        path: '/helpCenter',
        label: 'Help Center',
      },
      {
        path: '/blogs',
        label: 'Blogs',
      },
      {
        path: '/faq',
        label: 'FAQ\'s',
      }
    ]
  ],
};
