# Data table example

I was given a task to recreate a vue component([this one](https://codepen.io/Jayesh_v/pen/xmModE)) in a pure html + css + js version, the task was to recreate the responsivity of the data table, so functionalities and animations were not added.

## Usage

First create a main element(tables were not used here because i wanted more align power for
the rols and columns), add an arbitrary id name(the id is needed for the js part) and a table-data class to it.

    <main id="data-table" class="table-data">
    </main>

Then create ul's up to the number of rows you want.

    <main id="data-table" class="table-data">
        <ul></ul>
        <ul></ul>
        <ul></ul>
    </main>

Inside each ul, add div's up to the number of columns you want.

    <main id="data-table" class="table-data">
        <ul>
            <div></div>
            <div></div>
            <div></div>
        </ul>
        <ul>
            <div></div>
            <div></div>
            <div></div>
        </ul>
        <ul>
            <div></div>
            <div></div>
            <div></div>
        </ul>
    </main>

After that we add one span element inside each div, each span containing our column value
and a data-label property containing the label we want that column to have in small devices,
optionally we can add the class text-overflow to the span's so the text inside then won't
break lines.

    <main id="data-table" class="table-data">
        <ul>
            <div>
                <span data-label="Name" class="text-overflow">Cupcake</span>
            </div>
            <div>
                <span data-label="Calories" class="text-overflow">305</span>
            </div>
            <div>
                <span data-label="Fat (g)" class="text-overflow">3.7</span>
            </div>
        </ul>
        <ul>
            <div>
                <span data-label="Name" class="text-overflow">Donut</span>
            </div>
            <div>
                <span data-label="Calories" class="text-overflow">462</span>
            </div>
            <div>
                <span data-label="Fat (g)" class="text-overflow">25</span>
            </div>
        </ul>
        <ul>
            <div>
                <span data-label="Name" class="text-overflow">Eclair</span>
            </div>
            <div>
                <span data-label="Calories" class="text-overflow">262</span>
            </div>
            <div>
                <span data-label="Fat (g)" class="text-overflow">16</span>
            </div>
        </ul>
    </main>

Optionally, we can add a new ul with the class table-header to create the table header,
the spans of the table header don't need a data-label, since the table-header doesn't
appear in small screens.

    <main id="data-table" class="table-data">
        <ul class="table-header">
            <div>
                <span class="text-overflow">Dessert (100g serving)</span>
            </div>
            <div>
                <span class="text-overflow">Calories</span>
            </div>
            <div>
                <span class="text-overflow">Fat (g)</span>
            </div>
        </ul>
        <ul>
            <div>
                <span data-label="Name" class="text-overflow">Cupcake</span>
            </div>
            <div>
                <span data-label="Calories" class="text-overflow">305</span>
            </div>
            <div>
                <span data-label="Fat (g)" class="text-overflow">3.7</span>
            </div>
        </ul>
        <ul>
            <div>
                <span data-label="Name" class="text-overflow">Donut</span>
            </div>
            <div>
                <span data-label="Calories" class="text-overflow">462</span>
            </div>
            <div>
                <span data-label="Fat (g)" class="text-overflow">25</span>
            </div>
        </ul>
        <ul>
            <div>
                <span data-label="Name" class="text-overflow">Eclair</span>
            </div>
            <div>
                <span data-label="Calories" class="text-overflow">262</span>
            </div>
            <div>
                <span data-label="Fat (g)" class="text-overflow">16</span>
            </div>
        </ul>
    </main>

The html code is done, now we need to create a DataTable object in javascript, to
do this we call the constructor using the id we gave to the data table and a number,
this number represents the number of columns in which every row will turn in small devices.

    let dataTable = new DataTable('data-table', 2)

Also, every time you add a new row in the table call the adaptTable method.

    let dataTable = new DataTable('data-table', 2)
    dataTable.adaptTable()

##### The complete example can be found at src/html/index.html