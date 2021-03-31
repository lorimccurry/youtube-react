import { useGoogleLogin } from 'react-google-login';
import { useAuth } from '../context/auth-context';
import { authenticate } from '../utils/api-client';

export default function useAuthAction() {
  const user = useAuth();
  const { signIn } = useGoogleLogin({
    onSuccess: authenticate,
    clientId:
      '574624334344-0opaqk31ttnvudgv3c2a89hr2ulndft4.apps.googleusercontent.com',
  });

  function handleAuthAction(authAction, data) {
    if (user) {
      authAction(data);
    } else {
      signIn();
    }
  }

  return handleAuthAction;
}
