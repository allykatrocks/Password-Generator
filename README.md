# homework-password-generator
In this week's assignment, we were tasked with writing the JavaScript for a functioning password generator. We had to write code that would generate prompts, log the user's choices, and then create a random password based on those choices. We were provided with a pre-existing code that acted as a basis for us to build on; I kept a lot of it the same, only adding a rather large function where most of the action happens. To start, I added lots of new variables that contained arrays of all the different characters I wanted my users to have access to then began a series of if/else statements that created the prompts as well as the rules they were meant to follow. I started with the password length and tried to catch any user errors in the beginning. Here is what the final code for that segment looks like:
[JS Beginning of Code](./images/code.png)
Here you can see the list of new variables I created as well as the starting if/else statements for the password length.

Next, I had to assign meaning to the user's choices and had to make sure the code would log said choices. So once the user had chosen a length that passed all the requirements, they are prompted with choices for character selection. Again, I had to factor in user error so if the user chose "no" for all selections, they were alerted that action was required. I then created a new variable to store the user's selections and began a new series of if statements followed by a for loop that would randomly pick elements from the arrays at the top of the code and generate a password based of the user's selections. Lastly, since I decided to store the new password in an array, I added on the .join method to makes sure commas didn't show up in the final password. Here is the completed code for this section:
[JS End of Code](./images/bottom.png)

The live page can be found here: https://allykatrocks.github.io/homework-password-generator/


