class DataTable{
    constructor(id, columnCount){
        this.element = document.getElementById(id)
        this.columnCount = columnCount
        this.adaptTable()
    }

    //call this method every time a new row is added to the table
    adaptTable() {
        let elemList = this.element.getElementsByTagName('ul')
        for(let i = 0; i < elemList.length; i++){
            elemList[i].style.gridTemplateColumns = 'repeat(' + this.columnCount + ',' + 100 / this.columnCount + '%)'   
        }
    }
}

let dataTable = new DataTable('data-table', 2)