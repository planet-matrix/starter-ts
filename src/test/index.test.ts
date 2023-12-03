import { describe, expect, it } from "vitest"

import { one, two } from ".."

describe("should", () => {
  it("exported", () => {
    expect(one + one).toEqual(two)
  })
})
