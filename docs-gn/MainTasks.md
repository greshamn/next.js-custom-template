

**Phase 1: Project Foundation & Core UI Setup**

1.  **Task 1: Next.js Project Initialization & Environment Setup ("Vett Pro")**
    *   Objective: Create a new Next.js application with TypeScript, ready for development in your specified environment (`/Volumes/gn-ex/Axsient/Axsient Work/Post Vetting/app/v1`).
    *   Key Considerations: Clean project setup, adherence to Next.js best practices.

2.  **Task 2: Tailwind CSS Integration & Configuration**
    *   Objective: Integrate and configure Tailwind CSS for utility-first styling across the entire application.
    *   Key Considerations: Proper setup for purging unused styles, configuring `tailwind.config.js` for custom themes if anticipated early.

3.  **Task 3: shadcn/ui Initialization & Core UI Component Setup**
    *   Objective: Initialize shadcn/ui, select a base theme (e.g., default, neutral, or stone for a clean start), and add a few foundational UI components (like `Button`, `Card`, `Input`).
    *   Key Considerations: Ensure `components.json` and `tailwind.config.js` are correctly configured by shadcn/ui. This sets the stage for the "clean and sexy" component base.

4.  **Task 4: Global Layout & Theme Management (Light/Dark Mode)**
    *   Objective: Create the main application layout structure (e.g., sidebar, header, main content area) and implement robust light/dark theme switching using `next-themes`.
    *   Key Considerations: The layout should be responsive and adaptable. The theme switch should be easily accessible. Aesthetics of both light and dark themes should be considered from the outset.

5.  **Task 5: Application Folder Structure & Basic Routing Setup**
    *   Objective: Define and implement a best-practice folder structure for pages, components (distinguishing between `ui` from shadcn and custom `app` components), hooks, utilities, etc. Create placeholder files for main application pages (e.g., Suppliers, Vetting Checks, Reports, User Profile, Settings) with basic routing.
    *   Key Considerations: Scalability, maintainability, and ease of navigation for developers. Keep it lean – create folders as needed, don't over-engineer initially. Example: `app/dashboard`, `app/suppliers`, `components/layout`, `components/shared`.

6.  **Task 6: Library Installation & Initial Setup (Core & Charting)**
    *   Objective: Install essential libraries like `lucide-react` (for icons, often a shadcn/ui default), `recharts` (for charts), `react-hook-form` and `zod` (for future form handling).
    *   Key Considerations: Ensure versions are compatible. Basic configuration if required at this stage.

**Phase 2: Dashboard Page - Design Theme & Component Showcase**

7.  **Task 7: Dashboard Page - Conceptual Design & Wireframing**
    *   Objective: Sketch or wireframe the layout and key elements of the Dashboard page. This page is critical as it will define the app's overall aesthetic ("glowing charts," "sexy themed elements").
    *   Key Considerations: Information hierarchy, placement of key metrics, charts, and quick action items. Focus on ease of use despite data density.

8.  **Task 8: Dashboard Page - UI Element Implementation & Theming**
    *   Objective: Build the static UI structure of the Dashboard page using shadcn/ui components and custom Tailwind CSS. Implement key UI patterns (e.g., cards for metrics, data display sections) that will be reused across the app. This is where the "sexy themed elements" start to take shape.
    *   Key Considerations: Consistent use of spacing, typography, color (from the chosen/adapted shadcn/ui theme). Start thinking about subtle hover effects or transitions.

9.  **Task 9: Dashboard Page - "Glowing" Chart Integration (Recharts)**
    *   Objective: Integrate 2-3 sample charts (e.g., a line chart, a bar chart, a donut chart) using Recharts with dummy data. Focus on styling these charts to achieve the desired "glowing" or modern aesthetic that complements the overall theme.
    *   Key Considerations: Chart responsiveness, readability, custom tooltips, and color schemes that align with the light/dark themes. This is a core visual element.

10. **Task 10: Dashboard Page - Responsiveness & Initial Usability Check**
    *   Objective: Ensure the Dashboard page is fully responsive across common screen sizes (desktop, tablet, mobile). Conduct a basic usability walkthrough to identify any immediate pain points in layout or interaction.
    *   Key Considerations: Test on different viewports. Ensure interactive elements are easily clickable/tappable.

**Phase 3: Early Considerations for Future Development**

11. **Task 11: Placeholder for Authentication & RBAC Considerations (Frontend)**
    *   Objective: While full backend authentication/RBAC is later, identify areas in the UI (e.g., navigation links, action buttons on the dashboard) that will eventually be controlled by user roles. Add comments or very basic conditional rendering placeholders (e.g., `if (isAdminPlaceholder)`).
    *   Key Considerations: This is primarily about future-proofing the frontend structure and making notes, not implementing security logic. Keep it extremely simple at this stage.

12. **Task 12: Initial Review & Iteration Plan**
    *   Objective: Review the initial Dashboard page and core setup. Gather feedback on the design direction and plan for any immediate iterations before proceeding to build out other pages.
    *   Key Considerations: Does the dashboard embody the "Vett Pro" brand and desired aesthetic? Is the component usage consistent and efficient?

