let columns = [
    {
        name: 'Dessert (100g serving)',
        mobileName: 'Name'
    },
    {
        name: 'Calories'
    },
    {
        name: 'Fat (g)'
    },
    {
        name: 'Carbs (g)'
    },
    {
        name: 'Protein (g)'
    },
    {
        name: 'Iron (%)'
    }
]

let data = [
    [
        'Cupcake',
        '305',
        '3.7',
        '67',
        '4.3',
        '8%'
    ],
    [
        'Donut',
        '462',
        '25',
        '51',
        '4.9',
        '22%'
    ],
    [
        'Eclair',
        '262',
        '16',
        '23',
        '6',
        '7%'
    ],
    [
        'Frozen Yogurt',
        '159',
        '6',
        '24',
        '4',
        '1%'
    ],
    [
        'Gingerbread',
        '356',
        '16',
        '49',
        '3.9',
        '16%'
    ],
    [
        'Honeycomb',
        '408',
        '3.2',
        '87',
        '6.5',
        '45%'
    ],
    [
        'Ice cream sandwich',
        '237',
        '9',
        '37',
        '4.3',
        '1%'
    ],
    [
        'Jelly bean',
        '375',
        '0',
        '94',
        '0',
        '0%'
    ],
    [
        'KitKat',
        '518',
        '26',
        '65',
        '7',
        '6%'
    ],
    [
        'Lollipop',
        '392',
        '0.2',
        '98',
        '0',
        '2%'
    ],
]

const tableId = 'data-table'
const columnCountInSmallDevices = 2

let dataTable = new DataTable(tableId, columnCountInSmallDevices, columns, data)
