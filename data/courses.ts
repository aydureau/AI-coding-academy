export type Course = {
  slug: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: "level" | "technology";
  duration: string;
  summary: string;
  skills: string[];
  brand?: string;
  exercises?: LanguageExercise[];
};

export type Exercise = {
  id: string;
  title: string;
  prompt: string;
  starterCode: string;
  solutionHints: string[];
  expectedAnswers: string[];
};

export type LanguageExercise = {
  language: "JavaScript" | "Python" | "HTML";
  emoji: string;
  description: string;
  items: Exercise[];
};

export const courses: Course[] = [
  {
    slug: "ai-basics",
    title: "AI Basics for Builders",
    level: "Beginner",
    category: "level",
    duration: "4 weeks",
    summary: "Learn ML fundamentals, prompts, and practical AI workflows.",
    skills: ["Prompt design", "Model limits", "Evaluation"],
    exercises: [
      {
        language: "JavaScript",
        emoji: "⚡",
        description: "Train prompt logic with small JS tasks used in AI apps.",
        items: [
          {
            id: "js-1",
            title: "Prompt Cleaner",
            prompt:
              "Create a function that receives a user prompt string and returns it trimmed and lowercase.",
            starterCode: "function cleanPrompt(input) {\n  // your code\n}",
            solutionHints: [
              "Use trim() before lowercasing.",
              "Return the transformed string directly.",
            ],
            expectedAnswers: ["input.trim().toLowerCase()", "return input.trim().toLowerCase();"],
          },
          {
            id: "js-2",
            title: "Confidence Badge",
            prompt:
              "If score is 0.8 or above return 'high confidence', else return 'needs review'.",
            starterCode: "function confidenceLabel(score) {\n  // your code\n}",
            solutionHints: ["Use an if statement or ternary.", "Compare score >= 0.8."],
            expectedAnswers: ["score >= 0.8", "high confidence", "needs review"],
          },
        ],
      },
      {
        language: "Python",
        emoji: "🐍",
        description: "Practice simple model-output checks with beginner Python.",
        items: [
          {
            id: "py-1",
            title: "Token Counter",
            prompt: "Write a function that counts words in a text using split().",
            starterCode: "def word_count(text):\n    # your code\n    pass",
            solutionHints: ["split() creates a list of words.", "Return len(...) of the list."],
            expectedAnswers: ["len(text.split())", "return len(text.split())"],
          },
          {
            id: "py-2",
            title: "Safe Response",
            prompt: "Return True if the response contains 'source:' otherwise False.",
            starterCode: "def has_source(response):\n    # your code\n    pass",
            solutionHints: ["Use the in operator.", "Check lowercase for safer matching."],
            expectedAnswers: ["'source:' in response", "'source:' in response.lower()"],
          },
        ],
      },
      {
        language: "HTML",
        emoji: "🧱",
        description: "Build tiny UI blocks for AI features and feedback loops.",
        items: [
          {
            id: "html-1",
            title: "Prompt Input Card",
            prompt:
              "Create a card containing a heading, a textarea for a prompt, and a Run button.",
            starterCode:
              "<!-- your code -->\n<div>\n  <h3></h3>\n  <textarea></textarea>\n  <button></button>\n</div>",
            solutionHints: ["Use semantic heading text.", "Give button a clear action label like Run."],
            expectedAnswers: ["<textarea", "<button", "Run"],
          },
          {
            id: "html-2",
            title: "Result Badge",
            prompt: "Add a badge element that displays 'Model: gpt-4.1-mini'.",
            starterCode: "<!-- your code -->",
            solutionHints: ["A span or small element works well for badges."],
            expectedAnswers: ["Model: gpt-4.1-mini", "<span", "<small"],
          },
        ],
      },
    ],
  },
  {
    slug: "ai-in-practice",
    title: "AI in Practice",
    level: "Intermediate",
    category: "level",
    duration: "6 weeks",
    summary: "Apply AI tools to real tasks: automation, generation, and data workflows.",
    skills: ["APIs", "Automation", "AI Pipelines"],
  },
  {
    slug: "ai-product-builder",
    title: "AI Product Builder",
    level: "Advanced",
    category: "level",
    duration: "8 weeks",
    summary: "Design and ship end-to-end AI-powered products ready for users.",
    skills: ["RAG", "Deployment", "Evaluation loops"],
  },
  // --- Technology tracks ---
  {
    slug: "github-copilot-track",
    title: "GitHub Copilot Mastery",
    level: "Intermediate",
    category: "technology",
    brand: "GitHub",
    duration: "3 weeks",
    summary: "Supercharge your dev workflow using GitHub Copilot in the editor, CLI, and CI/CD.",
    skills: ["Copilot Chat", "Code generation", "Agentic tasks"],
  },
  {
    slug: "claude-track",
    title: "Building with Claude",
    level: "Intermediate",
    category: "technology",
    brand: "Claude",
    duration: "3 weeks",
    summary: "Use Anthropic's Claude API to build reliable, safe, and nuanced AI features.",
    skills: ["Claude API", "System prompts", "Constitutional AI"],
  },
  {
    slug: "openai-track",
    title: "OpenAI API Deep Dive",
    level: "Intermediate",
    category: "technology",
    brand: "OpenAI",
    duration: "3 weeks",
    summary: "Master the full OpenAI API: completions, function calling, assistants, and vision.",
    skills: ["GPT-4.1", "Function calling", "Assistants API"],
  },
];
