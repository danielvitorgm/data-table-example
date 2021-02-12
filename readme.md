# Data table example

I was given a task to recreate a vue component([this one](https://codepen.io/Jayesh_v/pen/xmModE)) in a pure html + css + js version, the task was to recreate the responsivity of the data table, so functionalities and animations were not added.

## Usage

First create a main element(tables were not used here because i wanted more align power for
the rols and columns), optionally add a table-data class to it so it will have a margin of
48px from the top(if needed).

    <main class="table-data">
    </main>

Then create two section's, one with the class table-header and the other with the class table-body.

    <main class="table-data">
        <section class="table-header">
        </section>
        <section class="table-body">
        </section>
    </main>

Inside the table header create a ul with the class flex to turn it into a flexbox, then, inside
this ul, create div's up to the number of columns of your table, and add the classes flex and
justify-center to those div's, turning them into flexboxes with horizontally-centered content.

    <main class="table-data">
        <section class="table-header">
            <ul class="flex">
                <div class="flex justify-center">
                </div>
                <div class="flex justify-center">
                </div>
                <div class="flex justify-center">
                </div>
                <div class="flex justify-center">
                </div>
                <div class="flex justify-center">
                </div>
                <div class="flex justify-center">
                </div>
            </ul>
        </section>
        <section class="table-body">
        </section>
    </main>

After that we add one span element inside each div, each span containing our column name,
optionally we can add the class text-overflow to the span's so the text inside then won't
break lines.

    <main class="table-data">
        <section class="table-header">
            <ul class="flex">
                <div class="flex justify-center">
                    <span class="text-overflow">Dessert (100g serving)</span>
                </div>
                <div class="flex justify-center">
                    <span class="text-overflow">Calories</span>
                </div>
                <div class="flex justify-center">
                    <span class="text-overflow">Fat (g)</span>
                </div>
                <div class="flex justify-center">
                    <span class="text-overflow">Carbs (g)</span>
                </div>
                <div class="flex justify-center">
                    <span class="text-overflow">Protein (g)</span>
                </div>
                <div class="flex justify-center">
                    <span class="text-overflow">Iron (%)</span>
                </div>
            </ul>
        </section>
        <section class="table-body">
        </section>
    </main>

The table header is done, now, for the body we need to create multiple ul's with the class flex, each ul will become a row in our data table.

    <main class="table-data">
        <section class="table-header">
            <ul class="flex">
                <div class="flex justify-center">
                    <span class="text-overflow">Dessert (100g serving)</span>
                </div>
                <div class="flex justify-center">
                    <span class="text-overflow">Calories</span>
                </div>
                <div class="flex justify-center">
                    <span class="text-overflow">Fat (g)</span>
                </div>
                <div class="flex justify-center">
                    <span class="text-overflow">Carbs (g)</span>
                </div>
                <div class="flex justify-center">
                    <span class="text-overflow">Protein (g)</span>
                </div>
                <div class="flex justify-center">
                    <span class="text-overflow">Iron (%)</span>
                </div>
            </ul>
        </section>
        <section class="table-body">
            <ul class="flex">
            </ul>
            <ul class="flex">
            </ul>
            <ul class="flex">
            </ul>
        </section>
    </main>

Then, inside the ul's we add multiple li's also with the flex class, in mobile devices each li
will become a column.

    <main class="table-data">
        <section class="table-header">
            <ul class="flex">
                <div class="flex justify-center">
                    <span class="text-overflow">Dessert (100g serving)</span>
                </div>
                <div class="flex justify-center">
                    <span class="text-overflow">Calories</span>
                </div>
                <div class="flex justify-center">
                    <span class="text-overflow">Fat (g)</span>
                </div>
                <div class="flex justify-center">
                    <span class="text-overflow">Carbs (g)</span>
                </div>
                <div class="flex justify-center">
                    <span class="text-overflow">Protein (g)</span>
                </div>
                <div class="flex justify-center">
                    <span class="text-overflow">Iron (%)</span>
                </div>
            </ul>
        </section>
        <section class="table-body">
            <ul class="flex">
                <li class="flex">
                </li>
                <li class="flex">
                </li>
            </ul>
            <ul class="flex">
                <li class="flex">
                </li>
                <li class="flex">
                </li>
            </ul>
            <ul class="flex">
                <li class="flex">
                </li>
                <li class="flex">
                </li>
            </ul>
        </section>
    </main>

After that, put a div with the classes flex and justify-center inside each li, then, inside each div add a span element containing the data of that table cell, each of those spans must
have a data property called data-label, this property will be used to give them a label in mobile devices, optionally you can add the text-overflow class to the span's too.

    <main class="table-data">
        <section class="table-header">
            <ul class="flex">
                <div class="flex justify-center">
                    <span class="text-overflow">Dessert (100g serving)</span>
                </div>
                <div class="flex justify-center">
                    <span class="text-overflow">Calories</span>
                </div>
                <div class="flex justify-center">
                    <span class="text-overflow">Fat (g)</span>
                </div>
                <div class="flex justify-center">
                    <span class="text-overflow">Carbs (g)</span>
                </div>
                <div class="flex justify-center">
                    <span class="text-overflow">Protein (g)</span>
                </div>
                <div class="flex justify-center">
                    <span class="text-overflow">Iron (%)</span>
                </div>
            </ul>
        </section>
        <section class="table-body">
            <ul class="flex">
                    <li class="flex">
                        <div class="flex justify-center">
                            <span data-label="Name" class="text-overflow">Cupcake</span>
                        </div>
                        <div class="flex justify-center">
                            <span data-label="Calories" class="text-overflow">305</span>
                        </div>
                        <div class="flex justify-center">
                            <span data-label="Fat (g)" class="text-overflow">3.7</span>
                        </div>
                    </li>
                    <li class="flex">
                        <div class="flex justify-center">
                            <span data-label="Carbs (g)" class="text-overflow">67</span>
                        </div>
                        <div class="flex justify-center">
                            <span data-label="Protein (g)" class="text-overflow">4.3</span>
                        </div>
                        <div class="flex justify-center">
                            <span data-label="Iron (%)" class="text-overflow">8%</span>
                        </div>
                    </li>
                </ul>
                <ul class="flex">
                    <li class="flex">
                        <div class="flex justify-center">
                            <span data-label="Name" class="text-overflow">Donut</span>
                        </div>
                        <div class="flex justify-center">
                            <span data-label="Calories" class="text-overflow">462</span>
                        </div>
                        <div class="flex justify-center">
                            <span data-label="Fat (g)" class="text-overflow">25</span>
                        </div>
                    </li>
                    <li class="flex">
                        <div class="flex justify-center">
                            <span data-label="Carbs (g)" class="text-overflow">51</span>
                        </div>
                        <div class="flex justify-center">
                            <span data-label="Protein (g)" class="text-overflow">4.9</span>
                        </div>
                        <div class="flex justify-center">
                            <span data-label="Iron (%)" class="text-overflow">22%</span>
                        </div>
                    </li>
                </ul>
                <ul class="flex">
                    <li class="flex">
                        <div class="flex justify-center">
                            <span data-label="Name" class="text-overflow">Eclair</span>
                        </div>
                        <div class="flex justify-center">
                            <span data-label="Calories" class="text-overflow">262</span>
                        </div>
                        <div class="flex justify-center">
                            <span data-label="Fat (g)" class="text-overflow">16</span>
                        </div>
                    </li>
                    <li class="flex">
                        <div class="flex justify-center">
                            <span data-label="Carbs (g)" class="text-overflow">23</span>
                        </div>
                        <div class="flex justify-center">
                            <span data-label="Protein (g)" class="text-overflow">6</span>
                        </div>
                        <div class="flex justify-center">
                            <span data-label="Iron (%)" class="text-overflow">7%</span>
                        </div>
                    </li>
                </ul>
        </section>
    </main>

##### The complete example can be found at src/html/index.html

## Configurable columns

Sometimes you will need to configure the columns, for that reason column configuration classes
were created, let's use an example where we want to have an odd number of columns, but keep them aligned, how can this be done?

First we create the table body as we would usually do(table header and main tag were omitted in this example as their irrelevant for this demonstration):
 
    <section class="table-body">
        <ul class="flex">
            <li class="flex">
                <div class="flex justify-center">
                    <span data-label="Name" class="text-overflow">Cupcake</span>
                </div>
                <div class="flex justify-center">
                    <span data-label="Calories" class="text-overflow">305</span>
                </div>
                <div class="flex justify-center">
                    <span data-label="Fat (g)" class="text-overflow">3.7</span>
                </div>
            </li>
            <li class="flex">
                <div class="flex justify-center">
                    <span data-label="Carbs (g)" class="text-overflow">67</span>
                </div>
                <div class="flex justify-center">
                    <span data-label="Protein (g)" class="text-overflow">4.3</span>
                </div>
            </li>
        </ul>
        <ul class="flex">
            <li class="flex">
                <div class="flex justify-center">
                    <span data-label="Name" class="text-overflow">Donut</span>
                </div>
                <div class="flex justify-center">
                    <span data-label="Calories" class="text-overflow">462</span>
                </div>
                <div class="flex justify-center">
                    <span data-label="Fat (g)" class="text-overflow">25</span>
                </div>
            </li>
            <li class="flex">
                <div class="flex justify-center">
                    <span data-label="Carbs (g)" class="text-overflow">51</span>
                </div>
                <div class="flex justify-center">
                    <span data-label="Protein (g)" class="text-overflow">4.9</span>
                </div>
            </li>
        </ul>
        <ul class="flex">
            <li class="flex">
                <div class="flex justify-center">
                    <span data-label="Name" class="text-overflow">Eclair</span>
                </div>
                <div class="flex justify-center">
                    <span data-label="Calories" class="text-overflow">262</span>
                </div>
                <div class="flex justify-center">
                    <span data-label="Fat (g)" class="text-overflow">16</span>
                </div>
            </li>
            <li class="flex">
                <div class="flex justify-center">
                    <span data-label="Carbs (g)" class="text-overflow">23</span>
                </div>
                <div class="flex justify-center">
                    <span data-label="Protein (g)" class="text-overflow">6</span>
                </div>
            </li>
        </ul>
    </section>

If you take a closer look you will notice that i removed the iron column.

Now each li element must receive a class that represents the space it is occupying, in that
table we have five columns, so, we have li's that occupy three of five columns, and two of
five columns, so we will add the classes three-of-five and two-of-five to them.

##### *Note: the table.css has classes to support up to ten columns.

    <section class="table-body">
        <ul class="flex">
            <li class="flex three-of-five">
                <div class="flex justify-center">
                    <span data-label="Name" class="text-overflow">Cupcake</span>
                </div>
                <div class="flex justify-center">
                    <span data-label="Calories" class="text-overflow">305</span>
                </div>
                <div class="flex justify-center">
                    <span data-label="Fat (g)" class="text-overflow">3.7</span>
                </div>
            </li>
            <li class="flex two-of-five">
                <div class="flex justify-center">
                    <span data-label="Carbs (g)" class="text-overflow">67</span>
                </div>
                <div class="flex justify-center">
                    <span data-label="Protein (g)" class="text-overflow">4.3</span>
                </div>
            </li>
        </ul>
        <ul class="flex">
            <li class="flex three-of-five">
                <div class="flex justify-center">
                    <span data-label="Name" class="text-overflow">Donut</span>
                </div>
                <div class="flex justify-center">
                    <span data-label="Calories" class="text-overflow">462</span>
                </div>
                <div class="flex justify-center">
                    <span data-label="Fat (g)" class="text-overflow">25</span>
                </div>
            </li>
            <li class="flex two-of-five">
                <div class="flex justify-center">
                    <span data-label="Carbs (g)" class="text-overflow">51</span>
                </div>
                <div class="flex justify-center">
                    <span data-label="Protein (g)" class="text-overflow">4.9</span>
                </div>
            </li>
        </ul>
        <ul class="flex">
            <li class="flex three-of-five">
                <div class="flex justify-center">
                    <span data-label="Name" class="text-overflow">Eclair</span>
                </div>
                <div class="flex justify-center">
                    <span data-label="Calories" class="text-overflow">262</span>
                </div>
                <div class="flex justify-center">
                    <span data-label="Fat (g)" class="text-overflow">16</span>
                </div>
            </li>
            <li class="flex two-of-five">
                <div class="flex justify-center">
                    <span data-label="Carbs (g)" class="text-overflow">23</span>
                </div>
                <div class="flex justify-center">
                    <span data-label="Protein (g)" class="text-overflow">6</span>
                </div>
            </li>
        </ul>
    </section>

This is enough for the desktop version, but for mobile devices we need to configure the div's
inside the li's too, to do that we must first understand how many rows each row of our table will have in a mobile device, and that is easy, if each li element will become a column, and the biggest column we have in our example has three items, then we will have three rows, so all we have to do is add the corresponding class(one-of-three) to each div that is inside a li
with less than three div's:

    <section class="table-body">
        <ul class="flex">
            <li class="flex three-of-five">
                <div class="flex justify-center">
                    <span data-label="Name" class="text-overflow">Cupcake</span>
                </div>
                <div class="flex justify-center">
                    <span data-label="Calories" class="text-overflow">305</span>
                </div>
                <div class="flex justify-center">
                    <span data-label="Fat (g)" class="text-overflow">3.7</span>
                </div>
            </li>
            <li class="flex two-of-five">
                <div class="flex justify-center one-of-three">
                    <span data-label="Carbs (g)" class="text-overflow">67</span>
                </div>
                <div class="flex justify-center one-of-three">
                    <span data-label="Protein (g)" class="text-overflow">4.3</span>
                </div>
            </li>
        </ul>
        <ul class="flex">
            <li class="flex three-of-five">
                <div class="flex justify-center">
                    <span data-label="Name" class="text-overflow">Donut</span>
                </div>
                <div class="flex justify-center">
                    <span data-label="Calories" class="text-overflow">462</span>
                </div>
                <div class="flex justify-center">
                    <span data-label="Fat (g)" class="text-overflow">25</span>
                </div>
            </li>
            <li class="flex two-of-five">
                <div class="flex justify-center one-of-three">
                    <span data-label="Carbs (g)" class="text-overflow">51</span>
                </div>
                <div class="flex justify-center one-of-three">
                    <span data-label="Protein (g)" class="text-overflow">4.9</span>
                </div>
            </li>
        </ul>
        <ul class="flex">
            <li class="flex three-of-five">
                <div class="flex justify-center">
                    <span data-label="Name" class="text-overflow">Eclair</span>
                </div>
                <div class="flex justify-center">
                    <span data-label="Calories" class="text-overflow">262</span>
                </div>
                <div class="flex justify-center">
                    <span data-label="Fat (g)" class="text-overflow">16</span>
                </div>
            </li>
            <li class="flex two-of-five">
                <div class="flex justify-center one-of-three">
                    <span data-label="Carbs (g)" class="text-overflow">23</span>
                </div>
                <div class="flex justify-center one-of-three">
                    <span data-label="Protein (g)" class="text-overflow">6</span>
                </div>
            </li>
        </ul>
    </section>

##### The complete example can be found at src/html/configurableColumns.html