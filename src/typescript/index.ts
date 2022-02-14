// TypeScript é um superset de javascript, porém com mais recursos.
type User = {
  name: string;
  email: string;
  address: {
    city: string;
    state?: string;
  };
};

function showWelcomeMessage(user: User) {
  return `Welcome ${user.name}, 
  your e-mail is ${user.email}. 
  Your city is ${user.address.city} 
  and your state is ${user.address.state}`;
}

// Cidade - RF

const user = {
  name: "John",
  email: "john@example.com",
  address: {
    city: "New York",
    state: "NY",
  },
}

showWelcomeMessage(user);