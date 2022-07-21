# Blink Chat App
<img width="1515" alt="image" src="https://user-images.githubusercontent.com/47919053/180273036-d6df9295-2f1f-4dfd-889c-fe3e9477858f.png">


## How to run

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run to start the app:

`yarn`

`yarn start`

## Requirments

Given the JSON data (in the assets folder):

- Parse the JSON in to memory, the entire application should run off in-memory state, how you structure this state is up to you. You are also free to use any state-management library/tool/technique to make the application work. The JSON consists of an Array of conversations, each containing an Array of messages.
- Render a sorted list of the conversations on the left of the screen (sorted by last_updated, newest at the top)
- When clicking on a conversation → Render a sorted list of messages on the right of the screen (sorted by last_updated, oldest at the top)
- Show a basic 'reply' section at the bottom with a text field and 'Send' button to add a new message to the conversation
- On typing a message in the textfield and clicking 'Send', the textfield should be cleared and the message should be added to the bottom of the list of messages along with the correct date
- For each message, show the date (formatted however you prefer) and the text of the message on a second line

## Wireframes

<img width="1664" alt="image" src="https://user-images.githubusercontent.com/47919053/180273542-8f94f2f5-c8bd-4cc1-a83e-430cd3af1fe1.png">

## Limitations
If I had more time, I would have:
- added some unit tests to for the specific components
- created an `Edit Message` functionality
- improved the styling significantly
