export const dropdownAPIData = [
  {
    id: 1,
    propsName: 'placement',
    propsType: [
      'top',
      'top-start',
      'top-end',
      'bottom',
      'bottom-start',
      'bottom-end',
      'left',
      'left-start',
      'left-end',
      'right',
      'right-start',
      'right-end',
    ],
    propsDescription: 'Defines the placement of the dropdown.',
    default: 'bottom-start',
  },
  {
    id: 2,
    propsName: 'showArrow',
    propsType: 'boolean',
    propsDescription: 'Enables or disables the floating arrow within the dropdown.',
    default: 'false',
  },
  {
    id: 3,
    propsName: 'trigger',
    propsType: ['hover', 'click', 'focus'],
    propsDescription: 'Trigger mode for displaying the dropdown.',
    default: 'click',
  },
]
