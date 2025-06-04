import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "ai-study-material-gen",
  apiKey: process.env.INNGEST_API_KEY,  
});
