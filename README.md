# Introduction
Beesline is a website offering cosmetics, body and skin care products for customers all 
over the world.
we develop a clone for this website with some enhancements some of these enhancements 
were in the front-end by making the website more user-friendly and responsive and 
another enhancement was by adding extra features for the admin one of this features is 
visualizing useful information like number of orders, the status of the order in a 
dashboard to help admin in decision making.


# Tools & Technologies 
The client-side technologies used in our project is Angular Framework, HTML, CSS, 
TypeScript, Bootstrap.
The server-side technologies used in our project is Laravel Framework, PHP, MYSQL 
database.
The tools used in the project Visual studio code, Git & githup, Xampp server

# Steps of Installation
To clone the project you must follow the following steps:
1. Navigate to the main page of the repository.
2. Above the list of files, click Code button and copy the https link.
3. Go to your visual studio code editor then open the terminal and write this command 
git clone <repo link>.
4. Right click Front-end folder and choose open in integrated terminal.
5. Write command npm install.
6. Right click Back-end folder and choose open in integrated terminal.
7. Write composer install
8. Copy .env.example file to .env on the root folder. You can type copy .env.example 
.env if using command prompt Windows or cp .env.example .env if using terminal, 
Ubuntu
9. Open your .env file and change the database name to Beesline, username 
(DB_USERNAME) and password (DB_PASSWORD) field correspond to your 
configuration and add the following inside the .env MAIL_MAILER=smtp, 
MAIL_HOST=smtp.gmail.com, MAIL_PORT=465, MAIL_ENCRYPTION=ssl.
10. Run php artisan key:generate
11. Run php artisan migrate
12. Run php artisan serve and back to front-end terminal and run ng serve


# project demo
https://youtu.be/IvnhnzwaAIs
