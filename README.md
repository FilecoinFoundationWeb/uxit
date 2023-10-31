Welcome to the official repository for the User Experience and Interface Team (UXIT) of the Filecoin Foundation. This repository is a hub for our team's projects, resources, and documentation, aimed at supporting and improving the user experience and interface design efforts within the Filecoin ecosystem.

## About This Repository

Within this repository, you'll find a variety of tools, documents, and resources that our team uses to enhance UX and UI initiatives. Among its key features is the hosting of usability reports generated using [Unlighthouse](https://unlighthouse.dev/), which offer valuable insights into the performance and user experience of various Filecoin-related websites.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. To explore our work live, visit the live UXIT site at [uxit.fil.org](https://www.uxit.fil.org).

## Repository Documentation

### Usability Reports

The usability reports section is a dedicated space where we store and display Lighthouse reports for various sites within the Filecoin ecosystem. These reports are helpful for identifying areas of improvement and ensuring that our web properties meet the web standards of performance, accessibility, and user experience.

#### Generating Usability Reports Locally

To generate usability reports locally using [Unlighthouse](https://unlighthouse.dev/), you can use the command-line interface. This allows you to create comprehensive lighthouse reports for different sites.

##### Prerequisites:

Ensure you have [Unlighthouse](https://unlighthouse.dev/) installed globally on your system. If not, you can install it using npm:

```bash
npm install -g unlighthouse
```

##### Generating a Report:

To generate a report for a specific site, you can use the following command format:

```bash
SITE_URL="<Your_Site_URL>" OUTPUT_PATH_PART="<Desired_Output_Directory_Part>" unlighthouse-ci --config unlighthouse.config.ts --build-static
```

Replace `<Your_Site_URL>` with the URL of the site you want to generate a report for. Replace `<Desired_Output_Directory_Part>` with the subdirectory name where you want the report to be saved.

For example, to generate a report for "https://filecoin.io" and save it in a directory part named "Filecoin", you would run:

```bash
SITE_URL="https://filecoin.io" OUTPUT_PATH_PART="Filecoin" unlighthouse-ci --config unlighthouse.config.ts --build-static
```

This command will initiate the Unlighthouse process, and your report will be generated and saved in the specified directory.

##### Viewing the Report:

Once the process completes, you can find the report at the specified output path. Open the `lighthouse.html` file in your web browser to view the detailed lighthouse report.

Absolutely, it's important to document how the data should be updated as well. Here's an addition to the README section:

##### Updating Report Data

After generating new reports, you need to update the data used within the application to reflect the latest reports. The report data is defined at `src/app/data/reports.ts`. Here's how you can update it:

1. Locate the `reports.ts` file in your project directory.

2. Update the `reports` array with the new report details. Each report object should include the following properties:
   - `name`: A user-friendly name for the report.
   - `folder`: The subdirectory name where the report is saved.
   - `site_url`: The URL of the site for which the report was generated.

3. If you've added a new report, ensure you include it as a new object in the `reports` array.

4. The `url` property for each report is automatically generated based on the `BASE_URL`, `folder`, and `REPORT_PATH`. Ensure these constants are correctly set to match the project structure.

Here's an example of how you might add a new report for "https://newsite.com" to the `reports` array:

```typescript
{
  name: "New Site",
  folder: "NewSite",
  site_url: "https://newsite.com",
},
```

The report for "New Site" would be accessible at "https://uxit.fil.org/unlighthouse/NewSite/reports/lighthouse.html".

5. After updating the `reports.ts` file, save your changes.

6. Commit and push the changes to your repository to ensure that the latest report data is available for all collaborators.
