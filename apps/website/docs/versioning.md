# Bump version of website

- Update the dependencies in `package.json`
- `pnpm changeset` to bump version of website
  - major bump if the website flow has changed
  - minor bump if the flow is the same but the layout, content is different
  - patch bump for style or copy change
- Github actions will then bump the version for us after it merged into dev.
  - manually, `pnpm changeset version` to bump version of the website
