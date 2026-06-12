import {
  Button,
  Heading,
} from "@/components/foundation";

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
    </Container>
  );
};