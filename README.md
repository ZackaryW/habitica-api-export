# Habitica API Export

A simple tool that automatically generates and maintains an up-to-date API specification document from Habitica's codebase. This repository exists solely to keep a current JSON specification of Habitica's API endpoints.

## What This Does

- Pulls the latest API documentation from Habitica's develop branch
- Generates a clean `api-spec.json` file
- Updates automatically every 6 months
- Can be manually triggered if needed

## The Spec File

The `api-spec.json` in the root directory contains all the v3 API endpoints from Habitica. It's automatically updated, so you can always get the latest API structure here.

## For Developers

If you need to run this locally:

```bash
git clone https://github.com/ZackaryW/habitica-api-export.git
cd habitica-api-export
npm install
npm run export
```

That's it! The script will generate the spec file in the root directory.

## How It Works

This is just a simple automation that:
1. Checks out Habitica's API code
2. Uses apidoc to generate the spec
3. Saves it as JSON
4. Updates every 6 months via GitHub Actions

## Credits

Thanks to [Habitica](https://github.com/HabitRPG/habitica) for their API and [apidoc](https://apidocjs.com/) for the documentation generation.

