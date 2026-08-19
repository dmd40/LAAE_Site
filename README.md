# LAAE Website

This is the official website for the Los Altos Academy of Engineering (LAAE). It includes information about the program, student teams, projects, vehicles, awards, applications, and contact information.

## Running the website

This is a static HTML, CSS, and JavaScript website, so there is no installation or build process.

1. Download or clone the repository.
2. Open the project folder in VS Code.
3. Open `index.html` in a browser, or use the Live Server extension for easier testing.

## Project structure

```text
LAAE_Site/
|-- index.html          # Homepage
|-- css/                # Website styles and Font Awesome files
|-- img/                # Images, logos, team photos, and project photos
|-- pages/              # About, family, project, application, and contact pages
`-- scripts/            # Navigation and homepage slideshow JavaScript
```

## Updating team photos

Team photos are stored inside `img/team_photos/` and organized by school year. The current team pages can be updated in:

- `pages/family/students.html`
- `pages/family/team_pages/`
- `pages/family/past_students/past_students.html`

When adding new photos, keep the filenames clear and make sure the image paths in the HTML match them exactly.

## Homepage slideshow

The homepage slideshow images are listed in `index.html`. Its timing and controls are handled by `scripts/home-carousel.js`, and its appearance is controlled in `css/style.css`.

## Built with

- HTML
- CSS
- JavaScript
- Font Awesome

## Contributors

Created and maintained by the LAAE IT Team.
