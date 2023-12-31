export const BASE_URL = "/unlighthouse/";
export const REPORT_PATH = "/reports/lighthouse.html";

interface Report {
  name: string;
  folder: string;
  site_url: string;
  url?: string;
}

export const reports: Report[] = [
  {
    name: "FFDWeb",
    folder: "FFDWeb",
    site_url: "https://ffdweb.com",
  },
  {
    name: "Filecoin",
    folder: "Filecoin",
    site_url: "https://filecoin.io",
  },
  {
    name: "Filecoin Foundation",
    folder: "FF",
    site_url: "https://fil.org",
  },
  {
    name: "Filecoin Virtual Machine",
    folder: "FilecoinVirtualMachine",
    site_url: "https://fvm.filecoin.io/",
  },
].map((report) => ({
  ...report,
  url: `${BASE_URL}${report.folder}${REPORT_PATH}`,
}));
