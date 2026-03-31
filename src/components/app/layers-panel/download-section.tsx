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
  const doc = document.implementation.createDocument(SVG_NAMESPACE, SVG_QUALIFIED_NAME, doctype);
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

  const disabled = !svgPresent || gradientsLength === 0;

  return (
    <Button
      disabled={disabled}
      variant="gradient"
      size="default"
      className="w-full"
      onClick={() => {
        download("gradient", document.getElementById("artboard") as HTMLElement);
      }}
    >
      <ImageDown className="w-4 h-4 mr-2" />
      Download SVG
    </Button>
  );
};

export default DownloadSection;
