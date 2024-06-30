type FormButtonProps = {
  text?: string;
};

export const FormButton = ({ text = "Acessar" }: FormButtonProps) => {
  return (
    <button
      className="bg-terciary hover:bg-orange-500 rounded text-white p-2 font-bold transition-colors duration-200"
      type="submit"
    >
      {text}
    </button>
  );
};
