import { v4 as uuid } from "uuid";

export const articles = [
    {
      id: uuid(),
      item: "Item1",
      quality: 5,
    },
    {
      id: uuid(),
      item: "Item2",
      quality: 15,
    },
    {
      id: uuid(),
      item: "Item3",
      quality: 3,
    },
    {
      id: uuid(),
      item: "Item4",
      quality: 4,
    },
  ];
  
  export const users = [
    {
      id: uuid(),
      name: "John",
      email: "john@example.com",
      role: {
        name: "admin",
      },
    },
    {
      id: uuid(),
      name: "Juan",
      email: "Juan@example.com",
      role: {
        name: "dev",
      },
    },
  
    {
      id: uuid(),
      name: "pepe",
      email: "pepe@example.com",
      role: {
        name: "user",
      },
    },
  ];