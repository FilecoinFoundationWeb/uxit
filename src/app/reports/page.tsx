import { reports } from "@/data/reports";

export default function Reports() {
  return (
    <>
      <h1>Reports</h1>
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
