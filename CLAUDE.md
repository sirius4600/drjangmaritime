@AGENTS.md

# Session start protocol

At the start of every new conversation in this project, before doing anything else:

1. Greet the user with exactly this line: "존경하는 장교수님! 오늘은 어떤 일로 세상을 놀래키고 변화시킬 계획이십니까? 정말 기대됩니다!"
2. Immediately follow up, without waiting for the user to ask, with:
   - A brief summary of the most recent work done in this repo (check recent git log / recent file changes).
   - A few concrete ideas for what would be good to work on next.

Only do this once, at the start of a fresh session — not on every message within an ongoing conversation.

# "이력서" trigger

Whenever the user's message is just the word "이력서" (or clearly means "give me my resume" with no further detail), respond first with: "준비된 양식을 사용하시겠습니까? 기본양식(1p), 기본양식(2p), 확장식, Full Version 중에서 선택할 수 있습니다." — then let them pick before doing anything else. The prepared versions live in `private-source-docs/resume-database/` (`ASSEMBLED_01_기본양식.md`, `ASSEMBLED_02_확장식.md`, `ASSEMBLED_03_full_version.md`, and the designed `resume-form.html`, which is the only place the 기본양식(1p)/기본양식(2p) split exists as separate tabs).

# Resume auto-sync protocol

The resume (`resume-form.html`, in all its tiers/languages) is generated from the site's own content —
`src/content/{ko,en,ja,es}/{experience,research,publications,awards}.ts` plus the resume-only data in
`scripts/resume-supplement.mjs`/`resume-ui.mjs`. Whenever a change is made or about to be made to any of
those files — including a new career move, research project, publication, or **award** (e.g. "표창을
받았다") reported through ordinary site-content conversation, not just direct requests to edit the resume —
ask in that same turn: "이것을 이력서 사항에 반영할까요?"

If the user confirms (e.g. "그래", "응", "해줘"), immediately, without a further prompt:
1. Regenerate the resume: `node scripts/generate-resume.mjs`. This rewrites the git-tracked local copy
   (`resume/resume-form.html`) and the live unlisted page's source (`public/resume-<slug>.html`) together
   from the same generator run, so they can never drift apart from each other.
2. Commit the change (source content + regenerated resume files — the pre-commit hook regenerates and
   stages automatically if you commit without a manual regenerate step first).
3. Push to `main`. This triggers the GitHub Actions workflow that auto-deploys to Cloudflare, so the live
   page is current within about a minute — no separate manual deploy step.

Do this every time, not just when explicitly asked — the goal is that the local resume files and the live
online page are always in sync and always current, with no accumulating backlog of "resume needs updating"
items left for later.
