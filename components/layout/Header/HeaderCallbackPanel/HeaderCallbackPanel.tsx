import { FC } from "react";
import { CallbackPanel } from "@/components/common/CallbackPanel/CallbackPanel";

export const HeaderCallbackPanel: FC = () => {
  return (
    <CallbackPanel
      text="Заказать звонок"
      phoneNumber="+7 495 527 21 21"
    />
  )
}