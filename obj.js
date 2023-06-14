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

const onlineUsers = [
  { username: "David", status: "online", lastActivity: 10 },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];
console.log(onlineUsers);
const usersOnlineNames = "David, Bob";

alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);
