import * as constants from '../services/Constants';

export default class UserService {
    login = (user) =>
        fetch(constants.user_login_url, {
            body: JSON.stringify(user),
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(response => response.json());

    signUp = (user) =>
        fetch(constants.user_signup_url, {
            body: JSON.stringify(user),
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(response => response.json());

    updateUser = (user, userId) =>
        fetch(constants.user_findById + userId, {
            body: JSON.stringify(user),
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        }).then(response => response.json())

    getProfile = () =>
        fetch(constants.user_get_profile, {
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());

    findUserById = (userId) =>
        fetch(constants.user_findById + userId, {
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());

    logout = () =>
        fetch(constants.user_logout, {
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });

    followUser = (userId, followId) =>
        fetch(`${constants.HEROKU_BASE_URL}/users/` + userId +
              '/follow/' + followId, {
                  credentials: "include",
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  method: 'POST'
              }).then(response => response.json());

    unfollowUser = (userId, followId) =>
        fetch(`${constants.HEROKU_BASE_URL}/users/` + userId +
              '/unfollow/' + followId, {
                  credentials: "include",
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  method: 'POST'
              }).then(response => response.json());

    deleteFromWatchList = (userId, movieId) =>
        fetch(constants.user_findById + userId + '/unwatchlist/' + movieId, {
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(response => response.json())

    findReviewsByUserId = (userId) =>
        fetch(constants.user_findById + userId + '/reviews', {
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())

    search = (searchQuery) =>
        fetch(constants.user_search_url + searchQuery, {
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());

    deleteReview = (reviewId) =>
        fetch(constants.user_deleteReview + reviewId, {
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        })
    updateReview = (reviewId, reviewTitle, reviewBody) =>
        fetch(constants.user_updateReview + reviewId, {
            body: JSON.stringify({'body': reviewBody, 'title': reviewTitle}),
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        }).then(response => response.json())

}
