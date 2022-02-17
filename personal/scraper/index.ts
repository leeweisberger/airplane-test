// Linked to https://app.airplane.dev/t/scrape_and_notify [do not edit this line]

import axios from "axios";
import cheerio from "cheerio";
import { first } from "cheerio/lib/api/traversing";

type Params = {
  url: string;
  selector: string;
};

// Put the main logic of the task in this function.
export default async function (
  params: Params
): Promise<{ result: string } | void> {
  console.log("parameters!:", params);

  try {
    const res = await axios(params.url);
    const data = res.data;
    const $ = cheerio.load(data);
    return { result: $(params.selector).first().text().trim() };
  } catch (error) {
    console.log(error, error.message);
  }
}
