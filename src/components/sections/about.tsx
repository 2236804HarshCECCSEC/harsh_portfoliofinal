import { SectionWrapper } from './section-wrapper';

export function About() {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="mx-auto max-w-3xl text-center text-lg text-muted-foreground space-y-6">
        <p>
          AI Developer & Automation Engineer with a focus on Agentic Workflows and
          LLM Integration. Expert at architecting autonomous systems using n8n, Python,
          and OpenAI/Gemini APIs.
        </p>
        <p>
          Skilled in building end-to-end RAG pipelines, prompt engineering, and automating
          complex business logic. Proven track record in transforming unstructured data
          into intelligent, actionable outputs through scalable AI deployments and
          API-first architectures.
        </p>
      </div>
    </SectionWrapper>
  );
}
