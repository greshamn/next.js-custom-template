**App Summary: Comprehensive Supplier Vetting & Risk Management Platform**

**1. Vision & Core Purpose:**

*   **Product:** A Next.js web application designed as a "security-first" platform for comprehensive pre and post-supplier vetting, specifically tailored for the South African market.
*   **Mission:** To be the first platform in South Africa offering an end-to-end solution for verifying suppliers, detecting fraudulent activities from RFP to invoice, and managing supplier risk through a centralized, user-friendly interface.
*   **Target Audience:** Primarily procurement departments within medium to large enterprises (e.g., Sibanye Stillwater). The platform may also be utilized by your internal team to provide managed vetting services to these clients. Suppliers will have no direct interaction with the platform.

**2. Key Features & Functionality:**

*   **Pre-Vetting Services:**
    *   Personal checks: ID number verification, bank account verification, CIPC director checks, personal lifestyle assessments.
    *   Integration with various vetting companies (MIE, CPB, Lexus Nexus, XDS, etc.) via n8n for automated data retrieval.
*   **Post-Vetting Services:**
    *   Fraud detection: Analysis of RFPs won by suppliers against their subsequent invoices to identify discrepancies and potential fraudulent activities.
    *   Physical Business Verification: On-site verification of supplier business locations, including capturing and uploading photos with GPS coordinates to the app. This is crucial for clients requiring suppliers within a specific geographic radius to support local communities.
*   **Centralized Data Management:**
    *   Storage and management of large volumes of supplier data.
    *   User profiles with picture storage.
    *   Tracking of approximately 100 different vetting checks per supplier, including when checks were performed and their validity periods, with high granularity.
*   **Reporting & Analytics:**
    *   Generation of standardized PDF reports summarizing all checks conducted on a supplier, providing an overall insight. These templates will be pre-defined and consistently applied.
    *   LLM-powered insights (OpenAI, Google Gemini, or Claude AI) to:
        *   Analyze and summarize vetting results.
        *   Identify potential red flags and anomalies.
        *   Suggest areas requiring further investigation by clients.
*   **Workflow & Usability:**
    *   Ability to group various vetting checks together (vetting packages) to run on selected suppliers.
    *   Clean, intuitive, and easy-to-navigate menu structure and user flow.
    *   Breadcrumbs for easy navigation within the application.
*   **White-Labeling:**
    *   Basic white-labeling capabilities for other businesses or partners, limited to customizing the logo and color scheme.

**3. Technology Stack & Architecture:**

*   **Frontend:** Next.js
*   **UI Framework:** Tailwind CSS (under consideration)
*   **Backend/API:** Next.js (API routes), potentially n8n for orchestrating external API calls.
*   **Database:** PostgreSQL (for structured data), with a separate, cost-effective object storage solution (e.g., Huawei Cloud Object Storage Service, or Xneelo's offerings, potentially AWS S3 if a hybrid model is chosen) for storing photos and documents, linking them via URLs/references in Postgres.
*   **ORM:** Prisma
*   **Automation/Integration:** n8n for all API calls to external vetting service providers.
*   **AI/ML:** Integration with LLM APIs (OpenAI, Google Gemini, Claude AI).
*   **Deployment:** Cloud-hosted. Strong preference for cost-effective solutions with potential for local South African hosting (e.g., Huawei Cloud, Xneelo). Open to hybrid models (e.g., Xneelo for the main app, dedicated storage elsewhere).

**4. User Interface & User Experience (UI/UX):**

*   **Theme:** Light and Dark themes.
*   **Responsiveness:** Fully responsive web application to fit all screen sizes.
*   **Ease of Use:** High priority, especially given the potentially large datasets (e.g., 14,000 suppliers with 40-80 checks each). The design must facilitate easy viewing and comprehension of extensive reports and supplier data.
*   **Navigation:** Clean menu structure and breadcrumbs for intuitive navigation.

**5. Security, Roles & Compliance:**

*   **Security First Approach:** Foundation of the application.
*   **Authentication:** Strong global authentication mechanisms.
*   **Authorization:** User roles and Role-Based Access Control (RBAC) implemented across the entire web application.
*   **Compliance:** Adherence to South African data protection laws, particularly POPIA.
    *   Governance controls: Defining which user roles can run specific checks, view reports/results.
    *   Escalation procedures: If an anomaly or suspected fraud is detected, only users with appropriate authority (e.g., managers) can take action, such as forwarding the report to an internal investigation team.
*   **Audit Trails:** Implied need for tracking user actions and data access for compliance and security.

**Next Steps & Further Considerations:**

*   **Detailed UI/UX Design:** Given the data-heavy nature, wireframing and prototyping will be crucial to ensure usability.
*   **Specific LLM Prompt Engineering:** Defining how the LLM will process data and generate insights will require careful prompt design.
*   **Data Migration/Ingestion:** If there's existing supplier data, planning for its migration will be important.
*   **Scalability Planning:** While starting with cost-effective solutions, keep future scalability in mind as user and data volumes grow.
*   **Detailed Cost Analysis:** Thoroughly compare hosting and service options (Huawei Cloud, Xneelo, hybrid models) to ensure long-term cost-effectiveness.

