import { MenuEntry } from '@ricefarm/uikit'

const config: MenuEntry[] = [
  // {
  //   label: 'Home',
  //   icon: 'HomeIcon',
  //   href: '/',
  // },
  {
    label: 'TeslaSafe Swap',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://teslasafe.ricefarm.fi',
      },
      {
        label: 'Liquidity',
        href: 'https://teslasafe.ricefarm.fi/#/pool',
      },
    ],
  },
  // {
  //   label: 'Farms',
  //   icon: 'FarmIcon',
  //   href: '/farms',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  /*
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: '/collectibles',
  },
  {
    label: 'Team Battle',
    icon: 'TeamBattleIcon',
    href: '/competition',
    status: {
      text: 'CLAIM',
      color: 'warning',
    },
  },
  
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Leaderboard',
        href: '/teams',
      },
      {
        label: 'Task Center',
        href: '/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: '/profile',
      },
    ],
  },
   */
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://pancakeswap.info',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://pancakeswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://pancakeswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://pancakeswap.info/accounts',
  //     },
  //   ],
  // },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: 'Referrals',
    icon: 'ReferralIcon',
    href: '/referrals',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.ricefarm.fi',
      // },
      {
        label: 'Github',
        href: 'https://github.com/rice-farm',
      },
      {
        label: 'Docs',
        href: 'https://docs.ricefarm.fi',
      },
      {
        label: 'TeslaSafe',
        href: 'https://teslasafe.fi',
      },
      {
        label: 'TeslaSafe Github',
        href: 'https://github.com/tesla-safe',
      },
      // {
      //   label: 'Blog',
      //   href: 'https://ricefarm.medium.com',
      // },
      // {
      //   label: 'Merch',
      //   href: 'https://pancakeswap.creator-spring.com/',
      // },
    ],
  },
]

export default config
