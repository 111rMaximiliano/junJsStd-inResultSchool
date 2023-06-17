const users = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

const onlineUsers = users.filter((users) => {
  users.status === "online";
  return users.status === "online";
});
console.log(onlineUsers);

alert(
  `Сейчас в онлайн следующие пользователи: ${onlineUsers[0].username}, ${onlineUsers[1].username} `
);
