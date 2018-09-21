# project2
The lads tackle project #2

https://fierce-castle-33369.herokuapp.com/

Notes:
Try and use this to log all our processes

**********************
WORKFLOW FOR STAFF PAGE
**********************
1. Click staff on landing page
2. Modal with staff login appears below, has dropdown for staff members and a password input
3. If the password relative to the value in the dropdown is correct, open up time tracker page. If incorrect, error message them.
4. User is now on the time tracker App page
5. The tracker itself is greyed out with a message asking for the user to select a project from the dropdown menu that the admin will populate
6. Once a user selects the project, the time tracker becomes interactive
7. User presses start time, this starts the moment.js function and gives us a start value
8. During this time the User has 2 options
   *Stop Time*: This will pause the clock and disable the entire app, EXCEPT
   the RESUME TIME BUTTON which will start the timer once more
   *End Session*: This will end the current work session and give us our end value for the moment function. Clicking this will open up the input modal for what you worked on during the current session (Honour code way of relaying your work to the admins). This button has most of the function as it will then send all the information to their respective database tables.
9. After end session is hit, the user may start another or leave.


**********************
WORKFLOW FOR ADMIN PAGE
**********************
1. Click admin on landing page
2. Modal with admin login appears below, has an input for username and password
3. If the password and username match, open up the admin management page. Otherwise error message the user.
4. User is now on the employee management page
5. From here the user has multiple options:
 A: *Create new project*
   - This is where the database table projects will be populated for the staff dropdown menu
   - Admin inputs a project name, and how long they expect it to take, and a small description
 B: *Add new staff member*
   - This is where the admin will create new staff that can then log in and start using the time tracker app
   - Admin inputs a staff name, a default password, an hourly wage
UNFINISHED

 C: *Data visualization for hours worked*
   - This is where the admin can view all of their employees hours worked using the data visualization library.
   - Pie chart showing how much time each staff worked on a specific project
   - Block Calendar where the admin can click on individual days and see the notes written by the staff and how many hours they worked on those tasks
   -Possibly show the profitability of the project, comparing hours worked to expected hours worked and the wages distributed.
Message Input

Jot something down
