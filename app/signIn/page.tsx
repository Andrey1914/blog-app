import { GoogleButton } from "@/components/GoogleButton";
import { SignInForm } from "@/components/SignInForm";

export default async function Signin() {
  return (
    <div className="stack">
      <h1>Sign In Page</h1>
      <SignInForm />
      <p>or</p>
      <GoogleButton />
    </div>
  );
}
