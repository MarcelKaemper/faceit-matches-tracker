import { toast } from "react-toastify";

export default function createToast(msg, style) {
  const icon = style === "success" ? "✅" : style === "failure" ? "❌" : "";

  toast(`${icon} ${msg}`, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
}
