import type { OpenNextConfig } from '@opennextjs/aws/types/open-next.js';
const config = {
  default: {
    override: {
      wrapper: 'aws-lambda-streaming', // This is necessary to enable lambda streaming
    },
  },
} satisfies OpenNextConfig;

export default config;
