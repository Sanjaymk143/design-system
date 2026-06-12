import {
  Button,
  Heading,
} from "@/components/foundation";

import { Label, Input } from "@/components/forms";

import {
  Container,
  Stack,
} from "@/components/layout";

export const Playground = () => {
  return (
    <Container>
      <Stack gap="lg">
        {/* Buttons Section */}
        <section>
          <Stack gap="md">
            <Heading level={1}>
              Buttons
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
        </section>

        {/* Forms Section */}
        <section>
          <Stack gap="md">
            <Heading level={2}>
              Forms
            </Heading>

            <Label htmlFor="name">
              Name
            </Label>

            <Input
              id="name"
              placeholder="Enter your name"
            />

            <Label
              htmlFor="email"
              required
            >
              Email Address
            </Label>

            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
            />

            <Label>
              Error State
            </Label>

            <Input
              error
              placeholder="Invalid value"
            />

            <Label disabled>
              Disabled Input
            </Label>

            <Input
              disabled
              placeholder="Disabled"
            />
          </Stack>
        </section>
      </Stack>
    </Container>
  );
};