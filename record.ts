/*interface User2 {
    id: string;
    name: string;
  }
  
  type Users1 = { [key: string]: User2 };
  
  const users: Users1 = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
  };
*/

// Using Record
interface User2 {
    id: string;
    name: string;
  }
  
  type Users1 = Record<string, User2>;
  
  const users: Users1 = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
  };
  
  console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }