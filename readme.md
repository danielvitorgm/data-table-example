# Data table example

I was given a task to recreate a vue component([this one](https://codepen.io/Jayesh_v/pen/xmModE)) in a pure html + css + js version, the task was to recreate the responsivity of the data table, so functionalities and animations were not added.

## Usage

First create a main element(tables were not used here because i wanted more align power for
the rols and columns), add an arbitrary id name and a table-data class to it.

    <main id="data-table" class="table-data"></main>


The html code is done, now we need to create an array containing objects that contain
the property name, this will be the name of our columns, optionally those objects can
have a mobileName property, this property indicates what will be name of the column in
mobile devices(is useful when some column have a long name).

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

Now, create a new array, inside this array create arrays up to the number of rows you
want in your table, the inner arrays will contain the data of each column.

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
        ]
    ]

Now all we need to do is create a new DataTble object, to do so we will need the id of our
data table element(data-table), the number of columns we want it to have in small devices,
our table columns and our table data.

    const tableId = 'data-table'
    const columnCountInSmallDevices = 2

    let dataTable = new DataTable(tableId, columnCountInSmallDevices, columns, data)

##### The complete example can be found at src/html/index.html

You can also insert a new row to the table object using the method insertRow, update a row using updateRow or delete a row using deleteRow.

    const row = [
        'Frozen Yogurt',
        '159',
        '6',
        '24',
        '4',
        '1%'
    ]
    const position = 0

    dataTable.insertRow(row)
    dataTable.updateRow(position, row)
    dataTable.deleteRow(position)
