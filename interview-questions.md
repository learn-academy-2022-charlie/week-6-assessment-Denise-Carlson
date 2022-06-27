# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: The foreign key is added to the database table that doesn't have the primary key. In this example, The model cohort that has many students  would  be the table in which you would add the foreign key the relationship of one to many requires a primary key which would then be used to identify each student on any other table in the Student model database cohort. The rails application automatically generates the primary key so to add a foreign key you would simply have to figure out which columns on your new table corresponds with the primary key on the main table and link the two tables. The student table will be your primary table on which all the other relationships will exist it will contain the primary key. The cohort table will contain the foreign key so you will have to add this key to the cohort table. The cohort table contains only those students that are in a particular cohort not all the students like the student table does.

  Researched answer: Rails is much smarter than I realized you just have to use a migration file to validate the foreign key. You should not use add_foreign_key or add_concurrent_foreign_key more than once per migration file unless tables are identical. Rails includes helpers with migration to ensure that foreign key restraints are added to each database table. Rails won't let you delete foreign keys with restraints. You can use a plug-in that does this for you. 



2. Which RESTful routes must always be passed params? Why?

  Your answer: There are seven restful routes. These align with HTTP commands. Params are special ways that the data must be passed or routed. When new data is created doesn't need to be routed, when data is altered through destroy It doesn't need params because the data isn't going anywhere. When data is updated it needs params to tell where the data needs to go and exactly what needs to happen. When you are fetching data it  need params. Get needs params to figure out where the data is residing and what is being asked.  Fetch also needs params.  I have worked on two projects with restful routes while in training as a developer. Params are very useful for applying the MCV features in rails. Params are used during the controller and view portions to route requests.  

  Researched answer: Params are part of the users browser and are encoded in the URL.This happens when a page is requested.Route parameters are passed using controller actions. Ruby allow someone to treat instances as URL's.Index, create, new , edit, show all need params. Google really didn't help me much on this question, I still don't know which ones for sure. 



3. Name three rails generator commands. What is created by each?

  Your answer: Rails generate model, Rails generate resource, rails generate helper. Rails generate model installs a rails model application and everything needed for setting up a rails application that contains a empty database. Rails generate helper not exactly sure what this command does except maybe it installs the help file  part of rails ? Rails generate resource, this installs an routing file that you can utilize postman to do the routing. I have used this command while doing my wildlife application backend only since it doesn't have a user interface on it. All of these commands install quite a bit of boilerplate code making it faster and easier to get a backend of an application set up. 
  Researched answer: This command can help you to streamline your workflow making it possible to deploy the backend of an application quite easily. When you use create controller you actually can add methods that you want into the new controller, but it creates a view for each method. Model and resource are very closely related. Model creates migration, test and a model for all the created files. While the  resource command  does even more than model, adding a controller, views folder and resource routes. Scaffold one I did not know about it creates model, views,along with full create, destroy, update, read functions but you can't add much since it has so much structure. 




4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students 

This would be used to read. It can be used to show one thing. The controller method is show. Get can be used for other things like index, new, etc but it would have that route so without a route it can just be used for show. 

action: "POST"   location: /students       
This would be used to create a form. The controller method is create which takes information and adds it to the database.

action: "GET"    location: /students/new
This would be used to make a form which has information on a new student. The controller method is new.

action: "GET"    location: /students/2  
This would be used to show information on a student with the primary key of 2 in the database. The method is show because it is showing you information for student 2. 

action: "GET"    location: /students/2/edit    
This would be used to show information that would then be edited. In this case, you would edit information belonging to student with primary key 2 in the database. The method is edit. 

action: "PATCH"  location: /students/2 
This would be used to update information if you were needing to change multiple things on the student form you would use this command to change one thing use edit command. The method is update.     

action: "DELETE" location: /students/2  
This would be used to delete the entire form or file containing student with primary key 2. The method is destroy. The information for primary key 2 no longer exists in the database.    

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

I want to be able to make a list and input items
I want to be able to add  grocery items to the list
I want to be able to schedule appointments for my list
I want to be able to add my errands for the day
I want to be able to sync my calendar to the application
I want to be able to enter my location for appointments
I want to be able to enter the time for appointments in my local time zone
I want to be able to add people's email  information for appointments
As a user I can print my to do list
As a user I can update my appointments