function randomData(data, length) {
    let randomArray = []
    for(let i = 0; i < length; i++){
        let row = []
        for(let j = 0; j < data[0].length; j++){
            row.push(data[Math.floor(Math.random() * data.length)][j])
        }
        randomArray.push(row)
    }
    return randomArray
}


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
//How many items will be loaded on the screen?
const itemsPerScroll = 20

//generating random mocked data
let fullData = randomData(data, 1000)

//Starts at the first element of the array, then icreases as user scrolls
var start = 0
var end = start + itemsPerScroll <= fullData.length ? start + itemsPerScroll : fullData.length
var lastPull = 0
var userStoppedPulling = true
var dataTable = new DataTable(tableId, columnCountInSmallDevices, columns, fullData.slice(start, end))

//this function must be called in the onscroll event of our datatable
function infiniteScroll(){
    /*
        scrollheight is the total scroll of our element, scrollTop is how much the element
        has been scrolled down, and body.scrollHeight is the page height
    */
    if(dataTable.element.scrollHeight - dataTable.element.scrollTop - document.body.scrollHeight <= 0){
        //updating the indexes of the start and the end
        start = end
        end = start + itemsPerScroll <= fullData.length ? start + itemsPerScroll : fullData.length
        //getting and adding new rows
        let newRows = fullData.slice(start, end)
        for(let i = 0; i < newRows.length; i++){
            dataTable.insertRow(newRows[i])
        }
    }
}

function pullToRefresh(event){
    if(userStoppedPulling){
        if(lastPull == 0){
            lastPull = event.screenY
        }else if(event.screenY - lastPull >= 0 && event.screenY - lastPull <= 100){
            let elem = dataTable.element.getElementsByClassName('pull-to-refresh__icon')[0]
            elem.setAttribute('style', 
                'top: ' + (event.screenY - lastPull).toString() + 'px;' +
                'opacity: ' + ((event.screenY - lastPull) / 100).toString() + ';' +
                'transform: rotateZ(' + (-360 * (event.screenY - lastPull) / 100).toString() + 'deg);'
            )
        }else if(event.screenY - lastPull > 100){
            let elem = dataTable.element.getElementsByClassName('pull-to-refresh__icon')[0]
            elem.setAttribute('style', '')
            lastPull = 0
            userStoppedPulling = false
            for(let i = 0; i < end - 1; i++){
                dataTable.deleteRow(0)
            }
            start = 0
            end = itemsPerScroll
            fullData = randomData(data, 1000)
            newRows = fullData.slice(start, end)
            for(let i = 0; i < newRows.length; i++){
                dataTable.insertRow(newRows[i])
            }
        }
    }
}

function userDropped(event){
    let elem = dataTable.element.getElementsByClassName('pull-to-refresh__icon')[0]
    elem.setAttribute('style', '')
    lastPull = 0
    userStoppedPulling = true
}

function allowDrop(event){
    event.preventDefault()
}