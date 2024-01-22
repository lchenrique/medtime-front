"use client";
import { Button } from "@/components/ui/button";
import { CalendarCheck2, ChevronLeft, ChevronRight, Save } from "lucide-react";
import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateMedicine } from "@/schemas";
import { H4 } from "@/components/typography/h4";
import { cn } from "@/utils";
import { Stepper } from "@/components/stepper/stepper";
import { stepForm } from "./step-form";
import { Separator } from "@/components/ui/separator";
import { PageForm } from "../../_components/page-form";
import { TimerPicker } from "@/components/form/time-picker";
export interface IMedFormProps {
  med?: z.infer<typeof CreateMedicine>;
}

const MedForm = (props: IMedFormProps) => {
  const [step, setStep] = useState(1);
  const form = useForm<z.infer<typeof CreateMedicine>>({
    resolver: zodResolver(CreateMedicine),
    defaultValues: {
      name: props?.med?.name || "",
      description: props?.med?.description || "",
      qtsDays: props?.med?.qtsDays || 1,
      qtsTime: props?.med?.qtsTime || "",
      startDate: props?.med?.startDate || "",
      startTime: props?.med?.startDate || "",
    },
  });

  // const isMobile = useMediaQuery("(max-width: 468px)");
  const isMobile = true;

  const handleNextStep = () => {
    if (step < stepForm.length) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <PageForm title="Novo  medicamento" form={form}>
    
      <div className="flex flex-col gap-5 w-full flex-1">
        <Stepper activeStep={step} items={stepForm} onChange={setStep} />
      </div>
      <Separator className="my-4"/>
      <div className="flex items-center w-full gap-2">
        {step > 1 && (
          <Button
            variant="secondary"
            size="lg"
            className="min-h-11 w-full"
            onClick={handlePreviousStep}
          >
            <ChevronLeft />
            Anterior
          </Button>
        )}
        <Button size="lg" className="min-h-11 w-full" onClick={handleNextStep}>
          <>
            {step < stepForm.length ? (
              <>
                Próximo
                <ChevronRight />
              </>
            ) : (
              <>
                Agendar
                <CalendarCheck2 />
              </>
            )}
          </>
        </Button>
      </div>
    </PageForm>
  );
};

export { MedForm };
