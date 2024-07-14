"use server";
import { OperationResult } from "@/types";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function login(formData: FormData): Promise<OperationResult> {
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
      success: true,
      message: "Login feito com sucesso",
    };
  } catch (error) {
    return {
      success: false,
      message: "Não foi possível fazer login",
    };
  }
}

export async function logout() {
  cookies().delete("nextauth.token");
  redirect("/login");
}

export async function register(formData: FormData): Promise<OperationResult> {
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
      throw new Error();
    }

    const { token } = await response.json();

    cookies().set("nextauth.token", token, {
      maxAge: 3600,
      httpOnly: true,
    });

    return {
      success: true,
      message: "Cadastro feito com sucesso",
    };
  } catch (error) {
    return {
      success: false,
      message: "Não foi possível fazer o cadastro",
    };
  }
}

export async function addHaircut(formData: FormData): Promise<OperationResult> {
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
      throw new Error();
    }

    revalidatePath("/haircuts");
    return {
      success: true,
      message: "Corte de cabelo criado com sucesso",
    };
  } catch (error) {
    return {
      success: false,
      message: "Não foi possível criar um novo corte de cabelo",
    };
  }
}

export async function editHaircut(
  formData: FormData
): Promise<OperationResult> {
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
      throw new Error();
    }

    revalidatePath("/haircuts");
    return {
      success: true,
      message: "Corte de cabelo editado com sucesso",
    };
  } catch (error) {
    return {
      success: false,
      message: "Não foi possível editar o corte de cabelo",
    };
  }
}

export async function getHaicuts() {
  try {
    const response = await fetch(`${apiUrl}/haircuts`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Falha ao buscar cortes", error);
    throw error;
  }
}

export async function getSchedules() {
  const response = await fetch("http://localhost:3001/schedules");
  const data = await response.json();
  return data;
}

export async function editUser(formData: FormData): Promise<OperationResult> {
  const barberName = formData.get("barberName");
  const address = formData.get("address");

  try {
    const response = await fetch("http://localhost:3001/edit-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ barberName, address }),
    });

    if (!response.ok) {
      throw new Error();
    }

    revalidatePath("/");
    return {
      success: true,
      message: "Usuário editado com sucesso",
    };
  } catch (error) {
    return {
      success: false,
      message: "Não foi possível editar o usuário",
    };
  }
}

export async function addSchedule(
  formData: FormData
): Promise<OperationResult> {
  const name = formData.get("name");
  const haircutId = formData.get("haircuts");

  try {
    const response = await fetch("http://localhost:3001/add-schedule", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, haircutId }),
    });

    if (!response.ok) {
      throw new Error();
    }

    revalidatePath("/schedule");
    return {
      success: true,
      message: "Agendamento feito com sucesso",
    };
  } catch (error) {
    return {
      success: false,
      message: "Não foi possível fazer o agendamento",
    };
  }
}

export async function finishSchedule(
  formData: FormData
): Promise<OperationResult> {
  const scheduleId = formData.get("scheduleId");

  try {
    const response = await fetch(
      `http://localhost:3001/finish-schedule/${scheduleId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      throw new Error();
    }

    revalidatePath("/schedule");
    return {
      success: true,
      message: "Agendamento finalizado",
    };
  } catch (error) {
    return {
      success: false,
      message: "Não foi possível finalizar o agendamento",
    };
  }
}
