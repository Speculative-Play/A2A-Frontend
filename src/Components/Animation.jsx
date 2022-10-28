import { useLottie } from "lottie-react";

export default Animation = (props) => {
  const style = {
    height: 320,
    width: 320,
    borderRadius: 10,
    color: "white",
    borderWidth: 4,
    borderStyle: "solid",
    borderColor: "white",
    backgroundColor: "transparent",
  };
  const animationOptions = {
    animationData: props.animationFile,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(animationOptions, style);

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      {View}
    </div>
  );
};
