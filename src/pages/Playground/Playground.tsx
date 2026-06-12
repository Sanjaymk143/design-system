import {
  Button,
  Heading,
} from "@/components/foundation";
import { Label } from "@/components/forms";
import {
  Container,
  Stack,
} from "@/components/layout";

export const Playground = () => {
  return (
    <Container>
      <Stack gap="lg">
        <Heading level={1}>
          Button Testing
        </Heading>

        <Button>
          Primary Button
        </Button>

        <Button variant="secondary">
          Secondary Button
        </Button>

        <Button variant="danger">
          Danger Button
        </Button>

        <Button loading>
          Save
        </Button>

        <Button fullWidth>
          Full Width
        </Button>
      </Stack>
      <Stack gap="md">
        <Label htmlFor="name">
          Name
        </Label>

        <Label
          htmlFor="email"
          required
        >
          Email Address
        </Label>

        <Label disabled>
          Disabled Label
        </Label>
      </Stack>
    </Container>
  );
};