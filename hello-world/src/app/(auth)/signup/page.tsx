export default async function SignOut() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Intentional Delay...");
    }, 500);
  });
  return <h1>Sign-up function</h1>;
}
