let todoList = require("../todo");

const { all, markAsComplete, add } = todoList();

/* eslint-disable no-undef */
describe("Todo List Test Suite", () => {
  test("Should add a new todo", () => {
    expect(all.length).toEqual(0);
    add({
      title: "A test item",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toEqual(1);
  });

  test("Should mark a Todo as complete", () => {
    expect(all.length).toEqual(1);
    expect(all[0].completed).toEqual(false);
    markAsComplete(0);
    expect(all[0].completed).toEqual(true);
  });
});
