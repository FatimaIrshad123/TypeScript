function isPalindrome(string1) {
  var string = string1.replaceAll(" ","");
  var str = string.split(",");
  
  var rever = str.reverse();
  if (string == rever){
      console.log('It is plandromic sequence');
  }
  else{
      console.log('It is not a palindromic sequence ');
  }
  }
  isPalindrome('1, 7,7,1');