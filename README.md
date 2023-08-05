# WORDVEIL

Functionality Explained:

WordVeil is a Google Chrome extension that, as of this version, takes in a local Google Account-Key specific word list and replaces these selected words with a line of dashes "-----".
To edit the word list, users can click one of two buttons: Enter Words Here and Remove Word Here.

Using the Enter Words Here button, users can input multiple words of their choosing to be blocked by our extension (each word must be separated by a comma and spaces aren't allowed at this time).
Using the Remove Words Here Button, users can remove a valid word from the list one at a time as long as it is entered correctly.
Duplicate words are not accounted for, so users can add the same word if they'd like to as it doesn't influence how the program functions.

When a word is entered, users need not worry about case sensitivity, as we account for this in our extension.

In its current phase, we have a lot we plan to improve.
Some of these include:
-   Uploading this extension to the Google Chrome Store for more effcicient updates and manipulation
-   How we store words (perhaps another data structure like a hashmap to access the words more effectively)
-   Being able to REMOVE multiple words
-   How we block words (we plan on using HTML/CSS to add blur functionality as opposed to replacing the characters; perhaps both incase the blur is removed
-   Adding a Master login to the extension's word list
-   Having functionality to transfer words from one instance to another (a txt file for example)
-   And many more!

With functionality out of the way, here's how to properly install this client-side extension as of now:

WordViel will have to be setup locally as publishing a extension to google play store that has permission to use user browser storage and scripting can take weeks or even months for the google store employees to review in case of malware.

If reading this from text file and not seeing images check: [https://github.com/Mancki2/WordVeil](https://github.com/Mancki2/WordVeil)

HOW TO SETUP WordViel:

1. Visit chrome://extensions in Chrome (or any Chromium browser)

2. Ensure Develper mode toggle is activated:
   
![image](https://github.com/Luisbow123/WORDVEIL/assets/55300466/f340f35c-bd96-4b6b-879a-93bef54f55aa)



3.Click Load unpacked:

![image](https://github.com/Luisbow123/WORDVEIL/assets/55300466/98115757-8e5d-46a2-a8f4-5533d5e52ac6)





4. In pop-up window, select the extension folder > click Select Folder:
   
![image](https://github.com/Luisbow123/WORDVEIL/assets/55300466/3749a824-d458-4711-8453-88c3b784cf32)





5. That's it! WordViel Extension will now appear in extension list:
![image](https://github.com/Luisbow123/WORDVEIL/assets/55300466/2e35f2da-005e-4ba2-8d4c-5370293bcf84)


Happy Blurring!
