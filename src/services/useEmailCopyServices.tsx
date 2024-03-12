import { useState } from "react";

export default function useEmailCopyServices() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    const email = "matheus.alvsbarroso@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert(`Email copiado para a área de transferência: ${email}`);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      })
      .catch((error) => {
        alert(`Erro ao copiar email: ${error}`);
      });
  };

  return { copied, copyEmail };
}
