class DataTable{
    constructor(id, columnCount, columnName, data){
        this.element = document.getElementById(id)
        this.columnCount = columnCount
        this.columns = []
        this.mobileColumns = []
        this.data = data
        for(let i = 0; i < columnName.length; i++){
            this.columns.push(columnName[i].name)
            this.mobileColumns.push(columnName[i].mobileName ? columnName[i].mobileName : columnName[i].name)
        }
        this.generateHeader()
        for(let i = 0; i < this.data.length; i++){
            this.insertRow(this.data[i])
        }
    }

    generateHeader(){
        let node = document.createElement('ul')
        node.setAttribute('class', 'table-header')
        for(let i = 0; i < this.columns.length; i++){
            node.appendChild(document.createElement('div'))
            node.getElementsByTagName('div')[i].appendChild(document.createElement('span'))
            node.getElementsByTagName('div')[i].getElementsByTagName('span')[0].innerHTML = this.columns[i]
            node.getElementsByTagName('div')[i].getElementsByTagName('span')[0].setAttribute('class', 'text-overflow')
        }
        this.element.appendChild(node)
    }

    insertRow(row){
        let node = document.createElement('ul')
        node.style.gridTemplateColumns = 'repeat(' + this.columnCount + ',' + 100 / this.columnCount + '%)'
        for(let i = 0; i < row.length; i++){
            node.appendChild(document.createElement('div'))
            let innerNode = node.getElementsByTagName('div')[i]
            innerNode.appendChild(document.createElement('span'))
            let label = innerNode.getElementsByTagName('span')[0]
            label.setAttribute('data-label', this.mobileColumns[i])
            label.setAttribute('class', 'text-overflow')
            label.innerHTML = row[i]
        }
        this.element.appendChild(node)
    }

    updateRow(position, newRow){
        let node = document.createElement('ul')
        node.style.gridTemplateColumns = 'repeat(' + this.columnCount + ',' + 100 / this.columnCount + '%)'
        for(let i = 0; i < newRow.length; i++){
            node.appendChild(document.createElement('div'))
            let innerNode = node.getElementsByTagName('div')[i]
            innerNode.appendChild(document.createElement('span'))
            let label = innerNode.getElementsByTagName('span')[0]
            label.setAttribute('data-label', this.mobileColumns[i])
            label.setAttribute('class', 'text-overflow')
            label.innerHTML = newRow[i]
        }
        /*
            We use position + 1 because of the header, it is the first child node,
            so the first row of the table is the second child node and so on
        */
        this.element.replaceChild(node, this.element.childNodes[position + 1])
    }

    deleteRow(position){
        /*
            We should use position + 3 because of the header, pull to refresh and icon,
            they're the three first child nodes, so the first row of the table
            is the fourth child node and so on, however, there is some weird javascript
            bug, it will remove one or all of the three elements above if we use a
            number smaller than 6
        */
        this.element.childNodes[position + 6].remove()
    }
}