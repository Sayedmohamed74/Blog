export const logIn = (token:string,maxAge:string) => {
document.cookie = `token=${token}; path=/; expires=${maxAge}`;
}
export const logOut = () => {
document.cookie = `token=; path=/; expires=`;
}