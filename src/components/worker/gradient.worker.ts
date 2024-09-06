import { getWorkerOutput } from "@/lib/chroma";
import { GradientWorkerInput } from "@/state/types";

onmessage = (event: MessageEvent<{ input: GradientWorkerInput }>) => {
  try {
    const colors = getWorkerOutput(event.data.input);
    postMessage({
      id: event.data.input.id,
      colors,
    });
  } catch (err) {
    console.error(err);
  }
};
