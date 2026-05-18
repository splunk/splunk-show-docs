# Splunk Show Documentation

User documentation for the [Splunk Show](https://splunk.show) platform — built with [Hugo](https://gohugo.io/) and the [Relearn](https://mcshelby.github.io/hugo-theme-relearn/) theme.

## Prerequisites

- **Hugo Extended** (v0.121.0 or later recommended)
- **Git** (for cloning and submodule management)

### macOS

```bash
brew install hugo
```

### Other Platforms

Download from [Hugo Releases](https://github.com/gohugoio/hugo/releases)

## Getting Started

### 1. Clone the Repository

```bash
git clone --recurse-submodules https://github.com/splunk/splunk-show-docs.git
cd splunk-show-docs
```

If you already cloned without `--recurse-submodules`, initialize the theme:

```bash
git submodule update --init --recursive
```

### 2. Run the Development Server

```bash
hugo serve
```

The site will be available at **http://localhost:1313**

The server watches for changes and automatically reloads the browser.

#### Useful flags:

```bash
hugo serve -D              # Include draft content
hugo serve --bind 0.0.0.0  # Allow access from other devices on your network
```

### 3. Build for Production

```bash
hugo
```

Output will be in the `public/` directory.

## Project Structure

```
splunk-show-docs/
├── config.yaml          # Site configuration
├── content/             # Documentation pages (Markdown)
│   ├── _index.md        # Homepage
│   ├── demos/           # Demo-related docs
│   ├── workshops/       # Workshop-related docs
│   └── ...
├── static/
│   ├── css/custom.css   # Custom styles
│   └── images/          # Static images
├── assets/
│   └── css/             # Theme variant overrides
├── layouts/
│   └── partials/        # Custom partial templates
└── themes/
    └── relearn/         # Hugo Relearn theme (git submodule)
```

## Editing Content

### Adding a New Page

Create a new `.md` file in the appropriate `content/` subdirectory:

```bash
# Example: Add a new page under "demos"
touch content/demos/my-new-page.md
```

Add frontmatter at the top:

```markdown
+++
title = "My New Page"
weight = 10
+++

Your content here...
```

### Adding a New Section

1. Create a new directory under `content/`
2. Add an `_index.md` file with section frontmatter:

```markdown
+++
title = "Section Title"
weight = 5
chapter = false
+++

Optional section description...
```

### Images

Place images in `static/images/` and reference them in Markdown:

```markdown
![Alt text](/images/my-image.png)
```

## Theme Customization

The site includes three theme variants. Users can switch between them using the **dropdown selector** in the sidebar footer (built into the Relearn theme):

| Variant | Description |
|---------|-------------|
| **Auto** | Follows system/OS preference |
| **Light** | Splunk light theme |
| **Dark** | Splunk dark theme |

### Theme Files

| File | Purpose |
|------|---------|
| `assets/css/theme-splunk-light.css` | Light theme CSS variables |
| `assets/css/theme-splunk-dark.css` | Dark theme CSS variables |

### Configuration

Theme variants are defined in `config.yaml`:

```yaml
params:
  themeVariant:
    - identifier: "auto"
      name: "Auto"
    - identifier: "splunk-light"
      name: "Light"
    - identifier: "splunk-dark"
      name: "Dark"
```

## Useful Links

- [Splunk Show Platform](https://splunk.show)
- [Hugo Documentation](https://gohugo.io/documentation/)
- [Relearn Theme Docs](https://mcshelby.github.io/hugo-theme-relearn/)
