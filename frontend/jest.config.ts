/**
 * Jest + Next.js + TypeScript
 * docs: https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';
import nextJest from 'next/jest';

// грузим next.config.js, .env.*
const createJestConfig = nextJest({ dir: './' });

const config: Config = {
    // общие
    clearMocks: true,
    testEnvironment: 'jsdom',

    // покрытия
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    coverageReporters: ['lcov', 'text', 'html'],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },

    // алиасы из tsconfig
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
    },

    // хук для RTL, msw и т. п.
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default createJestConfig(config);
