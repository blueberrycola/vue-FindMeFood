# vue-FindMeFood
    Fake grubhub that instead of ordering food just lists restaurants based on buttons pressed or input. You can favorite these locations and see them in a separate page. Uses Spring Boot for Backend
## Commit Notes:

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
