// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.





// first we need to set our vowel count to zero.
// second we do a const with the vowels as we don't want them to change
// we now start our for loop, if the character of the string is a vowel it will do a +1 to the count
function getCount(str){
    let vCount = 0;
    const vowels =['a', 'e', 'i', 'o', 'u']
    for(let char of str){
        if(vowels.includes(char)){
            vCount++
        }
    }
    return vCount;
}