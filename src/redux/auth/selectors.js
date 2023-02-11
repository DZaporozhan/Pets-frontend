export const getAuthError = ({ auth }) => auth.error;
export const isAuth = ({ auth }) => auth.isLoggedIn;
export const getUser = ({ auth }) => auth.user;
export const getToken = ({ auth }) => auth.token;
export const getIsLoading = ({ auth }) => auth.isAuthLoading;
export const getIsRefreshing = ({ auth }) => auth.isRefreshing;
export const getId = ({ auth }) => auth.user._id;
