import { bouncy } from "ldrs";
export const LoaderComponent = () => {
  bouncy.register();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <l-bouncy size="100" speed="2.5" color="white"></l-bouncy>
    </div>
  );
};