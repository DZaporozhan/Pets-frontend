export const selectAuthError = ({ auth }) => auth.error;
export const selectIsAuth = ({ auth }) => auth.isLoggedIn;
export const selectUser = ({ auth }) => auth.user;
export const selectToken = ({ auth }) => auth.token;
export const selectIsLoading = ({ auth }) => auth.isAuthLoading;
export const selectIsRefreshing = ({ auth }) => auth.isRefreshing;
export const selectId = ({ auth }) => auth.user._id;
