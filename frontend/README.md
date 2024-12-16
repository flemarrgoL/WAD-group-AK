# WAD-group-AK
Homework group project for Web App Development course. Our objective is to learn the basics of web application development and the current/modern technologies involved. We'll try to build a multi-tier web application that utilizes XML technology and server-side web development frameworks.



## Commands for project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### SQL to add some posts to the DB (insert following query into pgadmin using "query tool")
```
INSERT INTO posts (id, author, date, content, image, likes) VALUES
(1, '@john_doe', '2024-10-04', 'Loving the fall weather! 🍁 #AutumnVibes', 'assets/autumn.png', 0),
(2, '@tech_guru', '2024-09-29', 'Excited to announce my new project! Stay tuned for updates on this innovative app that will change the way we think about social networking. 🚀', NULL, 0),
(3, '@wanderlust_traveler', '2024-09-15', 'Just got back from an unforgettable trip to the Swiss Alps. The scenery was breathtaking! 🏔️ #TravelGoals', 'assets/alps.png', 0),
(4, '@fitness_fanatic', '2024-09-08', 'Morning workout done! Feeling energized and ready to take on the day. 💪 #FitnessJourney', NULL, 0),
(5, '@foodie_jane', '2024-08-31', 'Tried out this new Italian restaurant today. Their pasta is out of this world! 🍝 #FoodieFinds', 'assets/italian.png', 0),
(6, '@nature_lover', '2024-10-10', 'Just returned from a weekend hiking trip in the beautiful national park. The fresh air and scenery were just what I needed! 🌲🌄', 'assets/autumn.png', 0),
(7, '@coder_cafe', '2024-10-08', 'Had a breakthrough in my latest coding project! Nothing feels as satisfying as debugging a tough issue. 💻🔥', NULL, 0),
(8, '@artsy_anna', '2024-10-02', 'Finished my new painting today! Inspired by the colors of autumn. 🎨🍂', 'assets/alps.png', 0),
(9, '@bookworm123', '2024-09-30', 'Finally finished reading that novel everyone’s been talking about. What a journey! 📚✨ Highly recommended to anyone who loves a good plot twist.', NULL, 0),
(10, '@fit_and_fab', '2024-09-28', 'Outdoor workouts are the best! Ran 10k today with amazing weather. Feeling great! 🏃‍♀️💪', 'assets/italian.png', 0);
```