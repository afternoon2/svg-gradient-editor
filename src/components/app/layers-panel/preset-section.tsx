import { FC, useState } from "react";
import PresetSelect from "../preset-select";
import { Save } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useAtomValue, useSetAtom } from "jotai";
import { presetsAtom } from "@/state/presets.state";
import { Button } from "@/components/ui/button";
import { nanoid } from "nanoid";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import {
  gradientsLengthAtom,
  gradientStateReducerAtom,
} from "@/state/gradient.store";
import { globalBlendModeAtom } from "@/state/globalBlendMode.state";

const PresetSection: FC = () => {
  const setPresets = useSetAtom(presetsAtom);
  const gradientsLength = useAtomValue(gradientsLengthAtom);
  const globalBlendMode = useAtomValue(globalBlendModeAtom);
  const state = useAtomValue(gradientStateReducerAtom);
  const [name, setName] = useState<string>("");

  return (
    <PresetSelect>
      <div className="w-1/6 flex items-center justify-end mx-1">
        <Dialog>
          <DialogTrigger
            disabled={gradientsLength === 0}
            title="Save preset"
            aria-label="Save preset"
          >
            <Save
              className={`w-4 h-4 ${
                gradientsLength === 0
                  ? "stroke-gray-400 cursor-not-allowed"
                  : ""
              }`}
            />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Save preset</DialogTitle>
              <DialogDescription>
                Set preset name and click save
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="name">Name (min. length: 2)</Label>
                  <Input
                    id="name"
                    value={name}
                    minLength={2}
                    onChange={(e) => {
                      setName(e.currentTarget.value);
                    }}
                    className="col-span-2 h-8"
                  />
                </div>
                <DialogFooter className="justify-end mt-2">
                  <DialogClose asChild>
                    <Button
                      variant="default"
                      size="sm"
                      disabled={name.length <= 2}
                      onClick={() => {
                        setPresets((prev) => [
                          ...prev,
                          {
                            id: nanoid(),
                            name,
                            value: {
                              gradients: state.gradients,
                              globalBlendMode: globalBlendMode,
                            },
                          },
                        ]);
                      }}
                    >
                      Save
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </PresetSelect>
  );
};

export default PresetSection;
