import { User } from './user_type';

export interface AuthProvider {
  user: User | null;
  addUser: (user: User) => void;
  login: (email: string, password: string) => Promise<any>;
  logout: () => void;
}
