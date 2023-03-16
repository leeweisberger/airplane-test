import {
  Stack,
  Table,
  Heading,
  useComponentState,
  Card,
  Button,
  DescriptionList,
} from "@airplane/views";
import airplane from "airplane";

// Views documentation: https://docs.airplane.dev/views/getting-started
const CustomerDashboard = () => {
  return (
    <Stack>
      <Heading>Customer dashboard</Heading>
      <Table title="Accounts" task="demo_list_accounts" />
    </Stack>
  );
};

export default airplane.view(
  {
    slug: "demo_customer_dashboard_getting_started",
    name: "[DEMO] Customer dashboard - getting started",
  },
  CustomerDashboard
);
