import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { artboardPresentAtom } from "@/state/artboard.state";
import { gradientsLengthAtom } from "@/state/gradient.store";
import { Button } from "@/components/ui/button";
import { ImageDown } from "lucide-react";
import { useAtomValue } from "jotai";
import { FC } from "react";

export const SVG_QUALIFIED_NAME = "svg";
export const SVG_PUBLIC_ID = "-//W3C//DTD SVG 1.1//EN";
export const SVG_SYSTEM_ID = "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd";
export const SVG_NAMESPACE = "http://www.w3.org/2000/svg";

const getURIComponentString = (el: HTMLElement): string => {
  const doctype = document.implementation.createDocumentType(
    SVG_QUALIFIED_NAME,
    SVG_PUBLIC_ID,
    SVG_SYSTEM_ID,
  );
  const doc = document.implementation.createDocument(
    SVG_NAMESPACE,
    SVG_QUALIFIED_NAME,
    doctype,
  );
  doc.replaceChild(el.cloneNode(true), doc.documentElement);
  const svgData = new XMLSerializer().serializeToString(doc);
  return encodeURIComponent(svgData.replace(/></g, ">\n\r<"));
};

export const download = (name: string, svg: HTMLElement) => {
  const uriComponentString = getURIComponentString(svg);
  const a = document.createElement("a");
  a.href = `data:image/svg+xml; charset=utf-8, ${uriComponentString}`;
  a.download = `${name}.svg`;
  a.innerHTML = "click";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

const DownloadSection: FC = () => {
  const svgPresent = useAtomValue(artboardPresentAtom);
  const gradientsLength = useAtomValue(gradientsLengthAtom);

  return (
    <Dialog>
      <DialogTrigger>
        <ImageDown className="w-3 h-3" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Download SVG</DialogTitle>
          <DialogDescription>
            {gradientsLength > 0
              ? "Download your composition as SVG file"
              : "Create gradients to download SVG file"}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              disabled={!svgPresent || gradientsLength === 0}
              variant="default"
              size="sm"
              onClick={() => {
                download(
                  "gradient",
                  document.getElementById("artboard") as HTMLElement,
                );
              }}
            >
              <span className="mr-2">Download</span>
              <ImageDown className="w-3 h-3" />
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadSection;
