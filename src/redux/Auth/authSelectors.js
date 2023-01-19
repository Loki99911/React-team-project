// ----------------- TOKENS -------------
export const getAccessToken = state => state.auth.accessToken;
export const getRefreshToken = state => state.auth.refreshToken;
export const getSid = state => state.auth.sid;

// ---------------- USER INFO -------------
export const getEmail = state => state.auth.userData.email;

//  --------------- ADDITIONAL ------------
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getIsUserFetching = state => state.auth.isUserFetching;
