export const isCurrentUserExists = ({ auth }) => (auth ? !!auth.currentUser : false);
export const getCurrentUser = ({ auth }) => (auth ? auth.currentUser : 'none');
