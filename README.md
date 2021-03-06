# Node Task Manager

This project was created for a Udemy tutorial titled [The Complete Node.js Developer Course](https://www.udemy.com/the-complete-nodejs-developer-course-2/).

* To connect to the local DB, use `mongodb/bin/mongod --dbpath=mongodb-data` from the **iTerm2** terminal.
* Run `npm run dev` to start the development server.

**NOTE (09/22/2019)**: I'm having trouble uploading avatar images to the database. Refer back to [this video](https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/lecture/13729388#content).
* **IDEA**: Re-try uploading avatar images when I am not logged into the STCC server. I've had some trouble with their firewall.

---

#### **NOTE TO SELF**: This Udemy project is entirely about the back-end, so if I want a front-end UI I need to create it myself. Revisit the [Weather App repo](https://github.com/pulamusic/weather-web-server) I did for this course for ideas on how to create a front end.

### **TO-DO**
- [x] Create `/public` and `/templates` directories for front-end code.
- [x] Add [Handlebars](https://www.npmjs.com/package/hbs) dependency so I can create HTML templates.
- [x] Add [Nodemon](https://www.npmjs.com/package/nodemon) as a dev-dependency.
- [x] Create HTML &amp; CSS for front-end.
- [ ] Make sure the `/routers` files link to front-end pages.
- [ ] Re-watch the weather app videos on preparing the code for deployment to [Heroku](https://dashboard.heroku.com/auth/heroku/callback?code=bd586c82-5905-4530-9038-a6400eb40226).
