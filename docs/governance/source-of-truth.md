# Repository source of truth and governance

- **Status:** Accepted governance rule
- **Scope:** Aurora Website repository
- **Last reviewed:** 2026-11-02

## 1. Authoritative record

The Pokejoueur/aurora-website Git repository is the sole authoritative source of truth for Aurora Website.

Conversation history, informal notes, external project boards, and undocumented assumptions may provide context, but they do not override repository contents. A project decision becomes authoritative only when it is recorded in the repository in the appropriate form.

The repository is authoritative for what Aurora Website records and publishes. Claims about Aurora OS or Aurora Browser must be supported by traceable evidence. The website repository must not imply direct access to private product repositories or private implementation details.

## 2. Roles and authority

- The repository owner retains project ownership and final decision authority.
- The designated repository maintainer performs implementation, documentation, validation, and review through the connected GitHub access.
- No other contributor or automated service is assumed to have repository access unless the repository owner explicitly changes access.

Repository access is not permission to make irreversible or destructive changes. Do not force-push, rewrite history, delete user data, expose secrets, or bypass review expectations.

## 3. Where decisions belong

- Architecture decisions: docs/architecture/adr/
- Implementation sequence and phase state: docs/development/roadmap.md
- Governance rules: docs/governance/
- Public maturity records: the versioned status registry, once implemented
- Public milestone history: the curated changelog, once implemented

If a decision exists only in conversation, it is not yet an authoritative repository decision.

## 4. Evidence and status discipline

Use only these status values:
- implemented
- tested
- integrated
- prototype
- designed
- planned
- blocked
- not-verified

Every public status claim must have:
- a traceable evidence reference;
- a verification date;
- enough scope and context to understand the claim;
- limitations where the evidence does not prove the full feature.

Do not infer that a feature works because a source file exists. Do not infer tests pass because test files exist. Do not infer integration because components are present in the same repository. Record unavailable evidence as not-verified.

The status registry itself is not implemented yet. Until it exists, this policy governs documentation and future status records.

## 5. Changelog policy

The public changelog records official releases and meaningful technical milestones only. It is not a commit feed.

Each entry must link to evidence in GitHub, such as an official release, merged pull request, or relevant verified change. Planned work, discussion, and unverified claims are not completed milestones.

Changelog maintenance occurs during active work sessions. No background monitoring or autonomous repository surveillance is assumed.

## 6. Change procedure

Before changing project files:
1. Inspect the current branch, repository tree, relevant files, and recent history.
2. Identify existing work and avoid overwriting unrelated changes.
3. Confirm the change is consistent with accepted ADRs.
4. Make a focused, reviewable change on a dedicated branch where appropriate.
5. Run relevant validation.
6. Review the full diff, including security and scope.
7. Record evidence and update repository documentation.

Do not claim a test, build, deployment, commit, or push succeeded unless the corresponding result is available and verified.

## 7. Repository confidentiality

The website is public-facing. Never place credentials, tokens, private repository contents, private URLs, or sensitive operational details in client-side code or public content.

Never grant the frontend access to a private Aurora repository. Public status information must be deliberately curated and safe to disclose.

## 8. Current implementation boundary

This document establishes governance only. It does not claim that the website, status registry, changelog, CI, or deployment has been implemented.
