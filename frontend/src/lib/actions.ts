"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function login(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const response = await fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Não foi possível fazer login");
    }

    const { token } = await response.json();

    cookies().set("nextauth.token", token, {
      maxAge: 3600,
      httpOnly: true,
    });

    return {
      error: false,
      message: "Login feito com sucesso",
    };
  } catch (error) {
    return {
      error: true,
      message: "Não foi possível fazer login",
    };
  }
}

export async function logout() {
  cookies().delete("nextauth.token");
  redirect("/login");
}

export async function register(formData: FormData) {
  const barberName = formData.get("barberName");
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const response = await fetch("http://localhost:3001/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ barberName, email, password }),
    });

    if (!response.ok) {
      throw new Error("Não foi possível fazer cadastro");
    }

    const { token } = await response.json();

    cookies().set("nextauth.token", token, {
      maxAge: 3600,
      httpOnly: true,
    });

    return {
      error: false,
      message: "Cadastro feito com sucesso",
    };
  } catch (error) {
    return {
      error: true,
      message: "Não foi possível fazer o cadastro",
    };
  }
}

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

export async function editHaircut(formData: FormData) {
  const haircutId = formData.get("haircutId");
  const name = formData.get("name");
  const price = formData.get("price");

  if (typeof name !== "string" || typeof price !== "string") {
    throw new Error("Dados inválidos");
  }

  try {
    const response = await fetch(
      `http://localhost:3001/edit-haircut/${haircutId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price }),
      }
    );

    if (!response.ok) {
      throw new Error("Não foi possível editar um corte de cabelo");
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

export async function getSchedules() {
  const response = await fetch("http://localhost:3001/schedules");
  const data = await response.json();
  return data;
}

export async function editUser(formData: FormData) {
  const barberName = formData.get("barberName");
  const address = formData.get("address");

  try {
    const response = await fetch("http://localhost:3001/edit-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ barberName, address }),
    });

    if (!response.ok) {
      throw new Error("Não foi possível editar o usuário");
    }

    revalidatePath("/");
  } catch (error) {
    console.error(error);
  }
}
