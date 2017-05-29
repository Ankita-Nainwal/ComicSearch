# ComicSearch
Angularproject

This project was generated with Angular CLI version 1.0.3.
Development server

Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.
Code scaffolding

Run ng generate component component-name to generate a new component. You can also use ng generate directive|pipe|service|class|module.
Build

Run ng build to build the project. The build artifacts will be stored in the dist/ directory. Use the -prod flag for a production build.
Running unit tests

Run ng test to execute the unit tests via Karma.
Running end-to-end tests

Run ng e2e to execute the end-to-end tests via Protractor. Before running the tests make sure you are serving the app via ng serve.
Further help

To get more help on the Angular CLI use ng help or go check out the Angular CLI README.

//Comics search project

Platform to list series of comics online

There are three entities on this platform Series-> Season-> Comics

A. Series - Series is independent entity which may contain 1 or multiple seasons. It contains (Name, description, created date, updated date, created by)
B. Season - Season depends on Series which may contain 1 or multiple comics.(Name, description , starts on, ends on, created date, updated date)
C. Comics - Comic depends on Season comic is single entity. which contains (Name, image, story, created date, updated date).

Platform will have 3 roles (Super Admin/ Admin/ User)
Super Admin can add/edit/ delete (Admin and User)
Admin can add/edit/delete (Season/Series/Comics)
User can see, search and comment on comics.
Super admin / Admin (Need to login to perform any action)
Searching can be done without login(Commenting can not be done without login)

To build project in angular:
commands:
1.ng new <name of project>(to build project)
2.ng g component <component name> (to make component)
3.ng g service <service name> (to make service)



To start node:
node <index file name>


To start mongo:
sudo service mongod start






