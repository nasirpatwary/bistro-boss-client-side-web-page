const person = {
    firstName: "Nasir", //properties
    lastName : "Patwary",
    id       : 5566,
    myDetails : function() {
        //this is not a variable. It is a keyword. You cannot change the value of this.
      return this.firstName + " " + this.lastName;
    }
  };
  //objectName.propertyName
  console.log(person.id);
  //objectName.propertyName
  console.log(person["firstName"])
  //objectName.methodName()
  console.log(person.myDetails)

  let x = 'joinal';
  let y = new String("joinal");
  console.log(x===y)


  