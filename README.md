# Hardik Kanzariya | Developer Portfolio

Portfolio website for **Hardik Kanzariya**, a **Senior Web Developer (Laravel)** with more than five years of experience building scalable web applications, REST APIs, administration portals, real-time features, payment workflows, and AWS-backed solutions.

[View Live Portfolio](https://hardiknk.github.io/hardik-kanzariya-portfolio/) · [Download Resume](https://hardiknk.github.io/hardik-kanzariya-portfolio/Hardik-Kanzariya-Resume.pdf) · [LinkedIn](https://www.linkedin.com/in/kanzariyahardik) · [GitHub](https://github.com/hardiknk)

## Professional Focus

- Senior Laravel development and backend architecture
- REST APIs for web and mobile applications
- Administration panels and multi-module platforms
- Payment, AI, real-time, notification, and third-party integrations
- AWS infrastructure and media storage
- Junior-developer mentoring and pull-request reviews
- Full-time, remote, onsite, relocation, and freelance opportunities

## Career Highlights

- More than 5 years of software-development experience
- 12 applications migrated to Laravel
- Experience working in cross-functional teams of 4-5 people
- Available to join within 7 days
- Open to Ahmedabad, remote, and relocation opportunities

## Selected Case Studies

The portfolio includes three anonymized professional case studies. Client names, source code, screenshots, and live URLs are withheld for confidentiality.

1. **AI-Assisted Collaborative Writing Platform**
   - Laravel administration panel and REST APIs
   - Turn-based contribution workflows
   - OpenAI API integration

2. **Subscription Learning and Video Platform**
   - Course, subscription, progress, referral, and reporting workflows
   - WebSocket-based communication
   - Chunked video uploads to Amazon S3
   - Custom roles and permissions

3. **Location-Based Sports Coaching Platform**
   - Shared Laravel backend and separate administration portals
   - Location search using the Haversine formula
   - Razorpay payments and commission workflows
   - AWS S3 storage and Firebase push notifications
   - Junior-developer mentoring and code reviews

The mobile clients for these projects were developed by separate frontend teams. Hardik's contribution focused on Laravel backends, administration portals, and APIs consumed by the mobile applications.

## Portfolio Technology

| Area | Technology |
|---|---|
| Frontend | React 18, TypeScript, Tailwind CSS |
| Build tooling | Vite |
| Motion | Framer Motion |
| 3D components | Three.js, React Three Fiber, React Three Drei |
| Hosting | GitHub Pages |
| Deployment | GitHub Actions |

## Run Locally

Requirements:

- Node.js 20 or newer
- npm

Clone and start the project:

```bash
git clone https://github.com/hardiknk/hardik-kanzariya-portfolio.git
cd hardik-kanzariya-portfolio
npm install
npm run dev
```

Create a production build:

```bash
npm run build
```

The generated website is written to `dist/`. Vite uses relative asset paths so the site works under the GitHub Pages repository URL.

## Environment Configuration

Copy `.env.example` to `.env` for local customization:

```bash
cp .env.example .env
```

| Variable | Purpose | Example |
|---|---|---|
| `VITE_AVAILABILITY_STATUS` | Joining availability | `Available within 7 days` |
| `VITE_WORK_PREFERENCE` | Location and work preference | `Ahmedabad · Remote · Open to relocate` |
| `VITE_REMOTE_TIMEZONE` | Remote timezone availability | `Flexible across time zones` |
| `VITE_TARGET_ROLE` | Hero role title | `Senior Web Developer (Laravel)` |
| `VITE_PROFILE_IMAGE_MODE` | Portrait display mode | `photo`, `placeholder`, or `hidden` |
| `VITE_PROFILE_IMAGE_PATH` | Public portrait path | `./hardik-kanzariya.jpg` |
| `VITE_LINKEDIN_URL` | LinkedIn profile | `https://www.linkedin.com/in/kanzariyahardik` |
| `VITE_GITHUB_URL` | GitHub profile | `https://github.com/hardiknk` |

Values prefixed with `VITE_` are included in the public browser bundle. Do not use these variables for passwords, private tokens, or secret API keys.

## Deploy to GitHub Pages

This repository already contains the deployment workflow at `.github/workflows/deploy-pages.yml`.

You do **not** paste the React source code into the GitHub Pages settings screen. Push the project to the `main` branch and GitHub Actions will install dependencies, build the site, upload the `dist/` output, and publish it automatically.

```bash
git status
git add -A
git commit -m "Update portfolio"
git push origin main
```

To configure Pages for a new repository:

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push a commit to the `main` branch.
5. Check the **Actions** tab for the deployment result.

For hosted configuration, add the variables from the table above under:

**Settings → Secrets and variables → Actions → Variables**

After changing a repository variable, open the **Actions** tab and manually run the **Deploy portfolio to GitHub Pages** workflow, or push another commit to `main`.

## Project Structure

```text
.
├── .github/workflows/    GitHub Pages deployment
├── output/pdf/           Generated resume artifact
├── public/               Public images, resume, and favicon
├── src/components/       React interface components
├── src/constants/        Portfolio content and configuration
├── src/hoc/              Shared section wrapper
├── src/utils/            Motion utilities
└── vite.config.js        Vite configuration
```

## Privacy

- Professional case studies use anonymized titles.
- Confidential client names, source code, screenshots, and live project URLs are not published.
- Hiding the profile image removes it from the visible page but does not erase an already committed image from Git history.

## Contact

- Email: [kanzariyahardik8511@gmail.com](mailto:kanzariyahardik8511@gmail.com)
- LinkedIn: [linkedin.com/in/kanzariyahardik](https://www.linkedin.com/in/kanzariyahardik)
- GitHub: [github.com/hardiknk](https://github.com/hardiknk)
- Portfolio: [hardiknk.github.io/hardik-kanzariya-portfolio](https://hardiknk.github.io/hardik-kanzariya-portfolio/)

## Credits and License

This portfolio was adapted from an open-source React portfolio template. The original MIT license is preserved in [`LICENSE`](./LICENSE).
