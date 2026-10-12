# Versions

The version in the app is the release number on GitHub: 1.4, 1.5, and so on. Between releases, changes get a third number (1.4.1, 1.4.2 …) in `script.js`, so the page shows which change it is.

## When you release

1. Make the release on GitHub with the tag `v1.4` (the tag may be `v` followed by the whole number only).
2. The workflow `.github/workflows/set-version.yml` runs. It sets `APP_VERSION` to `1.4` and `APP_UPDATED` to the release date, and commits that to main.
3. Continue on the working branch. Its first change after the release is 1.4.1, set by hand in `APP_VERSION`.

Only the whole version comes from the release. The minor numbers are set by hand, so you can see the changes between two releases.
