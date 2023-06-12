import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const API_KEY = process.env.API_KEY;
  const BASE_URL = process.env.BASE_URL;
  const query = "matrix";
  const movies = await fetch(`${BASE_URL}/?apikey=${API_KEY}&s=${query}`).then(
    (res) => res.json()
  );

  // `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`

  return NextResponse.json(movies);
}
