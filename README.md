<<<<<<< HEAD
-------------------------------------------
BEGINNER'S GUIDE
-------------------------------------------
# Please follow the above Steps in order:

## 1. Downloading the Project to your workspace

- clone it to your repository

Windows:

```bash
git clone https://github.com/Mallinath-cs/Portfolio.git
```

Linux and macOS:

```bash
sudo git clone https://github.com/codewithsadee/vcard-personal-portfolio.git
```
cd Portfolio

- download it directly and open the folder through VS Code editor

## 2. Setup (Just run the following commands in the vs code terminal)

- npm install

To view website on both your pc and mobile you have to have both devices connected to the same wifi network and run the following command in terminal

- npm run dev -- --host

It will create two links local and network, open the local link to view on desktop and the network link on your phone to view the website on mobile


## 3. Things you need to add or change before using it ,as i have added placeholders for each of the items:
(Note: 
    1. you can navigate by using the search in vs code editor or by pressing ctrl + shift + f
    2. Just copy and paste the names (placeholder1, placeholder2)
)

## /*Navbar*/
- Your name "placeholder1"

## /*Hero Section*/
- Your name "placeholder2"
(The below details are one below each other to the placeholder2 until placeholder5)
- Your job role "placeholder3" 
- Your job details "placeholder4" & "placeholder5"
- Add your GitHub link "palceholder6"
- Add your Linkedin link "placeholder7"
- Add your email like this:
    - replace "placeholder8" with your email
    - replace "placeholder9" which is the subject shown to people when someone clicks on email icon, Add something like Portfolio or change it to your needs.
    - replace "placeholder10" which is the continuation of subject.
    (Note: %20 is just a code to add space inbetween the words)
    - replace "placeholder11 & placeholder12" with your body you want to to show to the people
    Preview it on your desktop or mobile and change it accordingly
- Add your resume like this:
    - First paste your resume file in assets folder
    - Then change the import statement at the top of the hero.jsx file with this import your_file_name from '../../assets/your_file_name.file_type'
        where - your_file_name is your file name
              - file_type (pdf,word etc..)
    - replace "placeholder13" with href = {your_file_name}
    - replace "placeholder14" with what you want the file name of resume to be when someone downloads it (something like yourname_resume)

## /*About Section*/
- replace "placeholder15" with things about yourself. In the about me paragraph i have hidden the link so add things about yourself before and after the code without deleting the following
{' '}..code...{' '}
- Now if you want to add technical skills which are not from the frontend technologies(i.e reactjs, javascript etc..) you have a bit of work to do.
    - Firstly open skills-data.js which is within the src/components/skills-data.js
    - You can add images/gifs of your tech skills within src/assests/skills-icon folder
    -Then import the images/gifs to the skills-data.js by using the the following code:
    import your_file_name from '../assets/skills-icon/your_file_name.file_type'
        where - your_file_name is your file name
                - file_type (png,gif etc..)
    -now to show the skills on the website do this:
        within the skills-data.js file we have an array where i have assigned the name,image, description etc..
        (Note: The order in which you add items matter)
        add the following in whatever order you want to display
        ex:
        name: "Python",
        image: here its your_file_name of the corresponding name file
        description: add description within 2 words

        (Note: The code is designed in a way that for 8 number of skills are aligned in a 2 row, 4 column matrix on desktops and 4 rows, 2 columns in a mobile view. Please do use AI tools like ChatGpt if you want it to align perfectly to your needs)
    - you might be wondering what is rotate and isUsed1, isUsed2, isUsed3 is used for?
    - you will learn about isUsed1, isUsed2, isUsed3 in the next section whereas the rotate is used to rotate the static png image of my react icon because i couldnt find any free ones which made the react icon rotate by default so i had to rotate it using css, you can use this code to rotate the static png to rotate too


## /*Projects section*/

- Before starting the code is designed in such a way that anything more than 3 projects added it will look like the project is out of bounds on the y-axis so be careful and 3 projects.

- add your project's demo image within the public folder and replace the "placeholder16 , placeholder17, placeholder18" with this: ./your_file_name.filetype

- add your project's name within the following placeholder's in the order you have added images
"placeholder19 , placeholder20 , placeholder21" with your project name

- add your project's description within the following placeholder's in the order you have added the images and project's name
"placeholder22, placeholder23, placeholder24" with your project's description, also keep it within few words and 3 bullet points to make it look good.

- if you want to use the dino animation just like my portfolio stating "Exciting new projects are on the way…" just remove the placeholder25 section

{/* placeholder25 from here*/} <-remove this

...code...  <-remove this

{/* Till here */} <- remove this


- and remove comments from "placeholder26". 

{/*placeholder26  <-remove this

....code....    <-  **don't remove this**

*/}  <-remove this


- also to show what skills you have used for each project do the following:
    In previous section i mentioned regarding why there's isUsed1, isUsed2, isUsed3 in skills-data.js so i have reused that file to show the skills in this section , the naming to show the same png's or gifs in the cards is following: isUsed1 means in first card, isUsed2 means in second card, isUsed3 means in third card. you can set each skill with isUsed1, isUsed2, isUsed3 to true to the corresponding cards you want to show the skills used.

- add github links to each of the projects in the same order as before for the following 
placeholder27, placeholder28, placeholder29


## /*Contact*/

- to make contact form send the details over to your mail, you need to have web3form's access key
- to get the access key goto this website https://web3forms.com/
- simply click on Create your access key and enter your mail id to which you want the contact form submissions
- you will recieve an access key to your mail, copy that and paste it in the "placeholder30" with the following code

- there's also a mini easter game in this section in which toggling the button will make you to find the hidden item within the webpage. The item is a link, to change what you want other to see when clicking that link, goto "placeholder31" and add as many links as you want

## /*Footer*/
- replace "placeholder32" with your Discord profile link
- replace "placeholder33" with your X link
- repalce "placeholder34" with your Instagram link
- replace "placeholder35" with your Facebook link
- replace "placeholder36" with your Name


All set your website's ready 😊
=======
# Portfolio
>>>>>>> 253f092d63c4d079fbcf998f88ccd36e176e053a
