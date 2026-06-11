import {
  Container,
  Grid,
  Stack,
} from "../../components/layout";

import {
  Heading,
  Text,
} from "../../components/foundation";

export const Playground = () => {
  return (
    <Container>
      <Stack gap="lg">
        <Heading level={1}>
          Design System Playground
        </Heading>

        <Text size="lg">
          Testing Layout Primitives
        </Text>

        <Grid columns={3}>
          <div>Card 1</div>
          <div>Card 2</div>
          <div>Card 3</div>
        </Grid>
      </Stack>
    </Container>
  );
};