# family-feud

Sample Family Feud project created in 3 days for my English class. Yes, English class.

## How to Play

Navigate to the website's hosted location. There, you have the option of either logging in as a player, or as an admin.

Admins should select the "Login as Admin" option on the login page, and then input the password, which should match the one given specified in the `config.env` file in the family-feud-backend Express app.

Players can input a username, and then login, where they will be confronted with a red button. Pressing the button (given that nobody else has pressed the button within the last 5 seconds) will send a message to the admin with your username, displaying your username on the admin's screen.

Pressing the button within 5 seconds of another user pressing it will not result in a popup on the admin screen. This is done to prevent users who clicked later from overriding users who clicked earlier.

After 5 seconds, the button is available to press again.

The project uses cookie authentication, so don't worry about refreshing the page. You will automatically be redirected back to the admin / play page and your username will be preserved.

## Building the Project

1. Clone this project:
```
git clone https://github.com/kevinMEH/family-feud
```
2. Install all dependencies:
```
npm install
```
3. Setup:
   - You may optionally go to `src/Data.jsx` and then change the API endpoints to whatever you desire. By default, the API endpoint is at http://localhost:3001.
4. Start a development server with Vite:
```
npm run dev
```
5. Congratulations! View your project at http://localhost:3000.
