const employee = {};

function updateEmployeeWithKeyAndValue(employees, key, value) {
  return Object.assign({}, employees, {[key]: value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;

  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const NEW_EMPLOYEE = Object.assign({}, employee);
  delete NEW_EMPLOYEE[key];
  return NEW_EMPLOYEE;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  Object.assign({}, employee);
  delete employee[key];
  return employee;
}