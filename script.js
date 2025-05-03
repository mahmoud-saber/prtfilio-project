 document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var message = document.querySelector('#message').value;
  
    if (name == "" || email == "" || message == "") {
      alert('The empty fields');
    }
     else {
      alert("Thank you for contacting us"+name);
      this.reset();//empty fileds after sumbited
    }
    
  });