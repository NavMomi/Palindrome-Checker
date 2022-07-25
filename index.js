
//A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

function isPalindrome(str){
    let s= str.split("");
    let r= s.reverse();
    let z= r.join("");
    if(str==z){
        return true;
    }
    else{
        return false;
    }
}

//let x=isPalindrome("dad");
let x=isPalindrome("Navjot");
console.log(x);
