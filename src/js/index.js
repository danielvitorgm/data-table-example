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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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
var firstPull = 0
var messageChanged = true
var readyToRefresh = false
var dataTable = new DataTable(tableId, columnCountInSmallDevices, columns, fullData.slice(start, end))

//this function must be called in the onscroll event of our datatable
function infiniteScroll(){
    //allowing pull to refresh
    if(dataTable.element.scrollTop > 0){
        document.getElementById('pull-to-refresh').setAttribute('style', 'display: none;')
    }else{
        document.getElementById('pull-to-refresh').setAttribute('style', '')
    }
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
    if(firstPull == 0){
        firstPull = event.screenY
    }else if(firstPull >= event.screenY){
        const xAxisScroll = 0
        const yAxisScroll = firstPull - event.screenY
        dataTable.element.scroll(xAxisScroll,  yAxisScroll)
    }else if(event.screenY - firstPull <= 100){
        dataTable.element.setAttribute('style', 'top: ' + (48 + event.screenY - firstPull).toString() + 'px;')
        if(event.screenY - firstPull >= 75 && messageChanged){
            document.getElementsByClassName('pull--down')[0].setAttribute('class', 'pull--up')
            messageChanged = false
            readyToRefresh = true
        }else if(event.screenY - firstPull < 75 && !messageChanged){
            document.getElementsByClassName('pull--up')[0].setAttribute('class', 'pull--down')
            messageChanged = true
            readyToRefresh = false
        }
    }
}

async function userDropped(event){
    if(readyToRefresh){
        dataTable.deleteAll()
        fullData = randomData(data, 1000)
        start = 0
        end = start + itemsPerScroll <= fullData.length ? start + itemsPerScroll : fullData.length
        let newRows = fullData.slice(start, end)
        dataTable.element.setAttribute('style', '')
        messageChanged = true
        readyToRefresh = false
        firstPull = 0
        let elem = document.getElementsByClassName('reload-animation')[0]
        elem.setAttribute('style', 'z-index: 1')
        const millisecond = 1
        const second = 1000 * millisecond
        await sleep(3 * second)
        elem.setAttribute('style', '')
        for(let i = 0; i < newRows.length; i++){
            dataTable.insertRow(newRows[i])
        }
    }
    dataTable.element.setAttribute('style', '')
    messageChanged = true
    readyToRefresh = false
    firstPull = 0
    let elem = document.getElementsByClassName('pull--up')
    for(let i = 0; i < elem.length; i++){
        elem[i].setAttribute('class', 'pull--down')
    }
}

function allowDrop(event){
    event.preventDefault()
}

function scrollDown(event){
    if(event.deltaY > 0){
        document.getElementById('pull-to-refresh').setAttribute('style', 'display: none;')
    }
}