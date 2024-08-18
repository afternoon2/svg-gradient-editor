import { match } from "ts-pattern";

export type PageState =
  | { name: "idle" }
  | { name: "save_dialog"; data: { presetName: string } }
  | { name: "svg_dialog"; data: { presetName: string; svgString: string } };

export type PageAction =
  | { type: "OPEN_SAVE_DIALOG" }
  | { type: "CLOSE_SAVE_DIALOG" }
  | { type: "OPEN_SVG_DIALOG" }
  | { type: "CLOSE_SVG_DIALOG" };

export const reducer = (state: PageState, action: PageAction): PageState =>
  match<[PageState, PageAction]>([state, action])
    .with(
      [{ name: "idle" }, { type: "OPEN_SAVE_DIALOG" }],
      (): PageState => ({
        name: "save_dialog",
        data: {
          presetName: "",
        },
      })
    )
    .otherwise(() => state);
