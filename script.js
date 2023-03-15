// complete the given function
function isPalindrome(s) {
  // Convert to lowercase and remove non-alphanumeric characters
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Compare with reversed string
  return s === s.split('').reverse().join('');
}
