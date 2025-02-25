import Button from '@/components/ui/Button';
import { DASHBOARD_REPORT_RANGE } from '@/configuration/constants';

const DashboardFilters = ({ filters, setFilters }) => {
  const setReportRange = (value) => {
    setFilters({
      ...filters,
      reportRange: value,
    });
  };
  return (
    <div className='flex gap-3'>
      <Button
        variant='texted-outlined'
        size='slim'
        disabled={DASHBOARD_REPORT_RANGE.today === filters.reportRange}
        onClick={() => setReportRange(DASHBOARD_REPORT_RANGE.today)}
      >
        Today
      </Button>
      <Button
        variant='texted-outlined'
        size='slim'
        disabled={DASHBOARD_REPORT_RANGE.thisWeek === filters.reportRange}
        onClick={() => setReportRange(DASHBOARD_REPORT_RANGE.thisWeek)}
      >
        This Week
      </Button>
      <Button
        variant='texted-outlined'
        size='slim'
        disabled={DASHBOARD_REPORT_RANGE.thisMonth === filters.reportRange}
        onClick={() => setReportRange(DASHBOARD_REPORT_RANGE.thisMonth)}
      >
        This Month
      </Button>
    </div>
  );
};

export default DashboardFilters;
