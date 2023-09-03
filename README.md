- [Simple chat](/app/api/chat/route.ts)
- [Returning structured output from an LLM call](/app/api/chat//route.ts)

## Getting Started

First, clone this repo and download it locally.

Set up environment variables in your repo's `.env.local` file. Copy the `.env.example` file to `.env.local`.
To start with the basic examples, you'll just need to add your OpenAI API key.

Next, install the required packages using your preferred package manager (e.g. `yarn`).

Now you're ready to run the development server:

```bash
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result! Ask the bot something and you'll see a streamed response:

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

Backend logic lives in `app/api/chat/route.ts`. From here, you can change the prompt and model, or add other modules and logic.

The chatbot both uses Supabase as a vector store. However, you can swap in
[another supported vector store](https://js.langchain.com/docs/modules/data_connection/vectorstores/integrations/) if preferred by changing
the code under `app/api/chat//route.ts`.

For Supabase, follow [these instructions](https://js.langchain.com/docs/modules/data_connection/vectorstores/integrations/supabase) to set up your
database, then get your database URL and private key and paste them into `.env.local`. The default document text is pulled from the LangChain.js retrieval use case docs, but you can change them to whatever text you'd like.

For a given text, you'll only need to press `Upload` once. Pressing it again will re-ingest the docs, resulting in duplicates.
You can clear your Supabase vector store by navigating to the console and running `DELETE FROM docuemnts;`.

After splitting, embedding, and uploading some text, you're ready to ask questions!

For more info on retrieval agents, [see this page](https://js.langchain.com/docs/use_cases/question_answering/conversational_retrieval_agents).

## Learn More

To learn more about what you can do with LangChain.js, check out the docs here:

- https://js.langchain.com/docs/

## ▲ Deploy on Vercel

When ready, you can deploy your app on the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Thank You!

Thanks for reading!