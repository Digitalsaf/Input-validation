function addToList (name,phoneN,email){

// Name Validation
   if (name.value == "") {
        alert("Enter a name");
        name.focus();
     return false;
    }
    if (!/^[a-zA-Z ]*$/g.test(name.value)) {
        alert("Invalid characters");
        name.focus();
        return false;
    }
// Number Validation
    if (phoneN.value == "") {
        alert("Enter a Number");
        phoneN.focus();
     return false;
    }
    if (/\D/.test(phoneN.value)) {
        alert("Invalid characters");
        phoneN.focus();
        return false;
    }
    if (phoneN.value.length < 11) {
        alert("You're missing some numbers");
        phoneN.focus();
     return false;
    }
  // Email Validation
  if (email.value == "") {
        alert("Enter an Email");
        email.focus();
     return false;
    }
  if (!/^[a-zA-Z@.]*$/g.test(email.value)) {
        alert("Invalid characters");
        email.focus();
        return false;
    }

  let whole = document.getElementById("mad");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(name.value));
  whole.appendChild(li);

  let ul = document.createElement("ul");

  let two = document.createElement("li");
  two.appendChild(document.createTextNode(phoneN.value));

  let three = document.createElement("li");
  three.appendChild(document.createTextNode(email.value));

  ul.appendChild(two);
  ul.appendChild(three);

  li.appendChild(ul);

  let store = [];

  store.push(name.value,phoneN.value,email.value);

  console.log("These details got added to the list: " + store)

  return false;

}

