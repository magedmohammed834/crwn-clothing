import SignUp from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import {AuthenticationContainer} from './authentication.styles.jsx';
const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUp />
    </AuthenticationContainer>
  );
};

export default Authentication;
