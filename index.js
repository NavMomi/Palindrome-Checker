
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


//
function fact(num){
    if(num===0){
            return 1;
        }else{
            return num*fact(num-1);

        }

}
        
  

  

let z=fact(7);
console.log(z);

