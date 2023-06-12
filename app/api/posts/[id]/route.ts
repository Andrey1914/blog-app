// import { NextResponse } from "next/server";
// import { headers, cookies } from "next/headers";
// import { redirect } from "next/navigation";

// export async function DELETE(
//   req: Request,
//   { params }: { params: { id: string } }
// ) {
//   const id = params.id;

//   const headerList = headers();
//   const type = headerList.get("Content-Type");

//   const cookiesList = cookies();
//   const cookie = cookiesList.get("Cookies_2")?.value;

//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${id}`,
//     {
//       method: "DELETE",
//     }
//   );

//   if (response.ok) {
//     console.log("Post is deleted");
//   } else {
//     console.error("Ошибка при удалении поста:", response.status);

//     return NextResponse.json({ id, type, cookie });
//   }

//   redirect("/blog");

//   //   return NextResponse.json({ id, type, cookie });
// }

import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse | void> {
  const id = params.id;

  const headerList = headers();
  const type = headerList.get("Content-Type");

  const cookiesList = cookies();
  const cookie = cookiesList.get("Cookies_2")?.value;

  // const response = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts/${id}`,
  //   {
  //     method: "DELETE",
  //   }
  // );

  const response = await fetch(`api/posts/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    console.log("Post is deleted");
  } else {
    console.error("Ошибка при удалении поста:", response.status);
    return NextResponse.json({ id, type, cookie });
  }

  redirect("/blog");
}
