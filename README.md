# vue-FindMeFood
    Fake grubhub that instead of ordering food just lists restaurants based on buttons pressed or input. You can favorite these locations and see them in a separate page. Uses Spring Boot for Backend
# Commit #1:
    Created boiler plate vue app. Added routing for various pages. Created Footer

# Commit #2-4:
    Created HTML boiler plate code for LoginView and RegisterView inside Views directory
# Commit 4-7:
    Added LoginView CSS + RegisterView CSS
# Commit 8:
Added method in RegisterView: initJson()
    This json variable will be used to send via the restful api so the
    spring boot server can grab it and successfully create user
# Commit 9:
    Home.vue component: added template + css
# Commit 10:
    Added Register Button from Home button css
    Done also for login
# Commit 11-12:
    Fixed readme.md
# Commit 13:
    Fixed bug where navbar wouldnt work on Home page
# Commit 14:
    npm i request, curl
    created checking for if password and confPass are matching
    created email regex expression to check if register form has valid email address
# Commit 15:
    creating axios code for request. Failure.
# Commit 16: 
    figuring out how to make a request from localhost:3000 to localhost:8080.
    edit:
    It is done by @CrossReference("yoururl:8080") tag in Spring!
# Commit 17:
    Fixed input width on /login, 
    Basic text added for /about, fixed header and container placement.
    Shortened CSS for login form container, adjusted css.
# Commit 18:
    Login button event listener + skeleton code for get request in axios
    Defined function for toggling remember me checkbox
# Commit 19:
    Quick fix for home navigation bar not working added button listener
    for home
# Commit 20:
    Created button board for food types in Home.vue. Added CSS Styling
# Commit 21:
    Created clear function, displays selected types, fixed css bugs
# Commit 22:
    Fixed bug where home element overlapped nav bar. Old fix would
    clone nav bar after revisiting home
# Commit 23:
    Hover + click CSS for food-buttonboard class and clear-btn.
    Color change to clear button
    findUnique(): This function removes any duplicates from displaying
        if a user were to press a button twice.
        It will also be used in the future to return the users input w/o
        duplicates.
    returnSelectedButtons(): removes '[]' being displayed in h3 header inside home.vue. Uses findUnique() to get user input w/o duplicates
# Commit 24:
    Merged Login and Register into one page
# Commit 25:
    Created prompt to reveal register tab.
# Commit 26-28:
    Modifying HomeView to allow HomeList to replace Home.vue,
    
    $emit boolean signal to HomeView so it knows when to change to 
    HomeList and call Places API
# Commit 29:
    API Key secure in .env file
    Testing Places API
    Created new favicon (fixme: add transparency to img)
