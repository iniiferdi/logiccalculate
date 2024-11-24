export const logicOperations = {
    AND: (a, b) => a && b,
    OR: (a, b) => a || b,
    XOR: (a, b) => (a || b) && !(a && b),
    NOT: (a) => !a,
    IMPLIES: (a, b) => !a || b,
    EQUIVALENT: (a, b) => a === b,
  };
  