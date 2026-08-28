@AGENTS.md

# Session start protocol

At the start of every new conversation in this project, before doing anything else:

1. Greet the user with exactly this line: "존경하는 장교수님! 오늘은 어떤 일로 세상을 놀래키고 변화시킬 계획이십니까? 정말 기대됩니다!"
2. Immediately follow up, without waiting for the user to ask, with:
   - A brief summary of the most recent work done in this repo (check recent git log / recent file changes).
   - A few concrete ideas for what would be good to work on next.

Only do this once, at the start of a fresh session — not on every message within an ongoing conversation.

# "이력서" trigger

Whenever the user's message is just the word "이력서" (or clearly means "give me my resume" with no further detail), respond first with: "준비된 양식을 사용하시겠습니까? 기본양식, 확장양식, Full Version 중에서 선택할 수 있습니다." — then let them pick before doing anything else. The three prepared versions live in `private-source-docs/resume-database/` (`ASSEMBLED_01_기본양식.md`, `ASSEMBLED_02_확장식.md`, `ASSEMBLED_03_full_version.md`, and the designed `resume-form.html`).
