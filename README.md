# Dash Web Redesign Model

UPDATES FROM 2022 

* At the time of coding this web app, my knowledge of good coding practices were limited. I had just finished an introductory CS course which taught only Java, and this was my only experience with programming. 
* I intend to refactor the code when I get a chance. Please be aware this is not how I would engineer the code today. 

RUNNING THE APP 

From the project directory, run
* `npm start`
* `go to http://localhost:1050` in Chrome or Firefox

If you have issues (or if you're running it for the first time), run `npm install` in the project directory and repeat the above steps.

INFO 

I took it upon myself to propose a redesign of Mr. Dam's pen-and-touch computing interface project called "Dash" and developed an improved working model in React from scratch. This proposal was also recognized by Mr. Dam who communicated to me about it extensively via email. You can view the details in my portfolio at http://hdalton.myportfolio.com.

HOW TO USE THIS DASH

* Using the sidebar buttons will generate nodes in random locations onto the canvas! 

* Creating Collections 
    * After you create a Collection note, you can use the buttons on the note to create more notes within it. After pressing each button, 
      you NEED to either MOVE or RESIZE the note to get the nested note to show up. This is a semi-bug that probably could have been fixed 
      if I had more time. 
    * You can create multiple collections within collections. All nested nodes (children) of a collection will appear in a grid format. 

* You can delete nodes by pressing the X button on the bottom left. 

* Creating Folders (Linking Notes)
    * You can create a new Folder by typing its name into the sidebar and pressing "Create". You can create up to 10 Folders. 
    * Use the + button on the top left of each note to add this note to a folder! 
    * If you've created any Folders, they will appear as options for you to add the note to. (Once you click the + button)

    * Once you've added a note to a Folder, a "View Folder Contents" button will appear that allows you to view the other notes in 
      this Folder. If you add multiple notes to one Folder, their "Folder Contents" menus will update. 
    * You can add up to 3 notes to one folder!
    * If you've opened a Folder Contents menu, click on either Note 1, Note 2, or Note 3 to view the first, second, or third note 
      that was added to the Folder. 
    * Clicking on Note 1, Note 2, or Note 3 in the Folder Contents menu will pull up this note and put it in the topmost, leftmost 
      position on the canvas to designate it. 

    * Viewing the Folder Contents of any note will allow you to access and visit the other nodes that were added to that Folder. 

    * IMPORTANT NOTE: If you add a note to a folder and then delete it, clicking on this note in another note's Folder Contents menu
    will not generate anything. This is also a semi-bug that I probably could have fixed if I had more time. 


