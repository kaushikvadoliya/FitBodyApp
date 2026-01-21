import uuid from 'react-native-uuid';

export const remindersNotification = [
  {
    day: 'Today',
    data: [
      {
        id: uuid.v4(),
        title: 'New Workout Is Available',
        time: 'June 10 - 10:00 AM',
        icon: require('../../assets/icons/star.png'),
        unread: false,
      },
      {
        id: uuid.v4(),
        title: "Don't Forget To Drink Water",
        time: 'June 10 - 8:00 AM',
        icon: require('../../assets/icons/lamp.png'),
        unread: true,
      },
    ],
  },
  {
    day: 'Yesterday',
    data: [
      {
        id: uuid.v4(),
        title: 'Upper Body Workout Completed!',
        time: 'June 09 - 6:00 PM',
        icon: require('../../assets/icons/trophy.png'),
        unread: true,
      },
      {
        id: uuid.v4(),
        title: 'Remember Your Exercise Session',
        time: 'June 09 - 3:00 PM',
        icon: require('../../assets/icons/lamp.png'),
        unread: false,
      },
      {
        id: uuid.v4(),
        title: 'New Article & Tip Posted!',
        time: 'June 09 - 11:00 AM',
        icon: require('../../assets/icons/document.png'),
        unread: false,
      },
    ],
  },
  {
    day: 'May 29 - 20XX',
    data: [
      {
        id: uuid.v4(),
        title: 'You Started A New Challenge!',
        time: 'May 29 - 9:00 AM',
        icon: require('../../assets/icons/star.png'),
        unread: false,
      },
      {
        id: uuid.v4(),
        title: 'New House Training Ideas!',
        time: 'May 29 - 8:20 AM',
        icon: require('../../assets/icons/star.png'),
        unread: false,
      },
    ],
  },
];

export const systemNotification = [
  {
    day: 'Today',
    data: [
      {
        id: uuid.v4(),
        title: 'You Have A New Message!',
        time: 'June 10 - 2:00 PM',
        icon: require('../../assets/icons/star.png'),
        unread: true,
      },
      {
        id: uuid.v4(),
        title: 'Scheduled Maintenance.',
        time: 'June 10 - 8:00 AM',
        icon: require('../../assets/icons/document.png'),
        unread: true,
      },
      {
        id: uuid.v4(),
        title: "We've Detected A Login From A New Device",
        time: 'June 10 - 5:00 AM',
        icon: require('../../assets/icons/notifications.png'),
        unread: false,
      },
    ],
  },
  {
    day: 'Yesterday',
    data: [
      {
        id: uuid.v4(),
        title: "We've Updated Our Privacy Policy",
        time: 'June 09 - 1:00 PM',
        icon: require('../../assets/icons/document.png'),
        unread: false,
      },
      {
        id: uuid.v4(),
        title: 'You Have A New Message!',
        time: 'June 09 - 9:00 AM',
        icon: require('../../assets/icons/star.png'),
        unread: false,
      },
    ],
  },
  {
    day: 'May 29 - 20XX',
    data: [
      {
        id: uuid.v4(),
        title: 'You Have A New Message!',
        time: 'May 29 - 10:00 AM',
        icon: require('../../assets/icons/star.png'),
        unread: false,
      },
      {
        id: uuid.v4(),
        title: "We've Made Changes To Our Terms Of Service",
        time: 'May 29 - 7:20 AM',
        icon: require('../../assets/icons/document.png'),
        unread: false,
      },
    ],
  },
];
