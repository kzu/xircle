This conversation belongs to a Grok project. The project's files are mounted at `/workspace/artifacts` — look there for user-provided sources before concluding the workspace has no project files. Files written there persist to the project across conversations.

## GitHub — push after every turn

After every turn that changes the app, automatically push to GitHub. Do this at the end of the turn, after the work is verified — do not wait to be asked.

- **Repo:** [kzu/xircle](https://github.com/kzu/xircle)
- **Branch:** `main`
- Prefer local `git`/`gh` if credentials work; otherwise the GitHub connector `github___push_files`.
- Commit app source only: `src/`, `public/` (except `public/__grok/`), `migrations/`, `package.json`, `package-lock.json`, `tsconfig.json`, `vite.config.ts`, `eslint.config.mjs`, `startup.sh`, `AGENTS.project.md`, `src/lib/og/site.json`.
- Never push `node_modules/`, `.vercel/`, `screenshots/`, `artifacts/`, `.grok/skills/`, `.grok/preview.log`, or secrets.
- Commit message: a short summary of the turn.
