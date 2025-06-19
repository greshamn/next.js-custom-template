**Main Menu Items & Sub-Menus:**

1.  **Dashboard**
    *   *(No sub-menus - Direct navigation to a personalized overview)*
    *   *Content Idea: Key metrics, pending actions, recent vetting activity, risk alerts.*

2.  ** Vetting Center**
    *   New Vetting Request *(Wizard: Identify Supplier/Individual, select specific checks from Individual, Company, Location categories, and set up Post-Vetting parameters if initiating)*
    *   Active Requests *(Track progress of ongoing vetting processes)*
    *   Completed Vettings *(Access historical reports, summaries, and full details of finished vetting processes)*

3.  **Suppliers**
    *   Supplier List *(View, search, filter all suppliers; columns for status, risk level, last vetted date)*
    *   Add New Supplier *(If a supplier needs to be created before initiating vetting)*
    *   *[Dynamic Sub-Menu: Recently Viewed Suppliers – e.g., Last 5]*
    *   *(Clicking a supplier from the list will navigate to a comprehensive Supplier Profile page. This page itself will have internal navigation, likely tabs or sections, for:*
        *   *Supplier Overview & Risk Score*
        *   *Company Vetting (CIPC, Credit, Bank, BEE, COID, Media Search, AML, Natis Report details & results)*
        *   *Associated Individuals (List of directors, key personnel)*
        *   *Business Location Verification (Physical photos, geo-points, verification status & history)*
        *   *Post-Vetting Analysis (RFP/Invoice fraud insights, market value comparisons related to this supplier)*
        *   *Documents & Attachments*
        *   *Full Audit Trail for this Supplier)*

4.  **Individuals**
    *   Individual List *(View, search, filter all vetted individuals, especially if they can be vetted independently or are key contacts across multiple suppliers)*
    *   Add New Individual *(If an individual needs to be created before initiating vetting)*
    *   *[Dynamic Sub-Menu: Recently Viewed Individuals]*
    *   *(Clicking an individual from the list navigates to their detailed Individual Profile page with internal navigation for:*
        *   *Individual Overview & Risk Score*
        *   *KYC-ID Verification Details*
        *   *Lifestyle Assessment & Audit Results*
        *   *Proof of Income Verification*
        *   *Individual Credit Report*
        *   *Criminal Record Check Status*
        *   *Driver's License & Vehicle Details*
        *   *Qualifications Verification*
        *   *Associated Suppliers (if any)*
        *   *Full Audit Trail for this Individual)*

5.  **Reporting & Insights**
    *   Standard Reports *(Access pre-defined PDF templates: Pre-Vetting Summary, Full Company Report, Individual Background Check, Post-Vetting Risk Assessment)*
    *   Generate Custom Report *(A builder interface to select specific data points and suppliers/individuals)*
    *   Risk Analytics Dashboard *(LLM-driven insights, comparative risk analysis, trend identification across your supplier base)*
    *   Compliance & Audit Trail Reports

6.  **Field Operations** *(For managing physical, on-site verifications like Business Location)*
    *   Verification Dashboard *(Overview of all field tasks)*
    *   Assign New Verification Task
    *   My Assigned Tasks
    *   Completed Verifications Log

---
*(Visual Separator in the Sidebar)*
---

7.  **Administration** *(Visible based on User Role - e.g., Admin, Super Admin)*
    *   **User & Access Management**
        *   Manage Users *(Add, edit, deactivate user accounts)*
        *   Roles & Permissions *(Define user roles like "Procurement Officer," "HR Manager," "Field Agent," "Admin" and their specific access rights - RBAC)*
    *   **Vetting Configuration**
        *   Check Types & Parameters *(Define and configure all available checks: Individual, Company, Location. Set validity periods, associated 3rd party engines, risk scoring criteria)*
        *   Vetting Packages *(Create/manage pre-defined bundles of checks for different vetting levels or supplier types)*
        *   Report Templates *(Customize the structure and branding of downloadable PDF reports)*
        *   LLM & AI Settings *(Configure connections to LLMs like OpenAI/Gemini/Claude, manage prompt templates for insights if applicable)*
    *   **System & Company Configuration**
        *   Data Integrations *(Manage API keys and settings for 3rd Party Engines: CBP, Transunion, MIE, Experian, etc.)*
        *   Company Profile *(Manage requesting department lists like HR, Procurement, Other; business units)*
        *   White-Labeling Settings *(Customize logo, primary/secondary colors for partner businesses)*
        *   System Audit Logs *(Detailed logs of all system and user actions for security and compliance)*
    *   **Billing & Subscription** *(If this is a SaaS product)*

8.  **My Account** *(For the logged-in user)*
    *   Profile Settings *(Name, contact details, profile picture)*
    *   Security *(Change password, manage Multi-Factor Authentication)*
    *   Notification Preferences *(Email/in-app alerts for vetting status, reports, etc.)*
    *   Theme Selection *(Toggle Light/Dark mode)*

9.  **Help Center**
    *   Knowledge Base & FAQs
    *   User Guides & Tutorials
    *   Contact Support / Submit Ticket

---

**UX Considerations for this Structure:**

*   **Clear Entry Points:** "Vetting Center" is the primary action hub. "Suppliers" and "Individuals" are key data repositories.
*   **Progressive Disclosure:** Top-level menus are broad. Clicking into a supplier/individual profile reveals more detailed, context-specific options (often as tabs within that profile page), preventing overwhelming the main sidebar.
*   **Role-Based Visibility:** The "Administration" section and certain sub-menus would only be visible to users with the appropriate permissions.
*   **Search:** A global search bar (in the header, not sidebar) would be essential to quickly find suppliers, individuals, or specific reports across the entire application.
*   **Breadcrumbs:** Crucial for helping users understand their location within the app, especially when navigating deep into profiles or settings.
*   **Wizard for "New Vetting Request":** This is a critical workflow. The wizard should guide the user step-by-step:
    1.  Identify Supplier (search existing or add new).
    2.  Identify related Individuals (if applicable, link existing or add new).
    3.  Select Checks: Present clear sections for "Individual Checks," "Company Checks," and "Business Location Verification," allowing users to select all relevant checks from the lists provided in your blueprint.
    4.  Confirm and Initiate.
