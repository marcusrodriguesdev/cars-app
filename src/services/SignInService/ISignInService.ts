export interface ISignInResponseSuccess {
  error: boolean;
  user: {
    id: number;
    name: string;
    token: string;
  };
}

export interface ISignInResponseError {
  error: boolean;
  message: string;
}

export interface ISignInService {
  signIn(email: string, password: string): Promise<ISignInResponseSuccess | ISignInResponseError>;
}
