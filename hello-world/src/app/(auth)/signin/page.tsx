export default async function SignIn() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Intentional Delay...");
    }, 500);
  });
  return <h1>Sign-In function</h1>;
}
