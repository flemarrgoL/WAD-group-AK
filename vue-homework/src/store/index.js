import { createStore } from "vuex";

export default createStore({
    state: {
        posts: [
            {
                id: 1,
                author: "@john_doe",
                date: "2024-10-04",
                content: "Loving the fall weather! 🍁 #AutumnVibes",
                image: "assets/autumn.png",
                likes: 0,
            },
            {
                id: 2,
                author: "@tech_guru",
                date: "2024-09-29",
                content: "Excited to announce my new project! Stay tuned for updates on this innovative app that will change the way we think about social networking. 🚀",
                likes: 0,
            },
            {
                id: 3,
                author: "@wanderlust_traveler",
                date: "2024-09-15",
                content: "Just got back from an unforgettable trip to the Swiss Alps. The scenery was breathtaking! 🏔️ #TravelGoals",
                image: "assets/alps.png",
                likes: 0,
            },
            {
                id: 4,
                author: "@fitness_fanatic",
                date: "2024-09-08",
                content: "Morning workout done! Feeling energized and ready to take on the day. 💪 #FitnessJourney",
                likes: 0,
            },
            {
                id: 5,
                author: "@foodie_jane",
                date: "2024-08-31",
                content: "Tried out this new Italian restaurant today. Their pasta is out of this world! 🍝 #FoodieFinds",
                image: "assets/italian.png",
                likes: 0,
            },
            {
                id: 6,
                author: "@nature_lover",
                date: "2024-10-10",
                content: "Just returned from a weekend hiking trip in the beautiful national park. The fresh air and scenery were just what I needed! 🌲🌄",
                image: "assets/autumn.png",
                likes: 0,
            },
            {
                id: 7,
                author: "@coder_cafe",
                date: "2024-10-08",
                content: "Had a breakthrough in my latest coding project! Nothing feels as satisfying as debugging a tough issue. 💻🔥",
                likes: 0,
            },
            {
                id: 8,
                author: "@artsy_anna",
                date: "2024-10-02",
                content: "Finished my new painting today! Inspired by the colors of autumn. 🎨🍂",
                image: "assets/alps.png",
                likes: 0,
            },
            {
                id: 9,
                author: "@bookworm123",
                date: "2024-09-30",
                content: "Finally finished reading that novel everyone’s been talking about. What a journey! 📚✨ Highly recommended to anyone who loves a good plot twist.",
                likes: 0,
            },
            {
                id: 10,
                author: "@fit_and_fab",
                date: "2024-09-28",
                content: "Outdoor workouts are the best! Ran 10k today with amazing weather. Feeling great! 🏃‍♀️💪",
                image: "assets/italian.png",
                likes: 0,

            }
        ],
    },
    mutations: {
        incrementLikes(state, postId) {
            const post = state.posts.find((post) => post.id === postId);
            if (post) {
                post.likes++;
            }
        },
        resetLikes(state) {
            state.posts.forEach((post) => {
                post.likes = 0;
            });
        },
    },
    getters: {
        allPosts(state) {
            return state.posts;
        },
    },
});

