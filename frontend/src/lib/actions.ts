"use server";
import { revalidatePath } from "next/cache";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function addHaircut(formData: FormData) {
  const name = formData.get("name");
  const price = formData.get("price");

  if (typeof name !== "string" || typeof price !== "string") {
    throw new Error("Dados inválidos");
  }

  try {
    const response = await fetch(`${apiUrl}/add-haircut`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price }),
    });

    if (!response.ok) {
      throw new Error("Não foi possível criar um novo corte de cabelo");
    }

    revalidatePath("/haircuts");
  } catch (error) {
    console.error(error);
  }
}

export async function getHaicuts() {
  try {
    const response = await fetch(`${apiUrl}/haircuts`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching haircuts:", error);
    throw error;
  }
}
