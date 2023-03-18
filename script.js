function palindrome(str){
    const string = str.toLowerCase();
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last characters are same
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
