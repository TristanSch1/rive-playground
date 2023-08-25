import { useRive } from "@rive-app/react-canvas";

export const MuscleBrain = () => {
  const { rive, RiveComponent } = useRive({
    src: "/muscle_brain.riv",
    autoplay: true,
    stateMachines: "State Machine 1",
    artboard: "muscle brain",
  });

  return (
    <div className={"rive-container"}>
      <RiveComponent />
    </div>
  );
};
