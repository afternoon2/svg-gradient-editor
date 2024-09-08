import { getWorkerOutput } from "@/lib/chroma";
import { GradientWorkerInput } from "@/state/types";

onmessage = (event: MessageEvent<GradientWorkerInput>) => {
  try {
    const colors = getWorkerOutput(event.data);
    postMessage({
      id: event.data.id,
      colors,
    });
  } catch (err) {
    console.error(err);
  }
};
