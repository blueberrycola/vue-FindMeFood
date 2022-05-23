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