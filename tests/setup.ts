import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import 'intersection-observer';


// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})

