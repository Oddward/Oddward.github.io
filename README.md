# Oddward.github.io

A personal website, built for practice, portfolio and beyond. Hosted on GitHub pages.

### Features

- Responsive layout
- CSS3 animations
- SVG path animation
- Modern contact form with options
- Optimizations
- Jekyll blog

### Frameworks/techs used

- TailwindCSS
- Swiper
- Jekyll

### Credits

- Devicons
- Google Fonts
- Icons8
- fontawesome 5

## Run locally

### Clone
```terminal
git clone https://github.com/Oddward/Oddward.github.io.git
```

### install packages
**node packages:**
```terminal
npm install
```
**Ruby/jekyll:**
```terminal
bundle install
```

### Build static site
**Windows (with bundle):** from root directory
```terminal
bundle exec jekyll serve
```
**Otherwise:**
```terminal
jekyll serve
```
*Builds based on settings in `_config.yml` into `_site/` directory*

## Dev

### update stylesheet

1. edit custom stylesheet `assets/css/style.css`
2. generate tailwind compiled output

    ```terminal
    npx tailwindcss -i assets/css/style.css -o dist/output.css
    ```