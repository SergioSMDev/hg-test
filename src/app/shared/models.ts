export interface News {
  title: string;
  body: string;
}

export interface Login {
  username: string;
  password: string;
}

export interface Profile {
  name: string;
  email?: string;
  position?: string;
  imgUrl?: string;
  description?: string;
}
