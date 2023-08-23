import { useRive } from "@rive-app/react-canvas";

export const Ball = () => {
  const { rive, RiveComponent } = useRive({
    src: "/ball_bounce.riv",
    autoplay: true,
    stateMachines: "State Machine 1",
    artboard: "Ball bounce",
  });

  return (
    <div className={"rive-container"}>
      <RiveComponent />
    </div>
  );
};
