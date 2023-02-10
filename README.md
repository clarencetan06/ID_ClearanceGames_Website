# Project Name: ClearanceGames

## Teammates: Clarence and Kai Quan

## Parts done: Clarence: games, homepage, highscore, Lottie, socials

## Kaiquan: API, feedback, login and register, homepage + highscore as well, TicTacToe

Our website is called Clearance Games and its a website that plays host to a variety of games, from single-player and multiplayer, to games that train your hand eye coordination and thinking games. In other words, its a gaming website aimed at children and people who enjoy playing games. Some of the games that this website has includes TicTacToe which is multiplayer, Brain Teaser which stimulates your brain, and even Flappy Ball, which is a game thats similar to Flappy Bird. Clearance Games also has a login and signup system, in which one would have to sign up to record their highscores of each game. This way, users can compare scores with their friends and see who's the best among them all. Some other excellent features of this mobile friendly website include the unique navigation bar, the carefully crafted colour combinations, a highscore page where users can see their highscores for each game, and even a feedback page where our website's users can feedback about our website and even clarify any doubts they have!

## Design Process:

This website is designed for children, teenagers, young adults, and anyone who is into games. We think that our audience would want to go to a website where they can relax and have fun while playing games, feel at home, and even compete with each other. Thus, this inspired the designing of our website. One such example is the background of some of the pages, one of which is the homepage. As you can see, the homepage is related to gaming. Our games will also provide our target audience with a way to relieve their stress and escape the modern world as they dive into the variety of games our website holds. Furthermore, the multiplayer games can provide our audience with a way to face each other, thus helping our target audience achieve their goal of having a website where they can feel at home.

## Here are some User Stories:

- As a young child, i would want to play some exciting games like Flappy Ball, that way I can be preoccupied for the next hour.
- As a working adult who likes games, i would want to escape my day to day life and relieve some stress from working morning till night, hence i would want to play some games on Clearance Games.
- As a teenager with a twin brother, i want to settle a debate between me and him about who is the best at Tic Tac Toe, hence i will go to Clearance Games website and play the game called tictactoe as it is a multiplayer game and it keeps track of score. This way my brother and i can determine who is better at TicTacToe.

## Adobe XD share link:(Wireframe is very basic layout of the website)

https://xd.adobe.com/view/051dc2b3-2b8d-4ea7-99ad-97e5925335ba-504e/

# Features:

## Existing Features:

1. Navigation Bar: allows users to easily move around all the different pages within the website with ease, so as to make the website more user friendly and improve our user's experience.
2. Scroll down button in homepage: allows users to choose which category they want of games: single player and multiplayer. once the user clicks on the button, the website will automatically scroll down to the part of the website that talks more about that category of games. this also makes the website more user friendly and also imrpoves our user's experience by removing the need to scroll all the way manually.
3. search bar in homepage: allows users to search for the title of the games that they want, so as to once again improve overall user experience
4. dropdown feature in navbar: when hovered over, drops down more, for eg. games drops down to reveal all the games. this makes the website look more aesthetically pleasing as the user would not have to see all the information about the games unless they want to
5. responsiveness for all our pages: users can swap to mobile and they wont face any issues, thus improving user experience and certifying our website mobile friendly
6. brief description of game and pictures of games in homepage: users can refer to it to find out more about the game, thus aiding our users when they're trying to choose which game they want to play. furthermore, in that feature there is also a button where when clicked on, it'll take them to the game or the game lobby if the game has a game lobby. this improves user experience.
7. game lobby: has button that takes user to the game itself, game will open in another tab so that when users close the game they are still in the website and can go to any other page they want. For example, if the user wants to check highscore but still stay in the game page, they can just change to the tab and locate the highscore page from there. this drastically improves user experience.
8. alerts for some of the games: shows the user their score and gives the user a chance to rest or to take breaks between games.
9. objective, controls and score description for games in game page: allows the player to know how the game works and thus clears any confusion the player may have when playing a new game. showing the score will also motivate the player to focus up if they want to push even further and get a better score.
10. highscore page: saves the players highest score for each game, allowing users to compare between each other, improving our users experience especially if they are the competitive type
11. socials(doesnt actually show the website's socials as we do not have one): shows the users our website's socials so that they can find out more about our website or view content related to Clearance Games.
12. Feedback page: gives users a platform to feedback about our website, be it positive or negative feedback. this even includes an email so that we can reply back to the user regarding the feedback. this way our users will know that we are committed to the website and are willing to take feedback to improve on our website.
13. frequently asked questions in feedback page: clears common doubts that users may have so that they will not have to go through the hassle of filling in the feedback form, hence improving user feedback.
14. login and sign up system: allows users to create or login to an existing account, this way scores can be kept for each user and that way they can also have highscores if they have played the game.
15. Lottie page when clicking on socials: shows user a loading page when they click on any of the social links, improves user experience

## Features left to implement:

1. more games: create more games so as to increase the variety of games that we have, this way we can touch into a wider target audience
2. leaderboard feature: displays the top 3 scores for each game and also display the username of these top 3 scorers, so as to give other players a target they can try to hit

## Technologies used:

1. the basic languages, html, CSS, JS
2. Firebase: similar to restDB, basically API. used to store details like username, password, score for games that can record scores
3. jquery, json and bootstrap
4. Lottie: used to improve user experience, make website more visually appealing

## Testing:

Most scenarios have been tested and can be seen in the video demonstration. However, here are some common scenarios we feel our users may run into:

1. Feedback form:
   Go to the "Feedback" page
   Try to submit the empty form and verify that an error message about the required fields appears
   Try to submit the form with an invalid email address and verify that a relevant error message appears
   Try to submit the form with all inputs valid and verify that a success message appears.
2. Login:
   Go to the "Login" page
   Try to login with wrong username and or password
   Verify that alert message appears
   Try to login with correct details and verify that login is correct by checking for username in homepage in navbar
3. Create account:
   Go to "Create Account" page
   Try to create an account with same username as a current existing account
   Verify that alert message appears
   Try to create an account with different username and password
   Try to login using that same name and password
   Verify that login is correct by checking for username in homepage in navbar

The project is mobile friendly for all the pages and is also friendly for different web browser size. Some of the pages are shown with different web browser size in the video. For example, when the browser size changes, the navbar will also change and when the size becomes small enough, the navbar will change to become jus three lines on the right and the logo on the left. When the three lines are clicked on, it'll open up the navigation bar, thus making our website more appealing.
Multiple bugs were discovered upon developing the website. However, all could be fixed as they were most of the time either errors on our side or we simply forgot to add more attributes to prevent the bug. There was one interesting bug, which occured for 2 of our games, Stack Tower and Fall Ball. The error was that the original code involved location.reload() which reloads the page once the timer ran out. However when testing our website, we found out that this affects saving the score and didnt allow our code to save the score to Firebase. But, we dissolved a plan and decided to use a restart button that does location.reload() when clicked on, thus allowing our code to save the game's score.

## Credits:

## Content:

NIL

## Media:

https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fgianglht2132003%2F&psig=AOvVaw1_8FLx6YOEByNCnty3TWoD&ust=1676125500483000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLC955mUi_0CFQAAAAAdAAAAABAE
https://www.pinterest.com/pin/54324739226640180/
https://www.freepik.com/premium-photo/old-vintage-black-brick-wall-background-with-gradient-light-surface_27684435.htm
https://psmag.com/economics/flappy-bird-candy-crush-still-making-much-money-75048
https://sk.pinterest.com/pin/422916221235804193/?amp_client_id=CLIENT_ID%28_%29&mweb_unauth_id=%7B%7Bdefault.session%7D%7D&simplified=true
https://sketchfab.com/3d-models/chrome-dino-7fd9ad53379c4a59af4ae241c6e7e786
https://www.google.com/search?tbs=sbi:AMhZZivG37A12hij0GshlbyrXvKH9u94B860O-L13UlzZtINwAlHvZ-LLuBm-037gSU0FE4qqHKvOV9coKJLUEPdCMI-dttHnsLY6CIsgQhLq9Bi3Evd6cj7yCpv7YBdhqv_1LfdWhs8fOIaThFU15qnFwqygqxKjpA
https://github.com/topics/chrome-dino-game?l=c%23
https://www.freepik.com/premium-vector/abstract-red-black-futuristic-gaming-background-livestream-panel_20793976.htm
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapersden.com%2Ftiny-tina-s-wonderlands-gaming-background-wallpaper%2F7680x4120%2F&psig=AOvVaw0eU1NwD9WDcQGBHmi366vk&ust=1676125811458000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOiKjq6Vi_0CFQAAAAAdAAAAABAE
https://dribbble.com/shots/15259180-PlayStation-Gaming-Background
https://stock.adobe.com/sg/search?k=gamer+background
https://www.istockphoto.com/vector/retro-neon-background-with-80s-styled-laser-grid-and-stars-gm1143081971-306849100
https://www.pinterest.com/pin/349029039886710036/
https://pixabay.com/photos/wall-brick-wall-red-brick-wall-3058752/
https://www.bluestacks.com/apps/arcade/stack-on-pc.html
https://www.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_18597221.htm
https://www.mobygames.com/game/sky-children-of-the-light
https://www.bloomberg.com/news/articles/2014-05-23/one-year-of-flappy-bird-how-a-little-game-from-vietnam-became-a-fleeting-global-sensation
https://www.edtechdigest.com/2017/07/06/cool-tool-kahoot/
https://www.istockphoto.com/photo/basketballs-rain-gm179309089-5553800
https://en.wikipedia.org/wiki/File:Purplecom.jpg
https://in.pinterest.com/pin/603623156286095923/
https://cutewallpaper.org/22/chrome-dino-wallpapers/view-page-22.html
https://www.digivid360.com/blog/video-production/how-to-create-videos-remotely/attachment/futuristic-sci-fi-concrete-room-with-glowing-neon-virtual-reality-portal-computer-video-games-vibrant-colors-laser-energy-source-blue-neon-lights/

## Acknowledgements:

1. We recieved inspiration from https://www.y8.com/ .
2. We also recieved inspiration from Kai Quan's previous assignment for our footer.
3. We also recieved inspiration from https://www.youtube.com/@KnifeCircus who's tutorials guided us when doing our games.

## Link to GitHub Page:

https://github.com/clarencetan06/ID_ClearanceGames_Website

## Video link:

https://drive.google.com/file/d/1uIUocwmFYjysCD9ep3MFvWZYgGlEVdVg/view?usp=sharing

## Slides werent used for the video.
