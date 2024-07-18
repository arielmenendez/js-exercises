let users = [];

for (let i = 9999; i >= 0; i--) {
  users[i] = {
    id: i,
    name: Math.random().toString(),
  };
}

console.log(users);

const list = [];

for (let i = 0; i < 10000; i++) {
  list[i] = {
    id: 1,
    name: Math.random(),
    created_by: Math.floor(Math.random() * 10000),
  };
}

// console.time('using find');
// const withUser = list.map((element) => {
//   return {
//     ...element,
//     created_by_user: users.find((u) => u.id === element.created_by),
//   };
// });
// console.timeEnd('using find');

const indexedUsers = users.reduce((acc, el) => {
  acc[el.id] = el;
  return acc;
}, {});

console.time('using index');
const withUser = list.map((element) => {
  return {
    ...element,
    created_by_user: indexedUsers[element.created_by],
  };
});
console.timeEnd('using index');
