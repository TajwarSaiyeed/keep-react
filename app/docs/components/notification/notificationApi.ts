export const notificationApi = [
  {
    id: 1,
    propsName: 'isOpen',
    propsType: 'boolean',
    propsDescription: 'Notification show or not.',
    default: 'false',
  },
  {
    id: 2,
    propsName: 'onOpenChange',
    propsType: 'setState',
    propsDescription: 'Function to call when the notification is dismissed.',
    default: 'Null',
  },
  {
    id: 3,
    propsName: 'position',
    propsType: ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'center'],
    propsDescription: 'Sets the position of the notification.',
    default: 'bottom-right',
  },
]
