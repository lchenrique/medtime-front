import { AutoCompleteInput } from "@/components/form/auto-complete-input";
import { DatePicker } from "@/components/form/date-picker";
import { TextInput } from "@/components/form/text-input";
import { Textarea } from "@/components/form/textarea";
import { TimerPicker } from "@/components/form/time-picker";
import { CalendarClock, CalendarRange, ClipboardList } from "lucide-react";

export const stepForm = [
  {
    step: 1,
    icon: <ClipboardList />,
    stepItem: (
      <>
        <AutoCompleteInput
          commandClassName="h-14"
          suggestionClassName="top-[62px]"
          name="name"
          large
          label="Qual o nome do medicamento?"
        />
        <Textarea
          name="description"
          label="Se preferir coloque uma descrição:"
          large
        />
      </>
    ),
  },
  {
    step: 2,
    icon:<CalendarRange />,
    stepItem: (
      <>
        <TextInput
          name="qtsTime"
          label="Quantas vezes ao dia?:"
          large
          type="number"
          max={24}
          min={1}
        />
        <TextInput
          name="qtsDays"
          label=" Por quantos dias?:"
          large
          type="number"
          max={360}
          min={1}
        />
      </>
    ),
  },
  {
    step: 3,
    icon:  <CalendarClock />,
    stepItem: (
      <>
          <TimerPicker large />
        <DatePicker
          name="startDate"
          label=" Data inicial:"
          large
        />
      </>
    ),
  },
];
