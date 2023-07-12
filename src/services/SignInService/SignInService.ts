import { clientSignIn } from '../client';
import { ISignInResponseError, ISignInResponseSuccess, ISignInService } from './ISignInService';

class SignInService implements ISignInService {
  async signIn(
    user: string,
    password: string
  ): Promise<ISignInResponseSuccess | ISignInResponseError> {
    try {
      const response = await clientSignIn.post('/signIn', {
        user,
        password,
      });
      return response.data;
    } catch (err: any) {
      return err.response.data;
    }
  }
}

export { SignInService };
