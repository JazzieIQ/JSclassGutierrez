Answer:
A new div section can be created and then the table can be appended to the div section with the table elements we returned via out for table object.

I would add a new append for a tr which we can return and append those rows under the headers with data from the my-data object array.

I don't have a solution yet.

this is a product of a for-loop which generates a new table for each new item being pulled from our object caused by the conditons being passed. In my previous deviated code I ran into this problem when I was creating an array using a FOR.EACH where my conditions were to create a new array for each index of my array rather to either push, append, and existing array. My solution was to replace a for-each loop with a while loop and to reduce the while to one operation processing a number for each new index length where the index number had already passed through an i++ in previous operation.