module.exports = {
    intToBoolean,
    booleanToint,
    partyToBody,
    actionToBody,
  };
  
  function intToBoolean(int) {
    return int === 1 ? true : false;
  }
  
  function booleanToint(bool) {
    return bool === true ? 1 : 0;
  }
  
  function partyToBody(party) {
    const result = {
      ...party,
      completed: intToBoolean(party.completed),
    };
  
    if (party.shopping_list) {
      result.shopping_list = party.shopping_list.map(shopping_list => ({
        ...shopping_list,
        purchased: intToBoolean(shopping_list.purchased),
      }));
    }

    if (party.todo_list) {
        result.todo_list = party.todo_list.map(todo_list => ({
          ...todo_list,
          completed: intToBoolean(todo_list.completed),
        }));
      }
  
    return result;
  }
  
  function actionToBody(shopping_list) {
    return {
      ...shopping_list,
      purchased: intToBoolean(shopping_list.purchased),
    };
  }
  

  function projectToBody(todo_list) {
    return {
      ...todo_list,
      completed: intToBoolean(todo_list.completed),
    };
  }