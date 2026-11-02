import { NextRequest, NextResponse } from "next/server";

// Admin Authentication Credentials per explicit specification:
// Username: threepointslondon
// Password: vayam@2002
const VALID_USERNAMES = ["threepointslondon", "vayamlahoti"];
const VALID_PASSWORDS = ["vayam@2002", "Vayam@2002"];

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    const normalizedUser = (username || "").trim().toLowerCase();
    const cleanPassword = (password || "").trim();

    const isUserValid = VALID_USERNAMES.includes(normalizedUser);
    const isPassValid = VALID_PASSWORDS.includes(cleanPassword);

    if (isUserValid && isPassValid) {
      return NextResponse.json({
        success: true,
        user: {
          username: "threepointslondon",
          name: "Vayam Lahoti",
          role: "Founder & Editor in Chief",
        },
        token: `tpl_session_${Date.now()}`,
      });
    }

    return NextResponse.json(
      {
        success: false,
        message: "Invalid credentials. Username is 'threepointslondon' and password is 'vayam@2002'.",
      },
      { status: 401 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: "Authentication error" },
      { status: 500 }
    );
  }
}
