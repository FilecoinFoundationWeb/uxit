import { reports } from "@/data/reports";

export default function UsabilityReports() {
  return (
    <>
      <h1>Usability Reports</h1>
      <ul>
        {reports.map((report) => (
          <li key={report.folder}>
            <a href={report.url}>{report.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
