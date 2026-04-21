export type StepItem = {
  label: string;
  detail: string;
  tip?: string;
  screenshot?: string;
};

export type WeekSection = {
  id: string;
  step: number;
  title: string;
  subtitle: string;
  video?: {
    youtubeId: string;
    title: string;
  };
  steps: StepItem[];
  resources?: { label: string; url: string; type: "doc" | "video" }[];
};

export type WeekPage = {
  courseTitle: string;
  weekLabel: string;
  title: string;
  intro: string;
  sections: WeekSection[];
};

export const weekPages: Record<string, WeekPage> = {
  "github-copilot-track/week-2": {
    courseTitle: "GitHub Copilot Mastery",
    weekLabel: "Week 2",
    title: "AI-Powered Coding with GitHub Copilot",
    intro:
      "Now that you know GitHub fundamentals, it's time to unlock the full power of Copilot. This week covers code completions, Copilot Chat, slash commands, and building real features faster with AI.",
    sections: [
      {
        id: "completions",
        step: 1,
        title: "Code completions — think out loud in code",
        subtitle: "Copilot reads your context and suggests the next lines. Learn to guide it effectively.",
        video: {
          youtubeId: "ZfT2CXY5-Dc",
          title: "GitHub Copilot code completions in action (4 min)",
        },
        steps: [
          {
            label: "Write a descriptive comment first",
            detail:
              "Type a comment like // fetch user data from API and sort by name and press Enter. Copilot uses the comment as intent and generates the function body. The more precise your comment, the better the suggestion.",
            tip: "Think of comments as prompts. The more context you give, the more accurate the completion.",
          },
          {
            label: "Accept, reject, or cycle suggestions",
            detail:
              "Press Tab to accept a suggestion. Press Esc to dismiss it. Use Alt+] / Alt+[ (Windows/Linux) or Option+] / Option+[ (Mac) to cycle through alternative suggestions.",
            screenshot:
              "// fetch user data from API and sort by name\n─────────────────────────────────────────\n  async function fetchSortedUsers() {\n    const res = await fetch('/api/users');\n    const data = await res.json();\n    return data.sort((a, b) => a.name.localeCompare(b.name));\n  }\n\n  [ Tab: Accept ]  [ Alt+]: Next ]  [ Esc: Dismiss ]",
          },
          {
            label: "Open the completions panel",
            detail:
              "Press Ctrl+Enter to open a full panel showing up to 10 alternative completions side by side. Useful when the inline suggestion isn't quite right and you want to pick the best option.",
          },
        ],
        resources: [
          { label: "Copilot code completions docs", url: "https://docs.github.com/en/copilot/using-github-copilot/getting-code-suggestions-in-your-ide-with-github-copilot", type: "doc" },
          { label: "Copilot completions video", url: "https://www.youtube.com/watch?v=ZfT2CXY5-Dc", type: "video" },
        ],
      },
      {
        id: "copilot-chat",
        step: 2,
        title: "Copilot Chat — ask anything about your code",
        subtitle: "Use the chat panel to explain, fix, refactor, or generate code through conversation.",
        video: {
          youtubeId: "a2DDYaq_oYE",
          title: "GitHub Copilot Chat — full walkthrough (5 min)",
        },
        steps: [
          {
            label: "Open Copilot Chat",
            detail:
              "Click the Copilot icon in the Activity Bar (left sidebar in VS Code) or press Ctrl+Shift+I. A chat panel opens where you can type natural language questions about your code.",
          },
          {
            label: "Use slash commands",
            detail:
              "Type / in the chat to see built-in commands: /explain (explains selected code), /fix (suggests a fix for an error), /tests (generates unit tests), /doc (adds documentation), /simplify (refactors to simpler code).",
            screenshot:
              "Copilot Chat\n──────────────────────────────────\n  /explain   Explain how this code works\n  /fix       Propose a fix for problems\n  /tests     Generate unit tests\n  /doc       Add documentation comments\n  /simplify  Rewrite to be simpler\n\n  [ Ask Copilot a question... ]",
            tip: "Select code in the editor first, then use a slash command — Copilot will apply it to that specific selection.",
          },
          {
            label: "Reference files with #",
            detail:
              "Type # in chat to attach a file or symbol to your question. For example: 'Refactor #CourseCard.tsx to use a ul/li list instead of divs.' Copilot reads the file and proposes an edit.",
          },
        ],
        resources: [
          { label: "Copilot Chat docs", url: "https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide", type: "doc" },
          { label: "Slash commands reference", url: "https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide#slash-commands", type: "doc" },
          { label: "Copilot Chat walkthrough", url: "https://www.youtube.com/watch?v=a2DDYaq_oYE", type: "video" },
        ],
      },
    ],
  },
  "github-copilot-track/week-1": {
    courseTitle: "GitHub Copilot Mastery",
    weekLabel: "Week 1",
    title: "GitHub Fundamentals & Copilot Configuration",
    intro:
      "Before using GitHub Copilot effectively, you need a solid foundation in GitHub itself. This guide walks you step by step through repositories, issues, pull requests, and how to configure Copilot on top of it all.",
    sections: [
      {
        id: "what-is-github",
        step: 1,
        title: "What is GitHub and why it matters",
        subtitle: "Understand the platform before using its AI tools.",
        video: {
          youtubeId: "pBy1zgt0XPc",
          title: "What is GitHub? — Official GitHub overview (3 min)",
        },
        steps: [
          {
            label: "GitHub is a cloud platform for code",
            detail:
              "GitHub hosts Git repositories in the cloud so that individuals and teams can collaborate on code from anywhere. It adds pull requests, issues, Actions, and now Copilot on top of Git.",
          },
          {
            label: "Git vs GitHub",
            detail:
              "Git is a version-control system that runs on your machine. GitHub is a hosting service for Git repositories — think of Git as the engine and GitHub as the garage.",
            tip: "You can use GitHub entirely in the browser without installing Git locally for basic tasks.",
          },
          {
            label: "Create a free account",
            detail:
              "Go to github.com, click Sign up, enter your email address, choose a username, and complete the verification. Your account is the starting point for everything else.",
            screenshot:
              "[ Sign up for GitHub ]\n\nEnter your email → Create a password → Enter a username\n\n[ Continue ] →",
          },
        ],
        resources: [
          { label: "GitHub.com — sign up", url: "https://github.com/signup", type: "doc" },
          { label: "GitHub Hello World guide", url: "https://docs.github.com/en/get-started/start-your-journey/hello-world", type: "doc" },
          { label: "Intro to GitHub (video)", url: "https://www.youtube.com/watch?v=pBy1zgt0XPc", type: "video" },
        ],
      },
      {
        id: "repository",
        step: 2,
        title: "What is a Repository — and how to create one",
        subtitle: "A repository (repo) is your project's home on GitHub.",
        video: {
          youtubeId: "IV5PGnkys-8",
          title: "Creating a GitHub repository step by step (5 min)",
        },
        steps: [
          {
            label: "Understand what a repo contains",
            detail:
              "A repository stores all the files for a project — code, documentation, images — together with the full history of every change ever made. It can be public (anyone can see it) or private (only you and invited collaborators).",
          },
          {
            label: "Create a new repository",
            detail:
              "Click the + icon in the top-right corner of GitHub, then New repository. Give it a name (no spaces, use hyphens), choose Public or Private, tick 'Add a README file', and click Create repository.",
            screenshot:
              "Repository name:  [ my-first-project        ]\nDescription:      [ optional description     ]\n\n○ Public  ● Private\n\n☑ Add a README file\n\n[ Create repository ]",
            tip: "Always initialise with a README — it makes it easy to clone and gives you an immediate landing page for your project.",
          },
          {
            label: "Explore the repo interface",
            detail:
              "Your new repo shows the Code tab (files), Issues, Pull requests, Actions, and Settings. The green Code button gives you the URL to clone it locally.",
            screenshot:
              "📁 my-first-project\n─────────────────────────────────\n  Code   Issues   Pull requests   Actions   Settings\n─────────────────────────────────\n  README.md\n\n  [ < > Code ▼ ]  Clone  →  https://github.com/you/my-first-project.git",
          },
          {
            label: "Add a file directly in the browser",
            detail:
              "Click Add file → Create new file. Name it (e.g. notes.md), type some content in the editor, scroll down, write a commit message ('Add notes file'), and click Commit changes.",
            tip: "Every change saved to GitHub is called a commit. A commit message explains what changed and why — keep it short and clear.",
          },
        ],
        resources: [
          { label: "About repositories — GitHub Docs", url: "https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories", type: "doc" },
          { label: "Create a repo — GitHub Docs", url: "https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository", type: "doc" },
          { label: "GitHub Quickstart", url: "https://docs.github.com/en/get-started/quickstart", type: "doc" },
        ],
      },
      {
        id: "issues",
        step: 3,
        title: "What is an Issue — and how to use one",
        subtitle: "Issues are how work is tracked, discussed, and assigned on GitHub.",
        video: {
          youtubeId: "TKJ4RdhyB5Y",
          title: "GitHub Issues — plan and track work (4 min)",
        },
        steps: [
          {
            label: "Understand what issues are for",
            detail:
              "An issue can represent a bug report, a feature request, a question, or any task that needs to be tracked. Issues have a title, description, labels, assignees, and a comment thread.",
          },
          {
            label: "Create your first issue",
            detail:
              "Navigate to your repository. Click the Issues tab, then New issue. Write a clear title (e.g. 'Add login page') and a description explaining the goal or problem. Click Submit new issue.",
            screenshot:
              "Issues > New issue\n────────────────────────────────\nTitle:  [ Add login page                    ]\n\nDescription:\n  Users need a way to sign in. We should\n  build a /login route with email + password.\n\n  Labels: [ enhancement ▼ ]  Assignees: [ you ▼ ]\n\n[ Submit new issue ]",
            tip: "Use labels like 'bug', 'enhancement', or 'good first issue' to categorise work. Assignees show who is responsible.",
          },
          {
            label: "Mention and reference in issues",
            detail:
              "Type @ followed by a username to notify a collaborator. Type # followed by a number to link to another issue or pull request. These cross-references are clickable and keep context connected.",
          },
          {
            label: "Close an issue",
            detail:
              "Add a comment explaining the resolution, then click Close issue. Better still, closing happens automatically when a pull request that fixes it is merged — just write 'Closes #5' in the PR description.",
            tip: "GitHub Copilot can be assigned to an issue directly. It will read the issue, create a branch, and open a draft pull request automatically.",
          },
        ],
        resources: [
          { label: "About issues — GitHub Docs", url: "https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues", type: "doc" },
          { label: "GitHub Issues quickstart", url: "https://docs.github.com/en/issues/tracking-your-work-with-issues/quickstart", type: "doc" },
          { label: "GitHub Issues — planning video", url: "https://www.youtube.com/watch?v=TKJ4RdhyB5Y", type: "video" },
        ],
      },
      {
        id: "branches",
        step: 4,
        title: "Branches — working safely in parallel",
        subtitle: "A branch is an isolated copy of the code where you can make changes without affecting main.",
        steps: [
          {
            label: "Why branches exist",
            detail:
              "The default branch (usually called main) is the stable version of your project. You create a new branch to work on a feature or fix. When done, you merge it back via a pull request.",
          },
          {
            label: "Create a branch in the browser",
            detail:
              "On your repo page, click the branch selector (it shows 'main'). Type a new branch name like 'feature/login-page' and press Enter. GitHub creates the branch as a copy of main.",
            screenshot:
              "[ main ▼ ]\n────────────────\n  Switch branches\n  ────────────\n  Find or create a branch...\n  [ feature/login-page    ]\n  → Create branch: feature/login-page",
            tip: "Use a naming convention like feature/description or fix/bug-name to keep branches organised.",
          },
          {
            label: "Make a commit on your branch",
            detail:
              "Switch to your new branch (click the selector and choose it), then edit a file. When you commit, the change is saved to that branch only — main is untouched.",
          },
        ],
        resources: [
          { label: "About branches — GitHub Docs", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches", type: "doc" },
          { label: "GitHub Flow guide", url: "https://docs.github.com/en/get-started/using-github/github-flow", type: "doc" },
        ],
      },
      {
        id: "pull-requests",
        step: 5,
        title: "Pull Requests — how code gets reviewed and merged",
        subtitle: "A pull request (PR) is a proposal to merge your branch into another. It's the heart of collaboration on GitHub.",
        video: {
          youtubeId: "For9VtrQx58",
          title: "GitHub Pull Requests — collaborate on code (5 min)",
        },
        steps: [
          {
            label: "Create a pull request",
            detail:
              "After committing changes on your branch, GitHub shows a prompt 'Compare & pull request'. Click it. You'll see a form with the base branch (where you want to merge, usually main) and your branch. Add a title and description, then click Create pull request.",
            screenshot:
              "Open a pull request\n────────────────────────────────────\nbase: main  ←  compare: feature/login-page\n\nTitle:  [ Add login page                         ]\n\nDescription:\n  Closes #3\n  Adds /login route with email + password form.\n\n  Reviewers: [ + Add reviewer ]\n\n[ Create pull request ]",
            tip: "Write 'Closes #3' in the description to automatically close the related issue when the PR is merged.",
          },
          {
            label: "Review changes in the Files changed tab",
            detail:
              "The Files changed tab shows a diff — lines added in green, lines removed in red. Reviewers can click any line and leave an inline comment asking questions or suggesting improvements.",
            screenshot:
              "Files changed (1)\n────────────────────────────────────\n  + app/login/page.tsx  [+42 lines]\n\n  @@ -0,0 +1,42 @@\n  + import styles from './login.module.css';\n  + \n  + export default function LoginPage() {\n  +   return (\n  +     <form>\n  +       <input type='email' placeholder='Email' />\n  +       ...",
          },
          {
            label: "Approve and merge",
            detail:
              "Once reviewers approve, click Merge pull request → Confirm merge. The branch is merged into main. You can then delete the feature branch — it's no longer needed.",
            tip: "Enable branch protection rules in Settings → Branches to require at least one approval before merging.",
          },
          {
            label: "Let Copilot review your PR",
            detail:
              "On any PR, click the Reviewers field and add 'Copilot'. GitHub Copilot will scan the diff, check for bugs, suggest improvements, and post a review comment — all automatically.",
            screenshot:
              "Reviewers\n────────────────────────────────────\n  [ + Copilot ]\n  [ + Your teammate ]\n\n  GitHub Copilot  · just now\n  ✅ Overall the changes look good.\n  ⚠ Line 12: Consider adding input validation\n     for the email field before submitting.",
            tip: "Copilot code review is free for all public repos and included in GitHub Copilot plans.",
          },
        ],
        resources: [
          { label: "About pull requests — GitHub Docs", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests", type: "doc" },
          { label: "Creating a pull request", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request", type: "doc" },
          { label: "Copilot code review", url: "https://docs.github.com/en/copilot/using-github-copilot/code-review/using-copilot-code-review", type: "doc" },
          { label: "Pull requests explained (video)", url: "https://www.youtube.com/watch?v=For9VtrQx58", type: "video" },
        ],
      },
      {
        id: "copilot-setup",
        step: 6,
        title: "Configure GitHub Copilot — your first setup",
        subtitle: "Enable Copilot in VS Code and verify the configuration.",
        video: {
          youtubeId: "Fi3AJZZregI",
          title: "GitHub Copilot setup in VS Code — getting started (4 min)",
        },
        steps: [
          {
            label: "Get a Copilot plan",
            detail:
              "Go to github.com/features/copilot and click Start a free trial (Individual) or ask your organisation admin to assign you a seat. Students get Copilot free via the GitHub Student Developer Pack.",
            tip: "GitHub Copilot Free tier includes 2 000 code completions/month and 50 Copilot Chat messages.",
          },
          {
            label: "Install the VS Code extension",
            detail:
              "In VS Code, open the Extensions panel (Ctrl+Shift+X), search for 'GitHub Copilot', and click Install. Also install 'GitHub Copilot Chat'. Sign in with your GitHub account when prompted.",
            screenshot:
              "Extensions: GitHub Copilot\n────────────────────────────────────\n  GitHub Copilot          ★ 4.9  ↓ 20M\n  GitHub Copilot Chat     ★ 4.8  ↓ 15M\n\n  [ Install ]  [ Install ]",
          },
          {
            label: "Verify Copilot is active",
            detail:
              "Open any .ts or .js file. Start typing a function name and wait 1–2 seconds. A grey ghost-text suggestion should appear. Press Tab to accept it.",
            tip: "If no suggestion appears, click the Copilot icon in the bottom-right status bar — it should show 'Copilot: Ready'.",
          },
          {
            label: "Add a custom instructions file",
            detail:
              "Create a file at .github/copilot-instructions.md in your repo. Write your preferences (e.g. 'Use TypeScript strict mode', 'Prefer functional components'). Copilot will follow these instructions in every suggestion in this repo.",
            screenshot:
              ".github/copilot-instructions.md\n────────────────────────────────────\n  # Copilot Instructions\n  - Use TypeScript with strict mode\n  - Prefer functional React components\n  - Add JSDoc comments to all exported functions\n  - Use Tailwind CSS for styling",
            tip: "This file is already in this project! See .github/copilot-instructions.md for an example.",
          },
        ],
        resources: [
          { label: "GitHub Copilot quickstart", url: "https://docs.github.com/en/copilot/quickstart", type: "doc" },
          { label: "Copilot in VS Code — setup guide", url: "https://docs.github.com/en/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio-code", type: "doc" },
          { label: "Custom instructions for Copilot", url: "https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot", type: "doc" },
          { label: "Copilot setup walkthrough (video)", url: "https://www.youtube.com/watch?v=Fi3AJZZregI", type: "video" },
          { label: "Awesome Copilot Learning Hub", url: "https://awesome-copilot.github.com/learning-hub/", type: "doc" },
        ],
      },
    ],
  },
};
