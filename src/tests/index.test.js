import{people} from "../index.js"

test("Test Success",()=>{
    expect(people()).toBe("PEOPLEEEEEE")
})

test("Test Object",()=>{
    const obj = {oi: ""}
    obj.oi = "boo"
    expect(obj).toEqual({oi:"boo"})
})
test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).not.toEqual("bombaclat");
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});