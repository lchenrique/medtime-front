import { NextResponse } from "next/server";
let options = { 
  method: "GET",
  headers: {
    'Content-Type': 'application/json',
    "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    Authorization: "Guest",
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    Cookie:
      "FGTServer=77E1DC77AE2F953D7ED796A08A630A01A53CF6FE5FD0E106412591871F9A9BBCFBDEA0AD564FD89D3BDE8278200B; FGTServer=77E1DC77AE2F953D7ED796A08A630A01A53CF6FE5FD0E106412591871F9A9BBCFBDEA0AD564FD89D3BDE8278200B; FGTServer=77E1DC77AE2F953D7ED796A08A630A01A53CF6FE5FD0E106412591871F9A9BBCFBDEA0AD564FD89D3BDE8278200B; _pk_id.42.210e=8eca716434ce3237.1690380888.; FGTServer=77E1DC77AE2F953D7ED796A08A630A01A53CF6FE5FD0E106412591871F9A9BBCFBDEA0AD564FD89D3BDE8278200B; _cfuvid=L.SzxLLxZoWYrYqhaiRgS5MTkV77mwE5uIyLNWvyufk-1690462598410-0-604800000; _pk_ref.42.210e=%5B%22%22%2C%22%22%2C1690462669%2C%22https%3A%2F%2Fwww.google.com%2F%22%5D; _pk_ses.42.210e=1; cf_clearance=tk5QcLSYPlUQfr8s2bTGXyvC2KZdHcEIYU8r6HCgNvQ-1690462689-0-160.0.0",
    Referer: "https://consultas.anvisa.gov.br/",
    UserAgent:
      "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0')",
    "Referrer-Policy": "no-referrer-when-downgrade",
  },
};
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name')

const url = `https://consultas.anvisa.gov.br/api/produto/listaMedicamentoBula/${name}`
 
  const res = await fetch(url, options)

  if(res.ok){
    const data = await res.json()

    return  NextResponse.json({
      status: res.status,
      data,
    })
  }

  return NextResponse.json({
    data: []
  });
}
