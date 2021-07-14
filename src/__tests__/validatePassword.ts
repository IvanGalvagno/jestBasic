export default function validatePassword(password:string) {

   let validLength = password.length >= 8;
   let hasLetters = /[a-zA-Z]/g.test(password);
   let hasNumber = /[0-9]/g.test(password);
   return hasNumber && hasLetters && validLength
}
