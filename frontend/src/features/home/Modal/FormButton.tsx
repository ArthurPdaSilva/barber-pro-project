"use client";
import { finishSchedule } from "@/lib/actions";
import { toast } from "react-toastify";

type FormButtonProps = {
  scheduleId: string;
  handleClose: () => void;
};

export const FormButton = ({ scheduleId, handleClose }: FormButtonProps) => {
  async function clientFinishSchedule(formData: FormData) {
    const response = await finishSchedule(formData);
    if (!response.success) {
      toast.error(response.message);
      handleClose();
      return;
    }
    toast.success(response.message);
    handleClose();
  }

  return (
    <form action={clientFinishSchedule}>
      <input type="hidden" name="scheduleId" value={scheduleId} />
      <button className="bg-terciary text-white font-bold p-2 rounded">
        Finalizar Serviço
      </button>
    </form>
  );
};
