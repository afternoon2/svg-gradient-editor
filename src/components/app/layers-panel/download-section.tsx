import { Button } from "@/components/ui/button";
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
import { ImageDown } from "lucide-react";
import { nanoid } from "nanoid";
import { FC } from "react";

export const SVG_QUALIFIED_NAME = "svg";
export const SVG_PUBLIC_ID = "-//W3C//DTD SVG 1.1//EN";
export const SVG_SYSTEM_ID = "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd";
export const SVG_NAMESPACE = "http://www.w3.org/2000/svg";

const getURIComponentString = (el: HTMLElement): string => {
  const doctype = document.implementation.createDocumentType(
    SVG_QUALIFIED_NAME,
    SVG_PUBLIC_ID,
    SVG_SYSTEM_ID
  );
  const doc = document.implementation.createDocument(
    SVG_NAMESPACE,
    SVG_QUALIFIED_NAME,
    doctype
  );
  doc.replaceChild(el, doc.documentElement);
  const svgData = new XMLSerializer().serializeToString(doc);
  return encodeURIComponent(svgData.replace(/></g, ">\n\r<"));
};

export const download = (name: string, svg: HTMLElement) => {
  const uriComponentString = getURIComponentString(svg);
  const a = document.createElement("a");
  a.href = `data:image/svg+xml; charset=utf-8, ${uriComponentString}`;
  a.download = `${name}_${nanoid()}`;
  a.innerHTML = "click";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

const DownloadSection: FC = () => {
  const svg = document.getElementById("artboard");

  return (
    <Dialog>
      <DialogTrigger>
        <ImageDown className="w-3 h-3" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Download gradient</DialogTitle>
          <DialogDescription>
            Download your composition as SVG file
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              disabled={!svg}
              variant="default"
              size="sm"
              onClick={() => {
                if (svg) {
                  download("gradient.svg", svg);
                }
              }}
            >
              <span className="mr-2">Download SVG</span>
              <ImageDown className="w-3 h-3" />
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadSection;
