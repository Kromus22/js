//first task
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert(user.ref.name); // Каким будет результат?

//честно не смог дать ответа на этот вопрос.
//и отчасти оказался прав )) так как, оказывается, что будет undefined